---
title: 写在前面
nav: false
home: true
---
<div class="home-layout">
<article class="prose preface" markdown="1">

# 写在前面

欢迎各位同学选择 C 程序设计基础这门课程，我们是本课程张彤彧老师班助教<a class="profile-link" href="https://github.com/LaBaFan" title="GitHub: @LaBaFan" aria-label="刘鲍非的 GitHub（LaBaFan）"><strong>刘鲍非</strong>{% include icon.html name="github" %}</a>和<a class="profile-link" href="https://github.com/The0xKa1" title="GitHub: @The0xKa1" aria-label="张晋恺的 GitHub（The0xKa1）"><strong>张晋恺</strong>{% include icon.html name="github" %}</a>。

本门课程主要包含数据类型与表达式、程序基本流程控制、函数及程序模块化设计、数组与结构应用、算法基础等内容。

本课程的学习目标是让同学们掌握 C 语言的基本语法和编程方法，能够独立编写简单的 C 程序，并为后续的计算机科学与技术课程打下坚实的基础。

## 课程分数占比：

- **平时成绩，满分50分，包括：**
    - 平时作业 **25分**，
    - 课堂表现（学情调查、考勤、随堂小测、回答问题、课堂讨论等）**5分**
    - 阶段性测试四次共**20分**。
- **期末考试： 50分**

## 关于学习

各位同学刚从高中升入大学，可能对大学的学习方式还不太适应，心中难免有落差。在上机课和同学们交流的过程中，有很多同学都表示第一次编写代码“比较吃力”，这是很正常的现象，没有人是一开始就会编程的，我们也都是这样一步一步学过来的，一开始也和各位同学一样，对编程一窍不通，但是通过不断的练习和努力，学长们最终都掌握了编程的技能。

我想说的是，编程是一项重实践的技能，各位课堂学的是理论知识，如何把理论知识变成电脑中的一行行代码，最后正确运行，这需要不断的练习和积累经验，第一周的上机课可能会比较吃力，因为这是各位第一次接触编程，但是只要各位同学坚持下去，认真完成每一次的编程作业，等到期末考试的时候，你们一定会为自己的进步感到惊讶！

最后，借用翁恺老师的一句话结尾：

> “学计算机一定要有一个强大的心理状态，计算机的所有东西都是人做出来的，别人能想出来的，我也一定能想出来。在计算机中，没有任何黑魔法，所有的东西只不过是我现在不知道而已。总有一天，我会把内部所有的细节都搞明白，那个人和我们一样，同样只是一个脑袋而已”。

希望各位同学在学习过程中，能够积极参与讨论，有任何不懂的问题及时向助教或老师请教，毕竟老师和助教很重要的一项工作就是为了帮助同学们解决问题。

祝大家 C 语言学习顺利，也希望这个学期我们相处愉快！

</article>
<aside class="home-sidebar">
  <h2>课程导航</h2>
  <nav aria-label="课程栏目">
    {% assign modules = site.pages | where: "module", true | sort: "order" %}
    {% for module in modules %}
    <a href="{{ module.url | relative_url }}"><span class="module-label">{% include icon.html name=module.icon %}<span>{{ module.title | escape }}</span></span>{% include icon.html name="arrow-right" class="module-arrow" %}</a>
    {% endfor %}
  </nav>
</aside>
</div>
