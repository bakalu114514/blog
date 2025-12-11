import { GitContributors } from "D:/桌面/web study test/vuepress_blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_510965b8006f28b9cd88d14bb7d39a2a/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "D:/桌面/web study test/vuepress_blog/vuepress-starter/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_510965b8006f28b9cd88d14bb7d39a2a/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
