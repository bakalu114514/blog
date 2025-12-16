import comp from "D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"pageLayout\":\"home\",\"externalLinkIcon\":false,\"config\":[{\"type\":\"banner\",\"banner\":\"https://github.com/bakalu114514/my-images/blob/main/19.%E7%AB%AF%E7%A8%8B%E5%B1%B1%E8%A3%81%E5%89%AA.png?raw=true\",\"full\":true,\"forceDark\":true,\"effect\":\"lightning\",\"hero\":{\"name\":\"Bakalu's Blog\",\"tagline\":\"累计每一个瞬间\",\"text\":\"即使迷茫也要前进\",\"actions\":[{\"theme\":\"brand\",\"text\":\"博客\",\"link\":\"/blog/\"},{\"theme\":\"alt\",\"text\":\"Github →\",\"link\":\"https://github.com/bakalu114514\"}]}}]},\"readingTime\":{\"minutes\":0.24,\"words\":71},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[]}")
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
