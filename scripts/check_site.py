"""检查 GitHub Pages 已发布的教程；只使用 Python 标准库。"""
from html.parser import HTMLParser
from urllib.request import Request, urlopen

BASE = 'https://www.labafan.cc/hello-c/'


class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.hrefs = []

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.hrefs.extend(value for key, value in attrs if key == 'href')


for page in ('index', 'macos', 'windows', 'linux'):
    with urlopen(Request(BASE + ('' if page == 'index' else page + '.html'), headers={'User-Agent': 'Mozilla/5.0'}), timeout=30) as response:
        html = response.read().decode()
    assert 'vscode-install-guide' not in html, page
    assert ('<title>Hello C</title>' if page == 'index' else ' · Hello C</title>') in html, page
    links = Links()
    links.feed(html)
    assert '{{' not in html and '{%' not in html, page
    assert f'https://github.com/LaBaFan/hello-c/edit/main/docs/{page}.md' in links.hrefs, page
    for name in ('macos', 'windows', 'linux'):
        assert f'/hello-c/{name}.html' in links.hrefs, (page, name)
    assert 'aria-current="page"' in html, page
    print(f'OK {page}')
with urlopen(Request(BASE + 'assets/style.css', headers={'User-Agent': 'Mozilla/5.0'}), timeout=30) as response:
    assert '--ink:' in response.read().decode()
print('OK stylesheet')
