---
title: 常见问题·2
icon: file-lines
order: 2
---

# 常见问题·2

> 下边的这些错误是同学们在作业2,3的时候经常问到的

## 输出格式

在「输出华氏-摄氏温度转换表」中，题目要求第一行输出 `fahr celsius`；之后每行输出一个整型华氏温度，以及一个**占 6 个字符宽度、靠右对齐、保留 1 位小数**的摄氏温度。

### 常见问题代码

```c
printf("%d %6.1f\n", i, cel);
```

这行代码在 `%d` 和 `%6.1f` 之间多写了一个空格。`%6.1f` 本身就会按指定宽度补空格，格式字符串中额外写的空格也会原样输出，因此这一行比要求多了一个空格。

### 正确写法

```c
printf("%d%6.1f\n", i, cel);
```

`%6.1f` 可以拆开理解：

- `f`：以小数形式输出浮点数。
- `.1`：保留 1 位小数。
- `6`：整个数值至少占 6 个字符的位置，包含负号、小数点和数字；不足 6 个字符时，在左侧补空格，默认靠右对齐。

例如，华氏温度为 `10` 时，摄氏温度保留 1 位小数后是 `-12.2`，共 5 个字符。`%6.1f` 会在它左侧补 1 个空格。

下面用 `·` 表示一个空格，仅用于观察，实际输出中不要打印这个符号：

```text
错误：10··-12.2
正确：10·-12.2
```

华氏温度为 `32` 时，摄氏温度输出为 `0.0`，共 3 个字符，因此会补 3 个空格：

```text
错误：32····0.0
正确：32···0.0
```

这里的 `6` 是**最小宽度**，不是固定补 6 个空格，也不是保留 6 位数字。如果数值本身超过 6 个字符，会完整输出，不会截断。

### 本题的输出部分

```c
printf("fahr celsius\n");
for (int i = lower; i <= upper; i += 2) {
    cel = 5.0 * (i - 32) / 9.0;
    printf("%d%6.1f\n", i, cel);
}
```

表头 `fahr celsius` 中的空格需要保留。数据行则由 `%6.1f` 控制摄氏温度的宽度，不再额外加空格。遇到输出格式错误时，除了核对数值，也要逐项检查空格、换行、大小写和标点是否符合题目要求。

## for 循环中的自增与赋值

### 条件判断与更新

```c
for (int i = 0; i < 3; i++) {
    printf("%d\n", i);
}
// 输出：0、1、2，每个数字占一行
```

`for` 的括号内用两个分号分成三部分：

<figure class="qa-diagram" aria-label="for 循环流程：初始化后判断条件，真则执行循环体和更新，再返回判断；假则结束。">
  <figcaption>for（初始化；条件判断；更新）</figcaption>
  <div class="qa-flow">
    <div class="qa-flow-node qa-flow-main">初始化<span>只执行一次</span></div>
    <div class="qa-flow-arrow" aria-hidden="true"></div>
    <div class="qa-flow-loop">
      <div class="qa-flow-return" aria-hidden="true"><span>返回判断</span></div>
      <div class="qa-flow-node qa-flow-main qa-flow-condition">条件判断</div>
      <div class="qa-flow-exit"><span class="qa-flow-false">假</span><div class="qa-flow-node">结束</div></div>
      <div class="qa-flow-arrow"><span>真</span></div>
      <div class="qa-flow-node qa-flow-main">执行循环体</div>
      <div class="qa-flow-arrow" aria-hidden="true"></div>
      <div class="qa-flow-node qa-flow-main">更新<span>例如 i++</span></div>
    </div>
  </div>
</figure>

这里的 `i < 3` 才是条件判断，`i++` 是更新表达式。正常执行完一轮循环体后，先执行更新，再进行下一次条件判断。

### i++ 和 ++i

理解自增时，要分清**表达式的值**和**执行后变量的值**。下面两个例子分别从 `i = 3` 开始，`x` 是另一个变量：

<figure class="qa-diagram">
  <figcaption>两个独立例子，都从 i = 3 开始</figcaption>
  <div class="qa-increment-grid">
    <div class="qa-increment-card">
      <strong>后置自增 · 取旧值</strong>
      <code class="qa-increment-code">x = i++;</code>
      <div>表达式的值：<b>3</b></div>
      <div class="qa-result">语句结束后<span>x = 3，i = 4</span></div>
    </div>
    <div class="qa-increment-card">
      <strong>前置自增 · 取新值</strong>
      <code class="qa-increment-code">x = ++i;</code>
      <div>表达式的值：<b>4</b></div>
      <div class="qa-result">语句结束后<span>x = 4，i = 4</span></div>
    </div>
  </div>
  <div class="qa-diagram-note">单独用作 for 的更新表达式时，两者都让 i 加 1。</div>
</figure>

```c
int i = 3;
int x = i++;   // 这条语句执行后：x = 3，i = 4
```

`i++` 是后置自增：表达式的值是自增前的旧值，因此 `x` 得到 `3`；这条语句执行完后，`i` 是 `4`。

```c
int i = 3;
int x = ++i;   // 这条语句执行后：x = 4，i = 4
```

`++i` 是前置自增：表达式的值是自增后的新值，因此 `x` 得到 `4`；这条语句执行完后，`i` 也是 `4`。


### for 的更新部分

对于这里的普通整型变量 `i`，且加 1 不溢出时：

| 更新部分的写法 | 单独执行后的效果 | 能否用于每轮加 1 |
| --- | --- | --- |
| `i++` | `i` 加 1，表达式的值为旧值 | 可以 |
| `++i` | `i` 加 1，表达式的值为新值 | 可以 |
| `i += 1` | `i` 加 1，表达式的值为新值 | 可以 |
| `i = i + 1` | 先计算 `i + 1`，再赋给 `i`，表达式的值为新值 | 可以 |
| `i = i++` | 未定义行为，没有可靠结果 | 不可以 |
| `i = ++i` | 在 C 语言中也是未定义行为，没有可靠结果 | 不可以 |

`for` 的第三部分只执行更新，**不会使用这个表达式的值来判断是否继续循环**。因此，前四种写法放在下面的位置，都会让 `i` 每轮加 1，输出相同：

```c
for (int i = 0; i < 3; i++)       { printf("%d\n", i); }
for (int i = 0; i < 3; ++i)       { printf("%d\n", i); }
for (int i = 0; i < 3; i += 1)    { printf("%d\n", i); }
for (int i = 0; i < 3; i = i + 1) { printf("%d\n", i); }
// 每个循环都输出：0、1、2，每个数字占一行
```

将第三部分的 `i++` 改成 `++i`，不会让第一次循环从 `1` 开始。它们都在执行完第一轮循环体之后才更新。

### 为什么不能写 i = i++ 或 i = ++i？

```c
// 错误写法：不要用下面两种方式更新 i
for (int i = 0; i < 3; i = i++) { /* ... */ }
for (int i = 0; i < 3; i = ++i) { /* ... */ }
```

`++` 已经会修改 `i`，不需要再把结果赋回 `i`。上面两种写法在同一个完整表达式中，既通过自增修改 `i`，又通过赋值修改 `i`，而 C 语言没有规定这两次修改之间所需的先后顺序，因此属于**未定义行为**。

未定义行为的意思是：C 语言不保证程序会得到什么结果。不能把 `i = i++` 理解成「一定保持不变」，也不能把 `i = ++i` 当成「一定加 1」。即使某次运行看起来正常，换一个编译器或优化选项也可能表现不同；能编译通过不代表写法正确。

`i = i + 1` 则没有这个问题：右侧 `i + 1` 只读取 `i` 并计算新值，不修改 `i`；最后由赋值操作修改 `i` 一次。

### 自增写进条件判断

这时表达式的值会参与判断，`i++` 和 `++i` 就有区别了。下面两个例子都从 `i = 0` 开始：

```c
int i = 0;
while (i++ < 3) {
    printf("%d\n", i);
}
// 输出：1、2、3；循环结束后 i = 4
```

`i++ < 3` 用旧值比较，但在进入循环体之前，自增已经完成。最后一次用旧值 `3` 比较，条件为假，`i` 仍会增加到 `4`。

```c
int i = 0;
while (++i < 3) {
    printf("%d\n", i);
}
// 输出：1、2；循环结束后 i = 3
```

`++i < 3` 用新值比较，增加到 `3` 时条件就为假。相同的区别也适用于 `for` 的第二部分。初学时，建议把条件判断和更新分开写：`for (int i = 0; i < 3; i++)`，更容易检查循环次数。
