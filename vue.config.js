const webpack = require("webpack");
const path = require("path");

module.exports = {
  outputDir: "../node/dist", // 构建输出目录
  // 配置mui插件
  chainWebpack: config => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "./src"))
      .set("mui", path.resolve(__dirname, "./src/assets/mui/js/mui.js"));
  },
  configureWebpack: {
    // 增加一个plugins
    plugins: [
      new webpack.ProvidePlugin({
        mui: "mui",
        "window.mui": "mui"
      })
    ]
  },
  devServer: {
    host: "0.0.0.0",
    // host: "127.0.0.1",
    port: 3000
  },
  lintOnSave: false
};
