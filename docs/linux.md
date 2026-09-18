---
title: Linux 安装教程
nav_title: Linux
description: Ubuntu / Debian 与其他发行版
order: 2
---
<p class="eyebrow">02 / LINUX</p>

# 在 Linux 上安装 VS Code

Linux 安装 vscode 和 c 语言编译器更加简单，基本上只需要在终端中输入一条命令即可完成安装。

## 1. 安装必要的工具

打开 Linux 的终端（通常可以使用快捷键 `Ctrl + Alt + T` 打开），然后输入以下命令来安装必要的工具和编译器：

```bash
sudo apt update
```

然后输入你的密码（通常是锁屏密码），按下回车键。等待更新完成后，继续输入以下命令来安装编译器和其他必要的工具：

```bash
sudo apt install build-essential
```

然后输入

```bash
gcc --version
```

如果能正确显示类似下边的版本号信息，则说明安装成功：

```text
gcc (Ubuntu 11.4.0-1ubuntu1~22.04.3) 11.4.0
Copyright (C) 2021 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

后续的安装 vscode 和必要插件的步骤与 macOS 上的安装步骤类似，请参考 [macOS 安装教程]({{ '/macos.html' | relative_url }}) 中的相关内容。
