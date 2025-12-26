---
title: Vue 学习笔记（六）：Class 样式绑定
date: 2025-12-23T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/24 15:48:42
permalink: /blog/ohnfnbf3/
---

# Vue 学习笔记（六）：Class 样式绑定

**日期：2025.12.24**  
今天学习了 Vue 中的 **Class 样式绑定**。通过 `:class` 指令，可以根据数据状态动态地为元素添加或移除 CSS 类，是构建交互式界面时非常常用的一种方式。

---

## 一、为什么需要 Class 样式绑定？

在原生 HTML 中，`class` 通常是写死的：

```html
<p class="active">文本</p>
```

但在实际开发中，样式往往与**状态**有关，例如：

- 是否被选中
- 是否校验出错
- 是否处于激活状态

Vue 提供的 `:class`（即 `v-bind:class`）可以让样式**与数据状态直接绑定**，从而实现响应式更新。

---

## 二、对象语法进行 Class 绑定

### 1. 直接在模板中使用对象

```vue
<template>
  <p :class="{ 'active': isActive, 'text-danger': hasError }">
    Class 样式绑定
  </p>
</template>
```

含义说明：

- 对象的 **key** 是类名
- 对象的 **value** 是布尔值
- 当 value 为 `true` 时，对应的类名会被添加到元素上

---

### 2. 使用 data 中定义的对象（推荐）

```vue
<template>
  <p :class="classObject">Class 样式绑定 2</p>
</template>

<script>
export default {
  data() {
    return {
      classObject: {
        active: true,
        'text-danger': true
      }
    }
  }
}
</script>
```

这种方式：

- 模板更加简洁
- 适合多个样式同时控制
- 更利于维护和扩展

---

## 三、数组语法进行 Class 绑定

当需要**同时绑定多个类名**，或者类名来源不止一个时，可以使用数组语法。

### 1. 基本数组写法

```vue
<template>
  <p :class="[arrActive, arrHasError]">Class 样式绑定 3</p>
</template>
```

```js
arrActive: 'active',
arrHasError: 'text-danger'
```

数组中的每一项都会被当作一个 class 名称进行绑定。

---

### 2. 数组中使用三元表达式

```vue
<template>
  <p :class="[isActive ? 'active' : '']">Class 样式绑定 4</p>
</template>
```

说明：

- 可以在数组中使用条件表达式
- 常用于**单个样式根据条件切换**的场景

---

## 四、对象与数组的组合使用（补充）

在实际开发中，对象和数组语法是可以组合使用的，但有一定规则。

```vue
<p :class="[{ active: isActive }, arrHasError]"></p>
```

规则说明：

- ✅ **数组中可以嵌套对象**
- ❌ **对象中不能直接嵌套数组**

这种写法在样式规则较复杂时非常有用。

---

## 五、完整示例代码（整理后）

```vue
<template>
  <p :class="{ active: isActive, 'text-danger': hasError }">Class 样式绑定</p>
  <p :class="classObject">Class 样式绑定 2</p>
  <p :class="[arrActive, arrHasError]">Class 样式绑定 3</p>
  <p :class="[isActive ? 'active' : '']">Class 样式绑定 4</p>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: true,
      classObject: {
        active: true,
        'text-danger': true
      },
      arrActive: 'active',
      arrHasError: 'text-danger'
    }
  }
}
</script>

<style>
.active {
  font-size: 30px;
}

.text-danger {
  color: red;
}
</style>
```

---

## 六、Class 绑定方式对比总结

| 写法 | 适用场景 |
|----|----|
| 对象语法 | 样式与布尔状态直接对应 |
| 数组语法 | 多个类名组合、动态拼接 |
| 数组 + 三元 | 单个样式的条件控制 |
| 数组嵌套对象 | 复杂样式规则组合 |

---

## 小结

本次学习的重点包括：

- `:class` 的对象语法与数组语法
- 根据布尔状态动态控制样式
- 数组与对象组合使用的规则

Class 样式绑定是 Vue 中非常高频的功能，掌握它可以让页面样式与数据状态保持高度一致，为后续组件化开发打下基础。