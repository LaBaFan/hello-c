---
title: Windows 安装教程
nav_title: Windows
description: 下载安装程序，配置命令行
order: 2
---
<p class="eyebrow">02 / WINDOWS</p>

# 在 Windows 上安装 VS Code

## 1. 下载安装程序

前往 [官方下载页](https://code.visualstudio.com/download)，选择 Windows 的 **User Installer**。在「设置 → 系统 → 系统信息」确认系统类型，再选择 x64 或 Arm64。

User Installer 适合为当前用户安装，通常不需要管理员权限；需要为所有用户安装时，选择 System Installer。

## 2. 完成安装

双击下载的 `VSCodeUserSetup-…exe`，阅读并接受许可协议，按向导完成安装。安装程序会配置命令行路径；如果向导显示「添加到 PATH」，保持勾选。

安装结束后打开 VS Code。

## 3. 验证命令行

关闭已有的终端窗口，重新打开 PowerShell，运行：

```powershell
code --version
```

显示版本信息即表示命令可用。在自己的项目文件夹中运行以下命令，即可用 VS Code 打开该文件夹：

```powershell
code .
```

## 遇到问题

如果提示无法识别 `code`，先重启终端；仍未解决时，重新运行安装程序并检查 PATH 选项。

---

参考：[VS Code 官方 Windows 安装文档](https://code.visualstudio.com/docs/setup/windows)。
