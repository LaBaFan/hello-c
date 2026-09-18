# Hello C

网站：[在线教程](https://www.labafan.cc/hello-c/) · [GitHub 仓库](https://github.com/LaBaFan/hello-c)

使用 GitHub Pages 原生 Jekyll 发布。网站源码和教程统一放在 `docs/`，根目录保留项目说明。

## 目录

```text
docs/
├── index.md                 # 课程首页与三个模块入口
├── environment/             # 环境配置
│   ├── index.md             # 自动列出本模块的教程
│   ├── macos.md
│   ├── linux.md
│   └── windows.md
├── materials/index.md       # 课程资料，待编写（TODO）
├── qa/index.md              # 答疑专区，待编写（TODO）
├── assets/                  # 样式、脚本与截图
├── _layouts/                # 公共页面模板
└── _config.yml              # 网站配置
```

## 修改或新增文档

修改 Markdown 文件并提交到 `main`，网页自动更新。页面底部「编辑本页」指向对应源文件。

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

课程资料和答疑专区目前各保留一个 TODO 文档，直接编辑对应的 `index.md` 即可。以后新增文档时放入相应目录，并在该模块首页添加链接，例如：

```markdown
[第一周资料]({{ '/materials/week-1.html' | relative_url }})
```

侧栏显示三个模块，在模块内阅读文档时会高亮所属模块。首页通过 `module: true` 自动收录模块入口；普通文章不需要设置此字段。

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

提交后可在仓库 Actions 查看 `pages build and deployment`。构建成功后，运行 `python3 scripts/check_site.py` 检查已部署页面、导航和编辑链接。
