# Hello C

网站：[在线教程](https://www.labafan.cc/hello-c/) · [GitHub 仓库](https://github.com/LaBaFan/hello-c)

使用 GitHub Pages 原生 Jekyll 发布。网站源码和教程统一放在 `docs/`，根目录保留项目说明。

## 目录

```text
docs/
├── index.md                 # 写在前面与课程导航
├── environment/             # 环境配置
│   ├── index.md             # 自动列出本模块的教程
│   ├── macos.md
│   ├── linux.md
│   └── windows.md
├── materials/index.md       # 课程资料索引
├── qa/index.md              # 答疑专区索引
├── beyond/index.md          # 课外拓展索引
├── assets/                  # 样式、脚本、字体与截图
├── _layouts/                # 公共页面模板
└── _config.yml              # 网站配置
```

## 修改或新增文档

修改 Markdown 文件并提交到 `main`，网页自动更新。

在 `docs/environment/` 新建教程，例如 `extensions.md`，保留开头的 YAML 配置区：

```markdown
---
title: 安装常用扩展
description: 为编辑器添加语言支持与格式化工具
order: 4
---

# 安装常用扩展

在这里写教程正文。
```

环境配置模块会自动收录该目录里的文档。`order` 越小越靠前，省略时为 1000；`nav_title` 可以指定简短的列表名称。

课程资料、答疑总结和课外拓展分别放在 `docs/materials/`、`docs/qa/`、`docs/beyond/`。新增 Markdown 时保留上面的 YAML 配置区；各栏目和文档侧栏会按所在目录自动收录，不需要手动添加链接。`listing: false` 可从列表中隐藏文章，但网址仍公开可访问。

栏目首页保留 `module: true`、`nav: true`、`collection_page: true` 和 `layout: collection`。普通文章不需要这些字段。空栏目显示「暂无内容」，添加文章后自动显示列表。

现有三个安装教程通过 `permalink` 保留 `/macos.html`、`/linux.html`、`/windows.html` 网址，不受源文件迁移影响。

## 插入图片与文档链接

将截图上传到 `docs/assets/images/`，在正文中写：

```markdown
![安装程序界面]({{ '/assets/images/windows-install.png' | relative_url }})

[Windows 安装教程]({{ '/windows.html' | relative_url }})
```

网站路径不包含源码目录 `docs/`。使用 `relative_url` 可让首页和子目录里的链接都正确指向项目网站。

## 发布设置

仓库 Settings → Pages → Deploy from a branch → `main` / `/docs`。

提交后可在仓库 Actions 查看 `pages build and deployment`。构建成功后，运行 `python3 scripts/check_site.py` 检查已部署页面、导航和资源链接。

## 排版与字体

白底、黑字，蓝色用于链接和当前导航。正文、目录、代码块及移动端使用统一样式。

- 中文使用 [霞鹜文楷 LXGW WenKai](https://github.com/lxgw/LxgwWenKai) v1.522 Regular，字体在 `docs/assets/fonts/` 本地托管，附 OFL 许可证。当前内容使用轻量子集；新增文字可自动加载完整字库，不需要重建字体。
- 英文和代码优先使用设备本地的 **Comic Sans MS**。该字体不随仓库分发；未安装时回退到霞鹜文楷或系统字体。
- 图标使用 [Font Awesome Free](https://fontawesome.com) 7.3.1 的本地 SVG 子集，许可证保存在 `docs/assets/vendor/fontawesome/`。栏目或文档的 `icon` 字段可指定已有图标名称；未指定时显示文档图标。
- 文档提供可展开目录；保留代码块右上角的复制按钮。禁用 JavaScript 不影响正文阅读。

## 本地预览与检查

安装 Jekyll 后，在仓库根目录运行：

```sh
jekyll serve --source docs --destination _site
```

打开 `http://127.0.0.1:4000/hello-c/`。检查构建结果与代码复制逻辑：

```sh
python3 scripts/check_site.py --site-dir _site
node scripts/check_copy_code.mjs
```

也可检查本地服务器：

```sh
python3 scripts/check_site.py --base http://127.0.0.1:4000/hello-c/
```
