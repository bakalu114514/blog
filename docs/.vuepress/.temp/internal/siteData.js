export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"bakalu的blog\",\"description\":\"blog\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"image/png\",\"href\":\"https://github.com/bakalu114514/my-images/blob/main/mygo_logo.png?raw=true\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
