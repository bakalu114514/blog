---
title: Vue 学习笔记（三）：事件传参与事件修饰符
date: 2025-12-19T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/19 10:03:42
permalink: /blog/upep77ga/
---

# Vue 学习笔记（三）：事件传参与事件修饰符

**日期：2025.12.19**
在前面学习了 `v-on` 的基本使用之后，今天进一步学习了 **事件传参** 以及 **事件修饰符**。这两部分内容在实际开发中非常常见，尤其是在处理用户交互、阻止默认行为和控制事件传播时。

---

## 一、事件传参

在 Vue 中，事件触发时可以向方法中**传递参数**。常见的参数包括：

* 自定义参数
* 原生 DOM 事件对象（`event`，通常简写为 `e`）

### 示例代码

```vue
<template>
  <h3>事件传参</h3>
  <button @click="addCount">Add</button>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    addCount(e) {
      e.target.innerHTML = "Add" + this.count
      this.count++
    }
  }
}
</script>
```

### 关键说明

* 当事件方法**没有显式传参**时，Vue 会默认将原生事件对象作为第一个参数传入
* 通过事件对象 `e`，可以访问到当前触发事件的 DOM 元素：

  * `e.target`：触发事件的元素
* 示例中通过 `this.count` 读取 `data` 中的数据，并对按钮内容进行动态修改

### 补充：自定义参数与 `$event`

如果既想传入自定义参数，又想使用事件对象，可以使用 `$event`：

```html
<button @click="addCount(10, $event)">Add</button>
```

```js
addCount(num, e) {
  this.count += num
  console.log(e)
}
```

这种写法在需要区分不同按钮或传递业务参数时非常实用。

---

## 二、事件修饰符

事件修饰符用于**简化事件处理逻辑**，通过在模板中直接声明行为，避免在方法中手动调用 `event.preventDefault()` 或 `event.stopPropagation()`。

### 1. 阻止默认事件（`.prevent`）

```vue
<template>
  <h3>事件修饰符</h3>
  <a @click.prevent="clickHandle" href="https://bilibili.com">bilibili</a>
</template>

<script>
export default {
  methods: {
    clickHandle() {
      console.log("点击了")
    }
  }
}
</script>
```

说明：

* `.prevent` 用于阻止浏览器的**默认行为**
* 示例中原本点击链接会跳转到网站，但被 `.prevent` 阻止，只执行点击事件逻辑

---

### 2. 阻止事件冒泡（`.stop`）

```vue
<template>
  <div @click="clickDiv">
    <p @click.stop="clickP">测试冒泡</p>
  </div>
</template>

<script>
export default {
  methods: {
    clickDiv() {
      console.log("DIV")
    },
    clickP() {
      console.log("p")
    }
  }
}
</script>
```

说明：

* 默认情况下，事件会从内向外触发（事件冒泡）
* `.stop` 用于阻止事件继续向父元素传播
* 示例中：

  * 未使用 `.stop` 时，点击 `<p>` 会同时触发 `p` 和 `div` 的点击事件
  * 使用 `.stop` 后，只会触发 `p` 标签对应的事件

---

## 三、常见事件修饰符汇总（补充）

| 修饰符        | 作用说明           |
| ---------- | -------------- |
| `.prevent` | 阻止默认行为         |
| `.stop`    | 阻止事件冒泡         |
| `.once`    | 事件只触发一次        |
| `.self`    | 仅当事件作用在自身元素时触发 |
| `.capture` | 使用事件捕获模式       |

这些修饰符可以**组合使用**，例如：

```html
@click.stop.prevent="handleClick"
```

---

## 小结

本次学习的重点包括：

* Vue 中事件传参的基本方式
* 默认事件对象 `event` 的使用
* 自定义参数与 `$event` 的结合
* 事件修饰符在阻止默认行为与事件冒泡中的作用

通过事件传参和事件修饰符，可以让模板代码更加简洁、语义更加清晰，也能有效减少在方法中编写重复的事件控制逻辑。
