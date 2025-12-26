---
title: Vue 学习笔记（十）—— ref 与 DOM 操作
date: 2025-12-26T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/26 11:16:31
permalink: /blog/aykk9pu3/
---

## 一、为什么需要 ref

在 Vue 中，官方一直强调：

> **尽量通过数据驱动视图，而不是直接操作 DOM**

也就是说，常规情况下：

- 内容变化 → 使用 `{{ }}` 模板语法
- 属性变化 → 使用 `v-bind`
- 事件处理 → 使用 `v-on`

但在某些**特殊场景**下，我们仍然需要**直接访问真实 DOM 元素**，例如：

- 手动获取输入框的值
- 操作第三方库（ECharts、富文本编辑器等）
- 获取元素尺寸、焦点、滚动位置

这时，就需要用到 `ref`。

---

## 二、ref 的基本用法

### 1. 模板代码

```vue
<template>
    <div ref="container" class="container">容器</div>
    <input type="text" ref="username">
    <button @click="getElementHandel">获取元素</button>
</template>
```

### 说明

- `ref="container"`：给 div 元素添加一个引用标识
- `ref="username"`：给 input 元素添加一个引用标识
- ref 的值是一个 **字符串 key**，用于在 JS 中访问

---

## 三、通过 this.$refs 获取 DOM

### Script 部分

```vue
<script>
export default{
    data(){
        return{
            content: "内容"
        }
    },
    methods:{
        getElementHandel(){
            // 通过 ref 获取 DOM 元素
            this.$refs.container.innerHTML = "哈哈哈";
            console.log(this.$refs.username.value);
        }
    }
}
</script>
```

---

## 四、执行过程解析

1. 页面渲染完成后
2. Vue 会把所有带有 `ref` 的元素，收集到 `$refs` 对象中
3. `$refs` 是一个对象，结构类似：

```js
{
  container: HTMLDivElement,
  username: HTMLInputElement
}
```

4. 点击按钮后：
   - 通过 `this.$refs.container` 直接修改 DOM 内容
   - 通过 `this.$refs.username.value` 获取输入框的值

---

## 五、ref 的注意事项（非常重要）

### 1. ref 不是响应式的

- `$refs` 中的内容 **不会触发视图更新**
- 仅用于 DOM 或组件实例的临时访问

### 2. ref 只能在渲染完成后使用

- 在 `created` 钩子中访问不到
- 通常在 `mounted` 或事件回调中使用

### 3. 不要滥用 ref

官方建议：

> 能用数据驱动解决的问题，不要使用 ref

ref 更适合：

- **必要时的 DOM 兜底方案**
- 与非 Vue 体系的库交互

---

## 六、ref 与 Vue 思想的关系

可以这样理解：

- Vue 的核心思想：**数据驱动视图**
- ref 的定位：**在必要场景下，安全地“逃逸”出 Vue 的抽象层**

它不是推荐的常规方案，而是一个**补充工具**。

---

## 七、小结

- `ref` 用于获取 DOM 元素或组件实例
- 通过 `this.$refs.xxx` 访问
- 只在必要场景下使用
- 不应取代 Vue 的响应式数据机制

这一节内容为后续学习 **生命周期、第三方库集成、组件通信** 提供了基础支持。

