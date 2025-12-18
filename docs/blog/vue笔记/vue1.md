---
title: Vue 学习笔记（一）：模板语法与基础指令
date: 2025-12-15T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/15 19:38:29
permalink: /blog/ej57yavv/
---

# Vue 学习笔记（一）：模板语法与基础指令

**日期：2025.12.15**  
今天开始正式学习 Vue 的基础语法。本篇主要记录第一天接触到的核心内容，包括：**模板语法、条件渲染以及列表渲染**，作为后续深入学习的基础。

---

## 一、Vue 模板语法（Template Syntax）

首先学习了在 `.vue` 文件中创建最基本的模板结构，以及 Vue 中常见的数据绑定方式。

### 1. 基本模板结构

在 Vue 单文件组件中，通常由 `template`、`script` 和 `style` 三部分组成。本次主要关注 `template` 与 `script` 中的数据绑定。

```vue
<template>
  <div :id="dynamicId" :class="dynamicClass" :title="dynamicTitle">
    测试
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicClass: "appClass",
      dynamicId: "appID",
      dynamicTitle: "appTitle",
      isButtondisabled: false
    }
  }
}
</script>
```

### 2. v-bind 指令

- `v-bind` 用于**动态绑定属性**，在 Vue 中非常常用。
- `v-bind:属性名="表达式"` 可以简写为 `:属性名="表达式"`。

例如：

```html
v-bind:id="dynamicId"
```

可以简写为：

```html
:id="dynamicId"
```

这种写法在实际开发中更加简洁，也是推荐的常用写法。

---

## 二、条件渲染

条件渲染用于根据不同条件决定元素是否显示，Vue 中常见的指令包括：

- `v-if`
- `v-else-if`
- `v-else`
- `v-show`

### 示例代码

```vue
<template>
  <h3>条件渲染</h3>

  <div v-if="flag">你能看见我吗</div>
  <div v-else>那你还是看看我吧</div>

  <div v-if="type === 'A'">A</div>
  <div v-else-if="type === 'B'">B</div>
  <div v-else-if="type === 'C'">C</div>
  <div v-else>Not A/B/C</div>

  <div v-show="flag">你能看见我吗</div>
</template>

<script>
export default {
  data() {
    return {
      flag: false,
      type: 'B'
    }
  }
}
</script>
```

### v-if 与 v-show 的区别

- **v-if**
  - 根据条件决定是否**渲染或销毁**元素
  - 切换开销较大（频繁销毁与重建）
  - 适合条件很少改变的场景

- **v-show**
  - 元素始终会被渲染
  - 通过 CSS 的 `display: none / block` 控制显示与隐藏
  - 初始渲染开销较高，但切换成本低
  - 适合需要频繁切换显示状态的场景

---

## 三、列表渲染

列表渲染主要使用 `v-for` 指令，用于根据数组或对象生成一组元素。

### 1. 基本用法

```html
<p v-for="value in source">{{ value }}</p>
```

说明：

- `value` 是当前遍历项的变量名，可以自定义
- `source` 是 `script` 中定义的数组，例如：

```js
source: ['窄西原始学院', '锄头班', '翻土']
```

### 2. 结合数据列表的实际示例

通过 `v-for` 遍历数据列表，可以方便地进行内容渲染，实际开发中常用于处理接口返回的数据。

```vue
<template>
  <div v-for="post in result" :key="post.id">
    <img :src="post.avatar" alt="" style="width: 80px; height: 80px;">
    <p>{{ post.title }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: [
        {
          "id": 2261789,
          "title": "厦门环岛路骑行太治愈了！吹着海风追日落 海边咖啡馆还能看到双子塔🌇",
          "avatar": "https://github.com/bakalu114514/my-images/blob/main/0.%E8%BF%B7%E8%B7%A1%E6%B3%A2.PNG?raw=true"
        },
        {
          "id": 2261802,
          "title": "西安这家肉夹馍配冰峰绝了！酥脆掉渣的馍裹满腊汁肉 碳水快乐直接拉满🥙",
          "avatar": "https://github.com/bakalu114514/my-images/blob/main/81d1a8fc36870653dd7490b650f9d41d2007074444.jpg?raw=true"
        },
        {
          "id": 2261815,
          "title": "大理洱海边的民宿推窗就是湖景！清晨被海鸥叫醒 傍晚坐在露台看苍山雪🏔️",
          "avatar": "https://github.com/bakalu114514/my-images/blob/main/69e4ec2eb3e014f2077af276135f4d99549592058.jpg?raw=true"
        },
        {
          "id": 2261828,
          "title": "青岛老城区的转角遇到复古咖啡馆！木质桌椅配手冲咖啡 窗外是红瓦绿树的老房子☕",
          "avatar": "https://github.com/bakalu114514/my-images/blob/main/3548efe78b0291b005a190b34591e970318528118.jpg?raw=true"
        }
      ]
    }
  }
}
</script>
```

在这种写法下，`v-for` 常常与接口数据结合，用于列表页、卡片流等场景。

---

## 小结

第一天主要熟悉了 Vue 中最基础、也是最核心的内容：

- 模板语法与 `v-bind`
- 条件渲染（`v-if` / `v-show`）
- 列表渲染（`v-for`）

这些内容为后续学习组件通信、响应式原理以及项目实战打下了基础。后面将继续深入 Vue 的其他特性。

