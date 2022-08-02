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
        text: "经验总结",
        items: [
          { text: "bug集", link: "/bugs" },
          { text: "前端工程化", link: "/engenier" },
          // { text: "Node 实践", link: "/" },
          // { text: "Web 性能优化", link: "/" },
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
