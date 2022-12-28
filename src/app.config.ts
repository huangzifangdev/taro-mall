export default defineAppConfig({
  pages: ["pages/index/index", "pages/detail/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#8a8a8a",
    selectedColor: "#1296db",
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "assets/icon/home_select.svg",
        iconPath: "assets/icon/home_default.svg",
        text: "首页",
      },
      {
        pagePath: "pages/detail/index",
        selectedIconPath: "assets/icon/goods_select.svg",
        iconPath: "assets/icon/goods_default.svg",
        text: "商品详情",
      },
    ],
  },
});
