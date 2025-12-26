import './articleTagColors.css'
export const articleTagColors = {"预览":"x0xr","组件":"zfes","markdown":"s0ws","Vue":"x0xr","前端学习":"vha5","学习笔记":"x0xr"}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateArticleTagColors) {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ articleTagColors }) => {
    __VUE_HMR_RUNTIME__.updateArticleTagColors(articleTagColors)
  })
}
