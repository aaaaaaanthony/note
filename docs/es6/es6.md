---
lang: zh-CN
title: ES6入门教程
description: 学习ES6的笔记
---

# let和const命令
## let命令
### 基本用法
ES6 新增了let命令，用来声明变量。它的用法类似于
```html
<body>
  <script>
    {
      // 只在let命令所在的代码块内有效
      let a = 10;
      var b = 1;
    }
    // Uncaught ReferenceError: a is not defined
    // console.log(a)
    console.log(b)
  </script>
</body>
```

适合let的使用场景
```js
for (let i = 0; i < 10; i++) {
  // ...
  console.log("正确的数据:"+i)
}
// 报错
// console.log(i);
```


<CodeGroup>
  <CodeGroupItem title="var"  active>

```html
<body>
  <script>
    var a = [];
    for (var i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    // 10
    a[6]()
  </script>
</body>
```

  </CodeGroupItem>

  <CodeGroupItem title="let">

```html
<body>
  <script>
    var a = [];
    for (let i = 0; i < 10; i++) {
      a[i] = function () {
        console.log(i);
      };
    }
    // 6
    a[6]();
  </script>
</body>
```

  </CodeGroupItem>
</CodeGroup>

```html
<body>
  <script>
    for (let i = 0; i < 3; i++) {
      let i = 'abc';
      console.log(i);
    }
  </script>
</body>
```

::: warning 提示
输出了 3 次abc。
这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域
同一个作用域不可使用 let 重复声明同一个变量）
:::

### 不存在变量提升
var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined。
这种现象多多少少是有些奇怪的，按照一般的逻辑，变量应该在声明语句之后才可以使用。

let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。

```js
// var 的情况
console.log(foo); // 输出undefined
var foo = 2;

// let 的情况
console.log(bar); // 报错ReferenceError
let bar = 2;
```

### 暂时性死区
