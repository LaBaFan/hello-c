"""检查本地 Jekyll 构建或已发布网站；只使用 Python 标准库。"""
import argparse
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from urllib.request import Request, urlopen


class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links = []
        self.assets = []
        self.ids = set()
        self.h1_count = 0
        self.feed(html)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.add(attrs['id'])
        if tag == 'a' and attrs.get('href'):
            self.links.append(attrs['href'])
        if tag in ('script', 'img') and attrs.get('src'):
            self.assets.append(attrs['src'])
        if tag == 'link' and attrs.get('href'):
            self.assets.append(attrs['href'])
        if tag == 'h1':
            self.h1_count += 1


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--base', default='https://www.labafan.cc/hello-c/')
    parser.add_argument('--site-dir', type=Path, help='Jekyll 构建输出目录')
    args = parser.parse_args()
    base = args.base.rstrip('/') + '/'
    prefix = urlsplit(base).path
    cache = {}

    def read(path):
        if path not in cache:
            if args.site_dir:
                cache[path] = (args.site_dir / path).read_bytes()
            else:
                request = Request(urljoin(base, path), headers={'User-Agent': 'Hello-C-site-check'})
                with urlopen(request, timeout=30) as response:
                    cache[path] = response.read()
        return cache[path]

    sources = {
        'index.html': 'index.md',
        'environment/index.html': 'environment/index.md',
        'materials/index.html': 'materials/index.md',
        'qa/index.html': 'qa/index.md',
        'beyond/index.html': 'beyond/index.md',
        'macos.html': 'environment/macos.md',
        'linux.html': 'environment/linux.md',
        'windows.html': 'environment/windows.md',
    }
    core_pages = list(sources)
    names = core_pages
    if args.site_dir:
        names = sorted(set(names) | {p.relative_to(args.site_dir).as_posix()
                                   for p in args.site_dir.rglob('*.html')})
    for name in names:
        html = read(name).decode()
        page = Page(html)
        assert '{{' not in html and '{%' not in html, (name, '未渲染的模板')
        assert page.h1_count == 1, (name, '需要且仅有一个一级标题')
        assert '<html lang="zh-CN">' in html, name
        if name in core_pages:
            assert 'aria-current=' in html, (name, '缺少当前导航状态')
        assert ('<title>Hello C</title>' if name == 'index.html' else ' · Hello C</title>') in html, name
        for target in ('environment', 'materials', 'qa', 'beyond'):
            assert f'{prefix}{target}/' in page.links, (name, target)
        assert html.count('assets/copy-code.js') == 1, (name, '复制脚本')
        if name in ('macos.html', 'linux.html', 'windows.html'):
            positions = [page.links.index(f'{prefix}{target}.html')
                         for target in ('macos', 'linux', 'windows')]
            assert positions == sorted(positions), (name, '文档导航顺序')
        for link in page.links + page.assets:
            url = urlsplit(urljoin(urljoin(base, name), link))
            if url.netloc != urlsplit(base).netloc or url.scheme not in ('http', 'https'):
                continue
            assert url.path.startswith(prefix), (name, '链接遗漏 baseurl', link)
            target = unquote(url.path[len(prefix):]) or 'index.html'
            if target.endswith('/'):
                target += 'index.html'
            payload = read(target)
            if url.fragment and target.endswith('.html'):
                assert unquote(url.fragment) in Page(payload.decode()).ids, (name, link)
        print(f'OK {name}')
    assert b'Comic Sans MS' in read('assets/style.css')
    assert b'LXGW WenKai' in read('assets/fonts/fonts.css')
    for name in ('LXGWWenKai-Regular.woff2', 'LXGWWenKai-Common.woff2'):
        assert read('assets/fonts/' + name)[:4] == b'wOF2', name
    assert b'SIL OPEN FONT LICENSE' in read('assets/fonts/OFL.txt')
    print('OK links, assets, fonts and license')


if __name__ == '__main__':
    main()
