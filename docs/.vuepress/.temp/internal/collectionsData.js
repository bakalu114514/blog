export const collections = {"/":[{"type":"post","dir":"blog","title":"博客","link":"/blog/","linkPrefix":"/blog/","tags":true,"tagsLink":"/blog/tags/","archives":true,"archivesLink":"/blog/archives/","categories":true,"categoriesLink":"/blog/categories/"}]}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateCollections) {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ collections }) => {
    __VUE_HMR_RUNTIME__.updateCollections(collections)
  })
}
