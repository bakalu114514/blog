import comp from "D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/post-2.html.vue"
const data = JSON.parse("{\"path\":\"/blog/post-2.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0,\"words\":0},\"git\":{},\"filePathRelative\":\"blog/post-2.md\",\"headers\":[],\"categoryList\":[]}")
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
