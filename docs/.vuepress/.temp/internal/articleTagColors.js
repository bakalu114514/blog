import './articleTagColors.css'
export const articleTagColors = {"预览":"c6g6","组件":"jp5q","markdown":"ynar","Vue":"c6g6","前端学习":"esw5","学习笔记":"c6g6"}

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
