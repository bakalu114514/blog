---
title: Vue 学习笔记（七）：Style 样式绑定
date: 2025-12-23
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
---
## 日期：2025.12.24

## 一、Style 样式绑定概述

在 Vue 中，除了使用 `class` 进行样式绑定之外，还可以通过 `:style`（即 `v-bind:style`）直接为元素绑定 **内联样式**。这种方式适合样式值需要**动态计算**、**运行时改变**或**与数据强相关**的场景。

Vue 的 `style` 绑定支持以下几种常见写法：
- 对象语法（最常用、最推荐）
- 数组语法（较少使用）

本文主要学习和使用对象语法进行样式绑定。

---

## 二、对象语法绑定内联样式

### 1. 在模板中直接使用对象

```vue
<template>
    <p :style="{ color: activeColor, fontSize: fontSize + 'px' }">
        style 样式绑定
    </p>
</template>
```

```js
<script>
export default {
    data() {
        return {
            activeColor: 'green',
            fontSize: 30
        }
    }
}
</script>
```

#### 说明：
- `:style` 后面绑定的是一个 **JavaScript 对象**
- CSS 属性名可以使用 **驼峰命名**（如 `fontSize`）
- 数值类型的样式（如字体大小）通常需要手动拼接单位，例如 `px`

这种方式适合样式数量较少、逻辑较简单的情况。

---

### 2. 绑定 style 对象（推荐写法）

当样式较多时，推荐将样式对象直接写在 `data` 中，使模板更加简洁、清晰。

```vue
<template>
    <p :style="styleObject">style 样式绑定 2</p>
</template>
```

```js
<script>
export default {
    data() {
        return {
            styleObject: {
                color: 'red',
                fontSize: '30px'
            }
        }
    }
}
</script>
```

#### 优点：
- 模板结构更加干净，避免出现复杂表达式
- 样式集中管理，便于维护和修改
- 更符合实际项目中的编码习惯

**推荐写法：** 在 `styleObject` 中直接写完整样式值（包含单位）。

---

## 三、Style 绑定的响应式特性

`style` 绑定同样是 **响应式的**。当绑定的数据发生变化时，页面样式会自动更新。

例如：

```js
this.styleObject.color = 'blue'
```

页面中的文字颜色会立即发生变化，无需手动操作 DOM。

---

## 四、关于数组语法的说明

Vue 也支持使用数组形式绑定多个样式对象：

```vue
<p :style="[baseStyle, overrideStyle]"></p>
```

但在实际开发中：
- 使用场景较少
- 可读性不如对象语法
- 维护成本相对较高

因此，在一般业务开发中 **优先使用对象语法即可**。

---

## 五、Class 与 Style 绑定的使用场景对比

| 方式 | 适合场景 |
|----|----|
| class 绑定 | 样式固定、可复用、状态切换 |
| style 绑定 | 样式动态变化、与数据强相关 |

在实际项目中，两者通常 **配合使用**，而不是互相替代。

---

## 六、本节小结

- `:style` 用于绑定内联样式，支持对象和数组语法
- 推荐使用 **对象语法 + data 中定义样式对象**
- 样式值可以是响应式数据，修改数据即可更新视图
- `class` 负责结构性样式，`style` 负责动态细节样式

这一节内容在后续动画、主题切换、动态布局中会非常常用。

