<template>
  <div class="caregory">
    <van-nav-bar title="分类" left-arrow @click-left="$router.push('/home')">
      <van-icon name="search" slot="right" />
    </van-nav-bar>

    <CaregoryList></CaregoryList>
  </div>
</template>

<script>
import Tuijian from "../components/Tuijian";
import CaregoryList from "../components/CaregoryList";

export default {
  data() {
    return {
      currentIndex: 0,
      product: [
        "新品",
        "手机",
        "智能",
        "笔记本",
        "电视",
        "家电",
        "新品",
        "手机",
        "智能",
        "笔记本"
      ]
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Tuijian,
    CaregoryList
  }
};
</script>

<style lang="scss">
.van-nav-bar {
  height: 1rem;
  background-color: #f2f2f2;
  color: #666;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
