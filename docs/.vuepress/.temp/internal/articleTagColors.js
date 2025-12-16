import './articleTagColors.css'
export const articleTagColors = {"预览":"0xz1","组件":"xfo1","markdown":"d5we","Vue":"0xz1","前端学习":"nhcf","学习笔记":"0xz1"}

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
