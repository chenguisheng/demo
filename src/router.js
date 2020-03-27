import Vue from "vue";
import Router from "vue-router";
import home from "./views/Home.vue";
import caregory from "./views/Caregory.vue";
import car from "./views/Car.vue";
import my from "./views/My.vue";
import Details from "./views/Details.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import("./views/Index.vue")
    },
    {
      path: "/home",
      name: "首页",
      component: home
    },
    {
      path: "/caregory",
      name: "分类",
      component: caregory
    },
    {
      path: "/car",
      name: "购物车",
      component: car
    },
    {
      path: "/my",
      name: "我的",
      component: my
    },
    {
      path: "/xq",
      name: "商品详情",
      component: Details
    },
    {
      path: "/gg",
      name: "广告页面",
      component: () => import("./views/Gg.vue")
    },
    {
      path: "/order",
      name: "待付款",
      component: () => import("./views/Order.vue")
    },
    {
      path: "/address",
      name: "地址",
      component: () => import("./views/Address.vue")
    },
    {
      path: "/addAddress",
      name: "地址编辑",
      component: () => import("./views/Addaddress.vue")
    },
    {
      path: "/login",
      name: "登录",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "注册",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/myorder",
      name: "订单",
      component: () => import("./views/MyOrder.vue")
    }
  ],
  linkActiveClass: "is-selected"
});
