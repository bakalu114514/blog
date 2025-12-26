---
title: Vue 学习笔记（四）：数组变化监听与响应式更新
date: 2025-12-22T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/23 11:01:01
permalink: /blog/gic3e07h/
---

# Vue 学习笔记（四）：数组变化监听与响应式更新

**日期：2025.12.23**  
今天学习了 Vue 中的**数组变化监听机制**，重点理解了为什么有些数组操作可以触发视图更新，而有些却不能。这一部分对于理解 Vue 的响应式原理非常重要。

---

## 一、数组变化监听示例

下面通过一个示例，观察数组在不同操作方式下对 UI 更新的影响。

### 整理后的示例代码

```vue
<template>
  <h3>数组变化监听</h3>

  <button @click="addListHandle">添加数据</button>
  <ul>
    <li v-for="(item, index) in names" :key="index">{{ item }}</li>
  </ul>

  <button @click="concatHandle">合并数组</button>

  <h3>数组 1</h3>
  <p v-for="(item, index) in nums1" :key="index">{{ item }}</p>

  <h3>数组 2</h3>
  <p v-for="(item, index) in nums2" :key="index">{{ item }}</p>
</template>

<script>
export default {
  data() {
    return {
      names: ['iwen', 'amy', 'frank'],
      nums1: [1, 2, 3, 4, 5],
      nums2: [6, 7, 8, 9, 10]
    }
  },
  methods: {
    addListHandle() {
      // ❌ 不会触发 UI 更新（返回的是新数组，但未接收）
      this.names.concat(['sakura'])

      // ✅ 会触发 UI 更新（替换整个数组）
      this.names = this.names.concat(['sakura'])

      // 也可以使用变更方法，例如：
      // this.names.push('sakura')
    },
    concatHandle() {
      // 使用替换数组的方式合并数组
      this.nums1 = this.nums1.concat(this.nums2)
    }
  }
}
</script>
```

---

## 二、为什么有的数组操作不会更新视图？

关键原因在于：**是否改变了原数组的引用**。

### 1. 不触发更新的情况

```js
this.names.concat(['sakura'])
```

- `concat` **不会修改原数组**
- 而是返回一个新的数组
- 如果不接收返回值，Vue 无法感知数据发生变化

因此，页面不会重新渲染。

---

### 2. 触发更新的两种方式

#### （1）变更方法（Mutation Methods）

直接修改原数组内容，Vue 可以监听到变化：

```js
this.names.push('sakura')
this.names.pop()
this.names.shift()
this.names.unshift('newItem')
this.names.splice(1, 1, 'replace')
```

这些方法**会直接改变原数组**，因此可以触发视图更新。

---

#### （2）替换数组方法（Replace Array）

通过生成一个新数组并重新赋值：

```js
this.names = this.names.concat(['sakura'])
```

- 原数组引用被新的数组替换
- Vue 侦测到引用发生变化
- 触发响应式更新

这种方式在函数式编程风格中非常常见。

---

## 三、变更方法 vs 替换数组方法

| 对比项 | 变更方法 | 替换数组方法 |
|----|----|----|
| 是否修改原数组 | 是 | 否 |
| 是否生成新数组 | 否 | 是 |
| 是否触发 UI 更新 | 是 | 是 |
| 常见方法 | push / splice | concat / filter / map |

在 Vue 中，这两种方式**都可以安全使用**，选择哪一种取决于你的代码风格和业务需求。

---

## 四、关于 `v-for` 中的 `key`（补充）

在列表渲染时，`key` 用于帮助 Vue **更高效地更新虚拟 DOM**。

```html
<li v-for="(item, index) in names" :key="index">{{ item }}</li>
```

> 实际开发中，更推荐使用**唯一且稳定的值**作为 `key`，例如 `id`，而不是 `index`，以避免列表重排时出现问题。

---

## 小结

本次学习的核心要点：

- Vue 可以监听数组变化，但前提是数据变化是“可被感知的”
- `push` 等**变更方法**可以直接触发视图更新
- `concat`、`map`、`filter` 等需要通过**重新赋值**来触发更新
- 理解“是否改变数组引用”是掌握数组响应式的关键

这一部分内容为后续理解 Vue 的响应式系统、计算属性以及状态管理打下了基础。

