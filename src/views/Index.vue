<template>
  <div class="app-index">
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            :class="{ animated: flag, flip: flag }"
            src="../assets/img/huiyuan.jpg"
            alt=""
          />
          <h3 :class="{ animated: flag, flip: flag }">1</h3>
        </div>
        <div class="swiper-slide">
          <img
            :class="{ animated: flag, flip: flag }"
            src="../assets/img/huiyuan.jpg"
            alt=""
          />
          <h3 :class="{ animated: flag, flip: flag }">2</h3>
        </div>
        <div class="swiper-slide">
          <img
            :class="{ animated: flag, flip: flag }"
            src="../assets/img/huiyuan.jpg"
            alt=""
          />
          <h3 :class="{ animated: flag, flip: flag }">3</h3>
          <van-button
            :class="{ animated: flag, flip: flag }"
            type="primary"
            to="/home"
            >点击体验
          </van-button>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flag: false
    };
  },
  mounted() {
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination"
      },
      on: {
        slideChangeTransitionStart: () => {
          this.flag = false;
        },
        slideChangeTransitionEnd: () => {
          this.flag = true;
        }
      }
    });
  },
  created() {
    // 控制页面跳转
    if (localStorage.One) {
      this.$router.push("/gg");
    } else {
      localStorage.One = true;
    }
    this.flag = true;
  }
};
</script>

<style lang="scss" scoped>
.app-index {
  .swiper-container {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: skyblue;
  }
  .swiper-slide {
    text-align: center;
    img {
      width: 120px;
      margin-top: 200px;
    }
    h3 {
      color: #808080;
    }
  }
}
</style>
