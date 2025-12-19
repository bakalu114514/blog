---
title: Vue 学习笔记（二）：事件处理（v-on）
date: 2025-12-18T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/18 16:00:25
permalink: /blog/n17sr6ew/
---

# Vue 学习笔记（二）：事件处理（v-on）

**日期：2025.12.18**
今天学习了 Vue 中的事件处理机制，核心指令为 **`v-on`**。事件处理主要分为两种形式：**内联事件处理器** 和 **方法事件处理器**，两者在使用场景和代码组织方式上各有侧重。

---

## 一、v-on 指令基础

`v-on` 用于**监听 DOM 事件**，并在事件触发时执行相应的 JavaScript 表达式或方法。

### 1. 基本写法与简写形式

```html
v-on:click="count++"
```

可以简写为：

```html
@click="count++"
```

### 2. 事件类型

* `click`：单击事件
* `dblclick`：双击事件
* 其他如 `mouseenter`、`keyup` 等

示例：

```html
@dblclick="doSomething"
```

---

## 二、内联事件处理器

内联事件处理器是指**直接在模板中编写简单的表达式**，适合逻辑非常简单的场景。

### 示例代码

```vue
<template>
  <h3>内联事件处理器</h3>
  <button @click="count++">Add</button>
  <p>{{ count }}</p>
</template>

<script>
export default {
  data() {                 // v-on: 可以简写为 @
    return {
      count: 0
    }
  }
}
</script>
```

### 效果说明

* 点击按钮后，`count` 的值会自增 1
* 页面会自动更新显示最新的 `count` 值

这种写法**直观、简洁**，但当逻辑变复杂时，不利于维护。

---

## 三、方法事件处理器

方法事件处理器是指**将事件触发后的逻辑写在 `methods` 中**，再通过 `v-on` 调用该方法。这是更推荐、也更常用的写法。

### 示例代码

```vue
<template>
  <h3>方法事件处理器</h3>
  <button @click="addCount">add</button>
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
    addCount() {
      // 读取 data 中的数据需要使用 this
      this.count++
    }
  }
}
</script>
```

### 核心要点

* 事件逻辑集中在 `methods` 中，结构更清晰
* 在方法中访问 `data` 内的数据，必须通过 `this.xxx`
* 适合逻辑较多、需要复用或后期维护的场景

---

## 四、两种事件处理方式的对比

| 方式      | 特点         | 适用场景        |
| ------- | ---------- | ----------- |
| 内联事件处理器 | 写法简单、直观    | 简单操作，如自增、自减 |
| 方法事件处理器 | 结构清晰、可维护性高 | 逻辑复杂、可复用操作  |

在实际项目中，**方法事件处理器更常见，也更推荐使用**。

---

## 小结

本次学习的重点包括：

* `v-on` 指令的基本使用与简写形式 `@`
* 内联事件处理器的写法与适用场景
* 方法事件处理器的写法以及 `this` 的使用方式

事件处理是 Vue 交互逻辑的基础，为后续学习表单处理、组件通信和业务逻辑打下了重要基础。
