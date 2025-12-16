import comp from "D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/一些心得/post-1.html.vue"
const data = JSON.parse("{\"path\":\"/blog/%E4%B8%80%E4%BA%9B%E5%BF%83%E5%BE%97/post-1.html\",\"title\":\"我的第一篇博客（随手一记）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"我的第一篇博客（随手一记）\",\"date\":\"2025-12-15T00:00:00.000Z\"},\"readingTime\":{\"minutes\":1.7,\"words\":510},\"git\":{},\"filePathRelative\":\"blog/一些心得/post-1.md\",\"headers\":[],\"categoryList\":[{\"id\":\"956851\",\"sort\":10001,\"name\":\"一些心得\"}]}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
