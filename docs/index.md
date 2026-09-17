---
title: 从这里开始
nav: false
---
<p class="eyebrow">SETUP / VS CODE</p>

# 你的第一步，从安装开始。

<p class="intro">选择你的操作系统，跟着步骤完成下载、安装和验证，准备好自己的代码编辑器。</p>

<div class="platforms">
  {% assign documents = site.pages | where: "nav", true | sort: "order" %}
  {% for document in documents %}
  <a class="platform" href="{{ document.url | relative_url }}"><span class="number">{{ forloop.index }}</span><span><strong>{{ document.nav_title | default: document.title | escape }}</strong><small>{{ document.description | escape }}</small></span><span class="arrow" aria-hidden="true">→</span></a>
  {% endfor %}
</div>

## 开始之前

- 准备网络连接，从 [VS Code 官方下载页](https://code.visualstudio.com/download) 获取安装包。
- 不确定电脑架构时，先查看系统信息，再选择对应的安装包。
- 本教程先完成编辑器安装；编写 C/C++ 等程序时，还需要单独配置编译器。

> Visual Studio Code（VS Code）和 Visual Studio 是不同的软件，请确认下载名称。
