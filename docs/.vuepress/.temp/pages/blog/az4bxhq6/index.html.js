import comp from "D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/az4bxhq6/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/az4bxhq6/\",\"title\":\"自定义组件\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"自定义组件\",\"tags\":[\"预览\",\"组件\"],\"createTime\":\"2025/12/15 17:34:11\",\"permalink\":\"/blog/az4bxhq6/\"},\"readingTime\":{\"minutes\":0.07,\"words\":20},\"git\":{},\"filePathRelative\":\"blog/preview/custom-component.example.md\",\"headers\":[],\"categoryList\":[{\"id\":\"5ebeb6\",\"sort\":10000,\"name\":\"preview\"}]}")
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
