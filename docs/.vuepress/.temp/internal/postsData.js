export const postsData = {"/blog/":[{"path":"/blog/g9diofhh/","title":"vue4","categoryList":[{"id":"2b3188","sort":10001,"name":"vue笔记"}],"createTime":"2025/12/19 10:14:19","lang":"zh-CN","excerpt":"","readingTime":{"minutes":0.03,"words":9}},{"path":"/blog/upep77ga/","title":"Vue 学习笔记（三）：事件传参与事件修饰符","categoryList":[{"id":"2b3188","sort":10001,"name":"vue笔记"}],"tags":["Vue","前端学习","学习笔记"],"createTime":"2025/12/19 10:03:42","lang":"zh-CN","excerpt":"","readingTime":{"minutes":2.71,"words":814}},{"path":"/blog/n17sr6ew/","title":"Vue 学习笔记（二）：事件处理（v-on）","categoryList":[{"id":"2b3188","sort":10001,"name":"vue笔记"}],"tags":["Vue","前端学习","学习笔记"],"createTime":"2025/12/18 16:00:25","lang":"zh-CN","excerpt":"","readingTime":{"minutes":2.25,"words":676}},{"path":"/blog/ej57yavv/","title":"Vue 学习笔记（一）：模板语法与基础指令","categoryList":[{"id":"2b3188","sort":10001,"name":"vue笔记"}],"tags":["Vue","前端学习","学习笔记"],"createTime":"2025/12/15 19:38:29","lang":"zh-CN","excerpt":"","readingTime":{"minutes":3.31,"words":994}},{"path":"/blog/n9nnr62k/","title":"我的第一篇博客（随手一记）","categoryList":[{"id":"956851","sort":10002,"name":"一些心得"}],"createTime":"2025/12/15 19:38:17","lang":"zh-CN","excerpt":"","readingTime":{"minutes":1.73,"words":519}},{"path":"/blog/okxpefxz/","title":"Markdown","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["markdown"],"createTime":"2025/12/15 17:34:11","lang":"zh-CN","excerpt":"","readingTime":{"minutes":2.96,"words":887}},{"path":"/blog/az4bxhq6/","title":"自定义组件","categoryList":[{"id":"5ebeb6","sort":10000,"name":"preview"}],"tags":["预览","组件"],"createTime":"2025/12/15 17:34:11","lang":"zh-CN","excerpt":"","readingTime":{"minutes":0.07,"words":20}}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePostsData) {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ postsData }) => {
    __VUE_HMR_RUNTIME__.updatePostsData(postsData)
  })
}
