export const redirects = JSON.parse("{\"/demo/bar.html\":\"/demo/tlo1fgaj/\",\"/demo/foo.html\":\"/demo/hzuan6gw/\",\"/blog/preview/custom-component.example.html\":\"/blog/az4bxhq6/\",\"/blog/preview/markdown.html\":\"/blog/okxpefxz/\",\"/blog/vue%E7%AC%94%E8%AE%B0/post-2.html\":\"/blog/ej57yavv/\",\"/blog/%E4%B8%80%E4%BA%9B%E5%BF%83%E5%BE%97/post-1.html\":\"/blog/n9nnr62k/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/demo/tlo1fgaj/", { loader: () => import(/* webpackChunkName: "demo_tlo1fgaj_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/demo/tlo1fgaj/index.html.js"), meta: {"title":"bar"} }],
  ["/demo/hzuan6gw/", { loader: () => import(/* webpackChunkName: "demo_hzuan6gw_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/demo/hzuan6gw/index.html.js"), meta: {"title":"foo"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Demo"} }],
  ["/blog/az4bxhq6/", { loader: () => import(/* webpackChunkName: "blog_az4bxhq6_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/az4bxhq6/index.html.js"), meta: {"title":"自定义组件"} }],
  ["/blog/okxpefxz/", { loader: () => import(/* webpackChunkName: "blog_okxpefxz_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/okxpefxz/index.html.js"), meta: {"title":"Markdown"} }],
  ["/blog/ej57yavv/", { loader: () => import(/* webpackChunkName: "blog_ej57yavv_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/ej57yavv/index.html.js"), meta: {"title":"Vue 学习笔记（一）：模板语法与基础指令"} }],
  ["/blog/n9nnr62k/", { loader: () => import(/* webpackChunkName: "blog_n9nnr62k_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/n9nnr62k/index.html.js"), meta: {"title":"我的第一篇博客（随手一记）"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/桌面/web study test/my-blog/my-project/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
