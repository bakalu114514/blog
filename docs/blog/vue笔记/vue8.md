---
title: Vue 学习笔记（八）—— 侦听器 watch
date: 2025-12-23T00:00:00.000Z
tags:
  - Vue
  - 前端学习
  - 学习笔记
categories:
  - Vue
createTime: 2025/12/25 15:13:38
permalink: /blog/22jmj1gz/
---
## 日期：2025.12.25

### 一、什么是侦听器（watch）

在 Vue 中，**侦听器（watch）** 用于监听某个**响应式数据**的变化，当数据发生改变时，自动执行对应的回调函数。

它非常适合以下场景：

- 需要在数据变化时执行**异步操作**（如接口请求）
- 需要在数据变化前后做**额外处理**
- 需要精确获取数据变化的 **新值（newValue）** 和 **旧值（oldValue）**

> 注意：watch 只能监听 **data / props / computed** 等响应式数据，普通常量或模板中的静态内容无法被监听。

---

### 二、基础用法示例

#### 1. 模板代码

```vue
<template>
    <h3>侦听器</h3>
    <p>{{ message }}</p>
    <button @click="updataHandel">修改数据</button>
</template>
```

---

#### 2. Script 部分

```vue
<script>
export default{
    data(){
        return{
            message: "Hello" // 响应式数据，可被 watch 监听
        }
    },
    methods:{
        updataHandel(){
            this.message = "World"
        }
    },
    watch:{
        // newValue：改变后的值
        // oldValue：改变前的值
        // 函数名必须与被监听的数据名一致
        message(newValue, oldValue){
            console.log(newValue, oldValue)
        }
    }
}
</script>
```

---

### 三、执行流程说明

1. 页面首次渲染时：
   - `message` 初始化为 `"Hello"`
   - watch 不会立即执行（默认行为）

2. 点击按钮后：
   - `message` 从 `Hello` 变为 `World`
   - Vue 自动触发 `watch.message()`
   - 回调函数中可以同时获取：
     - `newValue` → `World`
     - `oldValue` → `Hello`

---

### 四、watch 与 computed 的区别

| 对比项 | watch | computed |
|------|------|---------|
| 主要用途 | 监听数据变化后执行操作 | 基于数据计算新值 |
| 是否缓存 | 不缓存 | 会缓存 |
| 是否支持异步 | 支持 | 不推荐 |
| 返回值 | 不要求 | 必须有返回值 |

**简单理解：**
- `computed`：用来“算结果”
- `watch`：用来“做事情”

---

### 五、watch 的常见使用场景

- 监听搜索关键词变化，发送接口请求
- 监听路由参数变化，重新加载数据
- 监听表单输入，进行校验或提示
- 监听状态变化，执行日志记录

---

### 六、小结

- watch 用于监听 **响应式数据的变化**
- 回调函数可获取新旧值
- 更适合处理副作用和异步逻辑
- 不要滥用，能用 computed 的地方优先使用 computed

这一节是 Vue 响应式系统中非常重要的一部分，为后续学习 **深度侦听、立即执行、表单监听、异步请求** 等内容打下基础。