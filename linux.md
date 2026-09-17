---
title: Linux 安装教程
---
<p class="eyebrow">03 / LINUX</p>

# 在 Linux 上安装 VS Code

根据发行版选择一种安装方式即可，不需要重复安装。

## Ubuntu / Debian

从 [官方下载页](https://code.visualstudio.com/download) 下载匹配电脑架构的 `.deb` 包。可以使用图形软件安装器打开，也可以在安装包所在文件夹打开终端。

将下面的 `实际文件名.deb` 替换为下载的完整文件名：

```sh
sudo apt install ./实际文件名.deb
```

若安装时询问是否添加 Microsoft 软件源，可按提示选择，以便后续通过系统包管理器更新。

## 使用 Snap

如果系统已经安装并启用 Snap，可以运行：

```sh
sudo snap install --classic code
```

## Fedora / RHEL 及其他发行版

前往 [官方 Linux 安装文档](https://code.visualstudio.com/docs/setup/linux)，按对应发行版的软件源和包管理器步骤安装。不要在这些系统上执行上面的 `apt` 命令。

## 验证安装

打开新的终端，运行：

```sh
code --version
```

显示版本信息后，进入自己的项目文件夹并运行 `code .`。日常使用时无需用 `sudo` 启动 VS Code。

---

参考：[VS Code 官方 Linux 安装文档](https://code.visualstudio.com/docs/setup/linux)。
