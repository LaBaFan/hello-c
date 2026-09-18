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


pages = {'index': '', 'environment/index': 'environment/', 'materials/index': 'materials/',
         'qa/index': 'qa/', 'environment/macos': 'macos.html',
         'environment/linux': 'linux.html', 'environment/windows': 'windows.html'}
for page, url in pages.items():
    with urlopen(Request(BASE + url, headers={'User-Agent': 'Mozilla/5.0'}), timeout=30) as response:
        html = response.read().decode()
    assert 'vscode-install-guide' not in html, page
    assert ('<title>Hello C</title>' if page == 'index' else ' · Hello C</title>') in html, page
    links = Links()
    links.feed(html)
    assert '{{' not in html and '{%' not in html, page
    assert f'https://github.com/LaBaFan/hello-c/edit/main/docs/{page}.md' in links.hrefs, page
    positions = [links.hrefs.index(f'/hello-c/{name}/') for name in ('environment', 'materials', 'qa')]
    assert positions == sorted(positions), (page, '模块顺序错误')
    if page == 'environment/index':
        positions = [links.hrefs.index(f'/hello-c/{name}.html') for name in ('macos', 'linux', 'windows')]
        assert positions == sorted(positions), '教程顺序错误'
    if page in ('materials/index', 'qa/index'):
        assert 'TODO' in html, page
    assert 'aria-current=' in html, page
    print(f'OK {page}')
with urlopen(Request(BASE + 'assets/style.css', headers={'User-Agent': 'Mozilla/5.0'}), timeout=30) as response:
    assert '--ink:' in response.read().decode()
print('OK stylesheet')
