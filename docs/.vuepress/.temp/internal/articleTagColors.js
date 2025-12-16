import './articleTagColors.css'
export const articleTagColors = {"预览":"wmdz","组件":"z6dv","markdown":"o96x","Vue":"wmdz","前端学习":"to0f","学习笔记":"wmdz"}

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
