---
title: 环境配置
description: macOS、Linux、Windows 安装与配置教程
nav: true
module: true
order: 1
---

# 环境配置

选择你的操作系统，查看安装教程。

<div class="platforms">
  {% assign documents = site.pages | where: "section", "environment" | sort: "order" %}
  {% for document in documents %}
  {% unless document.url == page.url %}
  <a class="platform" href="{{ document.url | relative_url }}"><span class="number">&lt;/&gt;</span><span><strong>{{ document.nav_title | default: document.title | escape }}</strong><small>{{ document.description | escape }}</small></span><span class="arrow" aria-hidden="true">→</span></a>
  {% endunless %}
  {% endfor %}
</div>
