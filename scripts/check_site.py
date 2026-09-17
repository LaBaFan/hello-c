"""检查 GitHub Pages 已发布的教程；只使用 Python 标准库。"""
from html.parser import HTMLParser
from urllib.request import Request, urlopen

BASE = 'https://www.labafan.cc/vscode-install-guide/'


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
    links = Links()
    links.feed(html)
    assert '{{' not in html and '{%' not in html, page
    assert f'https://github.com/LaBaFan/vscode-install-guide/edit/main/docs/{page}.md' in links.hrefs, page
    for name in ('macos', 'windows', 'linux'):
        assert f'/vscode-install-guide/{name}.html' in links.hrefs, (page, name)
    assert 'aria-current="page"' in html, page
    print(f'OK {page}')
with urlopen(Request(BASE + 'assets/style.css', headers={'User-Agent': 'Mozilla/5.0'}), timeout=30) as response:
    assert '--ink:' in response.read().decode()
print('OK stylesheet')
