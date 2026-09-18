---
title: Windows 安装教程
permalink: /windows.html
icon: windows
nav_title: Windows
description: 下载安装程序，配置命令行
order: 3
---
<p class="eyebrow">03 / WINDOWS</p>

# 在 Windows 上安装 VS Code（可选）

> 注：可选，如果已经安装好 devcpp，那么不建议再费力气安装 vscode

## 1. 安装必要的工具

打开如下网址，进入 msys2 官网，下载并安装 msy2：

[https://www.msys2.org/](https://www.msys2.org/)

![MSYS2 下载页面中的安装程序]({{ '/assets/images/windows/fig1.png' | relative_url }})

根据你电脑的架构选择下载对应的安装程序，通常是 x86_64 版本，也就是左边红框框出来的那个版本。

下载好之后根据教程安装。

![MSYS2 安装向导]({{ '/assets/images/windows/fig2.png' | relative_url }})

> 一直 next，最后点 finish 即可。

安装完成之后，会自动跳出一个黑黑的终端，在终端中输入以下命令：

```bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
```

出现选择时直接按：

```text
Enter
```

然后询问是否安装：

```text
Proceed with installation? [Y/n]
```

输入：

`Y` 回车。

## 2. 配置环境变量

点击电脑下方的 windows 图标，搜索 `环境变量`，点击 `编辑系统环境变量`，如下图所示：

![搜索编辑系统环境变量]({{ '/assets/images/windows/fig3.png' | relative_url }})

点击“打开“，在弹出的窗口中点击“环境变量“，如下图所示：

![打开环境变量设置]({{ '/assets/images/windows/fig4.png' | relative_url }})

双击“Path“，会弹出新的窗口：

![编辑 Path 环境变量]({{ '/assets/images/windows/fig5.png' | relative_url }})

点击“新建“，然后输入：

```text
C:\msys64\ucrt64\bin
```

![添加 MSYS2 编译器路径]({{ '/assets/images/windows/fig6.png' | relative_url }})

然后一路点击“确定“，直到所有窗口都关闭。

然后依旧打开电脑的 windows 图标，搜索 `cmd`，点击“命令提示符“，如下图所示：

![搜索并打开命令提示符]({{ '/assets/images/windows/fig7.png' | relative_url }})

在命令提示符中输入：

```bat
gcc --version
gdb --version
```

如果都能正确显示版本号信息，则说明安装成功。

## 3. 安装 vscode

教程和 macOS 上的安装步骤类似，请参考 [macOS 安装教程]({{ '/macos.html' | relative_url }}) 中的相关内容。
