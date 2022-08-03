const { v3Source: v3Sider } = require("./dir.sider");
const notesSider = require("./notes.sider");

module.exports = {
  title: "GabeYuan's Bolg",
  description: "Just playing around",
  head: [
    ["link", { rel: "icon", href: "/logo.png" }], // favicon
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "随记", link: "/notes-non-daily/" },
      {
        text: "源码学习",
        items: [
          { text: "vue3源码", link: "/vue3-source/" },
        ],
      },
      {
        text: "经验总结",
        items: [
          { text: "bug集", link: "/bugs" },
        ],
      },
      {
        text: "others",
        items: [
          { text: "Github", link: "https://github.com/gabeyuan" },
          {
            text: "掘金",
            link: "https://baidu.com",
          },
        ],
      },
    ],
    // 侧边栏
    sidebar: {
      "/vue3-source/": v3Sider,
      "/notes-non-daily/": notesSider,
      // "/": [
      //   {
      //     title: "欢迎学习",
      //     collapsable: false, // 不折叠
      //     children: [{ title: "学前必读", path: "/" }],
      //   },
      // ],
    },
  },
};
