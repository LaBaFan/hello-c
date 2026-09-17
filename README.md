# VS Code 安装指南

网站：https://labafan.github.io/vscode-install-guide/

使用 GitHub Pages 原生 Jekyll 构建，无需安装 Node.js 或维护前端依赖。

## 写教程

- `macos.md`：macOS 教程
- `windows.md`：Windows 教程
- `linux.md`：Linux 教程
- `index.md`：首页

在 GitHub 打开对应文件，点击铅笔编辑并提交到 `main`，网站会自动重新发布。网站底部的「编辑本页」也能直接跳转到编辑页。保留文件开头的 `---` 配置区，在下方用 Markdown 写正文。

## 添加截图

将截图上传至 `assets/images/`，正文使用以下格式（替换文件名并填写图片说明）：

```markdown
![安装程序界面]({{ '/assets/images/windows-install.png' | relative_url }})
```

## 网站设置

- 页面公共结构：`_layouts/default.html`
- 样式：`assets/style.css`
- 标题与地址：`_config.yml`
- 部署：仓库 Settings → Pages → Deploy from a branch → `main` / `/ (root)`

仓库仅包含本网站文件。初始教程提供基础步骤，可继续补充截图和课程要求；官方参考链接附在每篇末尾。
