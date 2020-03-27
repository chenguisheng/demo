<template>
  <div class="home">
    <div class="header-search clearfix">
      <div class="header-left">
        <img src="../assets/img/xiaomi.png" alt="" />
      </div>
      <div class="header-middle">
        <span class="glyphicon glyphicon-search"></span>
        搜索商品名称
      </div>
      <div class="header-right">
        <router-link to="/my">
          <img src="../assets/img/wode.png" alt="" />
        </router-link>
      </div>
    </div>

    <div class="home-nav clearfix">
      <ul>
        <li v-for="(item, i) in tabTitle" :key="i" @click="num = i">
          <span :class="{ active: num == i }">{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="content" :class="{ active: num == 0 }">
      <Tuijian></Tuijian>
    </div>
    <div class="content" :class="{ active: num == 1 }">
      <CaregoreMobile></CaregoreMobile>
    </div>
  </div>
</template>

<script>
import Tuijian from "../components/Tuijian";
import CaregoreMobile from "../components/CaregoreMobile";

export default {
  data() {
    return {
      num: 0,
      tabTitle: ["推荐", "手机"]
    };
  },
  components: {
    Tuijian,
    // eslint-disable-next-line vue/no-unused-components
    CaregoreMobile
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.home {
  padding-bottom: 50px;
  .header-search {
    width: 100%;
    height: 0.86rem;
    line-height: 0.86rem;
    background-color: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    .header-left {
      width: 0.6rem;
      margin: 0 0.2rem;
      text-align: center;
      float: left;
      img {
        width: 80%;
      }
    }
    .header-middle {
      width: calc(100% - 2rem);
      height: 0.68rem;
      line-height: 0.68rem;
      margin-top: 0.09rem;
      font-size: 0.3rem;
      background-color: #fff;
      color: rgba(0, 0, 0, 0.3);
      border: 1px solid #e5e5e5;
      border-radius: 0.04rem;
      float: left;
      padding-left: 0.16rem;
    }
    .header-right {
      width: 0.6rem;
      margin: 0 0.2rem;
      text-align: center;
      float: left;
      img {
        width: 80%;
      }
    }
  }
  .home-nav {
    width: 100%;
    height: 0.6rem;
    margin-top: 0.86rem;
    background-color: #f2f2f2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    ul {
      width: 100%;
      height: 0.6rem;
      li {
        width: 50%;
        height: 0.6rem;
        line-height: 0.6rem;
        float: left;
        color: #3c3c3c;
        font-size: 0.26rem;
        text-align: center;
        span {
          display: inline-block;
          height: 0.5.6rem;
        }
        span.active {
          color: rgb(237, 91, 0);
          border-bottom: 0.04rem solid rgb(237, 91, 0);
        }
      }
    }
  }
  .content {
    width: 100%;
    margin-top: 1.46rem;
    display: none;
  }
  .content.active {
    display: block;
  }
}
</style>
