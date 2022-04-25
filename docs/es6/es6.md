---
lang: zh-CN
title: ES6入门教程
description: 学习ES6的笔记
---

# let和const命令
## let命令
### 基本用法
ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
```JavaScript
{
  let a = 10;
  var b = 1;
}

a // ReferenceError: a is not defined.
b // 1
```