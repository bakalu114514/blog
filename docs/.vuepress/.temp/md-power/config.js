import { defineClientConfig } from 'vuepress/client'
import Tabs from 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/components/Tabs.vue'
import CodeTabs from 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/components/CodeTabs.vue'
import Plot from 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/components/Plot.vue'
import FileTreeNode from 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/components/FileTreeNode.vue'
import { setupMarkHighlight } from 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/composables/mark.js'

import 'D:/桌面/web study test/my-blog/my-project/node_modules/.pnpm/vuepress-plugin-md-power@1._10c68e8246f677057b55507b5c7819a8/node_modules/vuepress-plugin-md-power/lib/client/styles/index.css'

export default defineClientConfig({
  enhance({ router, app }) {
    app.component('Tabs', Tabs)
    app.component('CodeTabs', CodeTabs)
    app.component('Plot', Plot)
    app.component('FileTreeNode', FileTreeNode)
  },
  setup() {
        setupMarkHighlight("eager")

  }
})
