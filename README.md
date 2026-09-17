# VS Code 安装指南

网站：[在线教程](https://www.labafan.cc/vscode-install-guide/) · [GitHub 仓库](https://github.com/LaBaFan/vscode-install-guide)

使用 GitHub Pages 原生 Jekyll 发布。网站源码和教程统一放在 `docs/`，根目录保留项目说明。

## 目录

```text
docs/
├── index.md          # 首页，自动列出教程
├── macos.md          # macOS 安装教程
├── windows.md        # Windows 安装教程
├── linux.md          # Linux 安装教程
├── assets/           # 样式与截图（截图放 images/）
├── _layouts/         # 公共页面模板
└── _config.yml       # 网站配置
```

## 修改或新增教程

修改 `docs/` 中的 Markdown 文件并提交到 `main`，网页自动更新。页面底部「编辑本页」可直接打开对应源文件。

新增文档如 `docs/extensions.md`，使用下面的格式；开头的 YAML 配置区必须保留，Jekyll 才会将 Markdown 渲染成网页：

```markdown
---
title: 安装常用扩展
description: 为编辑器添加语言支持与格式化工具
order: 4
---

# 安装常用扩展

在这里写教程正文。
```

新文档会自动出现在首页和侧栏，无需修改 HTML。`order` 越小越靠前，省略时默认为 1000；可用 `nav_title` 指定较短的导航名称。设置 `nav: false` 可隐藏导航入口，但页面仍公开可访问。

文档也可以按主题放入子目录，例如 `docs/tools/git.md`，同样会自动收录。避免在不同目录设置相同的 `permalink`。

## 插入图片与文档链接

将截图上传到 `docs/assets/images/`，在正文中写：

```markdown
![安装程序界面]({{ '/assets/images/windows-install.png' | relative_url }})

[Windows 安装教程]({{ '/windows.html' | relative_url }})
```

网站路径不包含源码目录 `docs/`。使用 `relative_url` 可让首页和子目录里的链接都正确指向项目网站。

## 发布设置

仓库 Settings → Pages → Deploy from a branch → `main` / `/docs`。

提交后可在仓库 Actions 查看 `pages build and deployment`。构建成功后，运行 `python3 scripts/check_site.py` 检查已部署页面、导航和编辑链接。
