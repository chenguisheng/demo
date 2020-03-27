import Vue from "vue";

import "bootstrap/dist/css/bootstrap.css";
import "./assets/icon/iconfont.css";
import "./assets/mui/css/mui.css";
import "swiper/dist/css/swiper.css";
import "./rem.js";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import animate from "animate.css";
Vue.use(animate);

import Mint from "mint-ui";
import "./assets/css/style.css";
Vue.use(Mint);

import vant from "vant";
import "vant/lib/index.css";
Vue.use(vant);

import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from "axios";
Vue.prototype.$axios = axios;

import moment from "moment";
Vue.filter("dataFormat", function(dataStr, pattern = "YYYYMMDDHHmmss") {
  return "订单号:" + moment(dataStr).format(pattern);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
