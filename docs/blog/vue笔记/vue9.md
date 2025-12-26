---
title: Vue 学习笔记（九）—— 表单输入绑定 v-model
date: 2025-12-24T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/25 17:17:45
permalink: /blog/npqr4qzp/
---

## 一、v-model 的作用与意义

在 Vue 中，`v-model` 是一个**非常核心且高频使用的指令**，主要用于实现：

> **表单输入元素与数据之间的双向数据绑定**

简单来说：

- 用户在表单中输入内容 → 自动更新 `data` 中的数据
- `data` 中的数据发生变化 → 自动更新页面显示

这正是 Vue 响应式系统的典型体现。

---

## 二、基础示例：文本输入绑定

### 1. 模板代码

```vue
<template>
    <h3>表单输入绑定</h3>
    <form>
        <input type="text" v-model="message">
        <p>{{ message }}</p>
    </form>
</template>
```

---

### 2. Script 部分

```vue
<script>
export default{
    data(){
        return{
            message: '你输入了：' // 实时读取用户输入的数据
        }
    }
}
</script>
```

---

### 3. 运行效果说明

- 输入框中的内容发生变化时
- `message` 会被实时更新
- 页面中的 `<p>{{ message }}</p>` 也会同步更新

这就是 **v-model 的实时双向绑定特性**。

---

## 三、v-model.lazy 修饰符

在默认情况下，`v-model` 是**实时监听输入事件**的，这在某些场景下可能带来不必要的性能消耗。

此时可以使用 `.lazy` 修饰符：

```vue
<input type="text" v-model.lazy="message">
```

### `.lazy` 的特点

- 不再实时监听 `input` 事件
- 改为在 `change` 事件触发时才更新数据
- 通常在 **输入完成或失去焦点后** 才同步数据

### 适用场景

- 表单内容较多
- 不需要每次输入都触发数据更新
- 对性能有一定要求时

---

## 四、复选框绑定（checkbox）

### 1. 模板代码

```vue
<template>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
</template>
```

---

### 2. Script 部分

```vue
<script>
export default{
    data(){
        return{
            checked: false // 默认未选中
        }
    }
}
</script>
```

---

### 3. 行为说明

- 未勾选时：`checked` 为 `false`
- 勾选后：`checked` 自动变为 `true`
- 页面中的 `{{ checked }}` 会同步显示布尔值变化

这体现了 v-model 对 **表单控件状态的自动管理能力**。

---

## 五、v-model 的本质原理（理解即可）

以文本输入框为例：

```vue
<input v-model="message">
```

等价于：

```vue
<input
  :value="message"
  @input="message = $event.target.value"
>
```

也就是说，`v-model` 本质上是：

- `v-bind:value` + `v-on:input`

只是 Vue 帮我们进行了语法层面的封装。

---

## 六、小结

- `v-model` 用于实现表单与数据的双向绑定
- 常用于 `input / textarea / checkbox / radio / select`
- `.lazy` 可用于减少不必要的实时监听
- 是 Vue 表单处理和数据交互的核心指令之一

这一部分内容为后续学习 **表单修饰符、表单校验、组件 v-model** 打下了重要基础。