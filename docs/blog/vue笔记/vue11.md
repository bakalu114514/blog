---
title: Vue 学习笔记（十一）—— 组件的基本使用
date: 2025-12-26
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
---

## 一、为什么要使用组件

在 Vue 中，**组件（Component）** 是构建应用的核心思想之一。

随着页面功能不断增多，如果所有内容都写在一个 `.vue` 文件中，会出现：

- 代码臃肿、难以维护
- 逻辑与结构混杂
- 复用性极差

组件的作用就是：

> **将页面拆分为一个个可复用、可维护的独立模块**。

---

## 二、Vue 单文件组件的基本结构

一个标准的 Vue 单文件组件（SFC）通常由三部分组成：

```vue
<template></template>
<script></script>
<style></style>
```

说明：
- `template`：组件的结构（必须存在）
- `script`：组件的逻辑与数据
- `style`：组件的样式

---

## 三、父组件中使用子组件的三步流程

### 第一步：引入组件

在父组件的 `script` 中，通过 `import` 引入子组件：

```vue
<script>
// 第一步：引入组件
import mycomponents from './components/mycomponents.vue';

export default{
  // 第二步：注入组件
  components:{
    mycomponents
  }
}
</script>
```

---

### 第二步：注册组件

```js
components:{
  mycomponents
}
```

- 这是**局部注册**方式
- 该组件只能在当前父组件中使用

---

### 第三步：在模板中使用组件

```vue
<template>
  <!-- 第三步：显示组件 -->
  <mycomponents />
</template>
```

至此，一个完整的组件引用流程就完成了。

---

## 四、子组件的基本实现

### 1. 子组件模板

```vue
<template>
  <div class="container">{{ message }}</div>
</template>
```

说明：
- `template` 是组件必须存在的部分
- 一个组件只能有 **一个根节点**

---

### 2. 子组件 Script 部分

```vue
<script>
export default{
  data(){
    return{
      message: '组件基础组成'
    }
  }
}
</script>
```

- 组件中的 `data` 必须是 **函数**
- 每个组件实例都会拥有独立的数据副本

---

## 五、组件样式与 scoped 的作用

### scoped 样式示例

```vue
<style scoped>
.container{
  font-size: 30px;
  color: brown;
}
</style>
```

### scoped 的作用

- 限制样式**只在当前组件中生效**
- 避免组件之间样式互相污染
- 本质是通过属性选择器实现的样式隔离

这是组件化开发中非常重要的一个概念。

---

## 六、组件化开发的核心思想

可以总结为三点：

1. **拆分页面结构**
2. **复用业务逻辑**
3. **隔离作用域（数据、样式）**

Vue 组件机制正是围绕这三点设计的。

---

## 七、小结

- Vue 应用是由组件组合而成的
- 使用组件的基本流程：引入 → 注册 → 使用
- 单文件组件由 template / script / style 组成
- `scoped` 用于实现组件样式隔离

这一节内容为后续学习 **组件通信（props / emit）** 和 **组件进阶** 打下了基础。

