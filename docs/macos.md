---
title: macOS 安装教程
nav_title: macOS
description: Apple 芯片与 Intel Mac
order: 1
---
<p class="eyebrow">01 / MACOS</p>

# 在 Mac 上安装 VS Code

## 1. 下载对应版本

打开苹果菜单 →「关于本机」，查看芯片类型。前往 [官方下载页](https://code.visualstudio.com/download)，选择 Apple silicon 或 Intel 版本；也可以使用 Universal 版本。

## 2. 安装并打开

打开下载的 `.dmg` 文件，将 **Visual Studio Code.app** 拖入「应用程序」文件夹，再从「应用程序」启动。

## 3. 配置终端命令

在 VS Code 中按 `⌘ + Shift + P` 打开命令面板，输入 `shell command`，执行 **Shell Command: Install 'code' command in PATH**。完成后重新打开终端。

## 4. 验证安装

在终端运行：

```sh
code --version
```

显示版本信息后，可以进入自己的项目文件夹并运行：

```sh
code .
```

如果提示找不到 `code`，重新执行第 3 步，并确认已经重启终端。

---

参考：[VS Code 官方 macOS 安装文档](https://code.visualstudio.com/docs/setup/mac)。
