<template>
  <div id="app" class="mi-app">
    <router-view></router-view>

    <van-tabbar v-model="active" v-show="tabbarshow" fixed>
      <van-tabbar-item icon="home-o" name="home" to="/home">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="search" name="category" to="/caregory">
        发现
      </van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" name="cart" to="car">
        购物车
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o" name="my" to="my">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      tabbarshow: true
    };
  },
  methods: {
    getdata() {
      this.$axios
        .get("http://127.0.0.1:3000")
        .then(res => {
          this.$store.commit("getGoodslist", res.data.goodslist);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    this.getdata();
    if (this.$route.path == "/") {
      this.tabbarshow = false;
    } else {
      this.tabbarshow = true;
    }
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    "$route.path": function(newpath, oldpath) {
      if (
        newpath == "/xq" ||
        newpath == "/login" ||
        newpath == "/register" ||
        newpath == "/myorder" ||
        this.$route.path == "/gg"
      ) {
        this.tabbarshow = false;
      } else {
        this.tabbarshow = true;
      }
    },
    // eslint-disable-next-line no-unused-vars
    $route: function(to, from) {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style lang="scss">
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.mi-app,
html,
body {
  font-size: 0.22rem;
}
</style>
