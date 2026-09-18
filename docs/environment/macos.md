---
title: macOS 安装教程
permalink: /macos.html
nav_title: macOS
description: Apple 芯片与 Intel Mac
order: 1
---
<p class="eyebrow">01 / MACOS</p>

# 在 Mac 上安装 VS Code

## 1. 安装必要的工具

打开 mac 的终端（`command + 空格`，搜索 `"trem"`），找到名为 "终端" 的应用程序并打开它。如下图所示：

![搜索并打开终端]({{ '/assets/images/macos/fig1.png' | relative_url }})

进入终端之后，安装编译器以及其他必要的工具（如果只是简单的编写 C 语言，通常只需要 clang，这里的命令是安装包括 clang 的其他必要工具）。复制下面的命令并粘贴到终端中，然后按下回车键：

```bash
xcode-select --install
```

各位第一次安装可能需要命令行开发者工具，如下图所示：

![安装命令行开发者工具]({{ '/assets/images/macos/fig2.png' | relative_url }})

点击“安装“，等待下载安装完成之后，在终端输入

```bash
clang --version
```

如果显示类似下边的版本号信息，则说明安装成功：

```text
Apple clang version 21.0.0 (clang-2100.3.34.2)
Target: arm64-apple-darwin27.0.0
Thread model: posix
InstalledDir: /Library/Developer/CommandLineTools/usr/bin
```

> 注：版本号不一定与上边完全一致，可能会有差异，只要能正确显示就好。

## 2. 安装 VS Code

> **什么是 VS Code？**
>
> Microsoft vs Code（简称 VS Code）是一个免费的开源代码编辑器，编辑器顾名思义，是用来编写文字的工具，所有它不仅支持 C 语言，还支持 Python、Java、JavaScript、C++ 等多种编程语言。它的功能非常强大，支持代码高亮、智能提示、调试等功能，并且可以通过安装插件来扩展更多功能。
>
> 在 2026 年，十分推荐各位使用 vscode 这样的现代化的编辑器来编写代码。

浏览器搜索 vscode 官网(<https://code.visualstudio.com/>)，点击 `Download for MacOS` 按钮，下载完成后，双击打开下载的 `.dmg` 文件，将 VS Code 拖动到应用程序文件夹中即可。

## 3. 安装中文语言包

vscode 的默认语言是英文，所以我们需要安装中文语言包插件。打开 vscode，点击左侧的扩展图标（如下图所示）：

![VS Code 左侧的扩展图标]({{ '/assets/images/macos/fig3.png' | relative_url }}){: style="max-height: 360px; width: auto;"}

在搜索栏中输入 `Chinese`，找到 `Chinese (Simplified) Language Pack for Visual Studio Code` 插件，点击安装即可。

![安装中文语言包]({{ '/assets/images/macos/fig4.png' | relative_url }})

然后点击键盘上的 `command + shift + p`，输入 `display`，选择 `Configure Display Language`，在弹出的列表中选择 `zh-CN`。如下图：

![配置显示语言]({{ '/assets/images/macos/fig5.png' | relative_url }})

## 4. 安装 C/C++ 插件

正如上文所说，vscode 是一个支持多种编程语言的编辑器，所以我们需要安装 C/C++ 插件来支持 C 语言的语法高亮、智能提示、调试等功能。

> VS Code 的 C/C++ 插件主要是让 VS Code “看得懂 C/C++ 代码”，但它不是编译器。
>
> 它主要提供这些功能：
>
> - 语法高亮：关键字、变量、函数显示不同样式
> - 代码补全 IntelliSense：输入 printf、变量名、函数名时自动提示
> - 错误提示：比如括号没闭合、类型不匹配，会直接标红
> - 跳转定义：可以跳到函数、变量定义位置
> - 悬停查看信息：鼠标放在函数或变量上显示类型、声明
> - 调试支持：配合 lldb/gdb 设置断点、单步运行、查看变量
> - 辅助配置编译任务：可以帮你生成 tasks.json、launch.json
>
> 各位目前只会用到语法高亮、代码补全、错误提示这几项功能，后续的几个功能各位有兴趣可以自己探索。

同样在 vscode 的扩展中搜索 `C/C++`，找到 `C/C++` 插件，点击安装即可。

![安装 C/C++ 插件]({{ '/assets/images/macos/fig6.png' | relative_url }})

## 5. 安装 code runner 插件

Code Runner 插件是一个可以让 vscode 直接运行代码的插件，安装之后就可以直接在 vscode 中运行 C 语言程序了。

拓展商店搜索 `Code Runner`，找到 `Code Runner` 插件，点击安装即可。

![安装 Code Runner 插件]({{ '/assets/images/macos/fig7.png' | relative_url }})

## 6. 开始编写第一个 C 语言程序吧！

新建一个文件夹，全英文命名，比如 `C_Program`，然后打开 vscode，在左上角选择 `文件` -> `打开文件夹`，选择刚刚新建的文件夹 `C_Program`，点击 `打开`。

![打开 C_Program 文件夹]({{ '/assets/images/macos/fig8.png' | relative_url }})

进入文件夹之后，点击左上角的新建文件按钮，输入文件名 `hello.c`，

![新建 hello.c 文件]({{ '/assets/images/macos/fig9.png' | relative_url }})

在新建的 `hello.c` 文件中输入以下代码：

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

点击键盘上的 `command + s` 保存文件，然后点击右上角的运行按钮：

![点击运行按钮]({{ '/assets/images/macos/fig10.png' | relative_url }})

vscode 会在下方的终端中显示运行结果：

![Hello, World! 运行结果]({{ '/assets/images/macos/fig11.png' | relative_url }})

> 至于终端中 "Hello, World!" 上方的 "cd, gcc" 等命令，是 code runner 自动在帮各位进行编译运行的工作，各位如果有兴趣可以去了解一下各个指令的含义，这里就不展开讲了。

至此，恭喜各位完成了在 mac 上安装 vscode 的全部步骤，并且成功运行了第一个 C 语言程序，各位可以勤加练习，争取早日成为编程大手子。
