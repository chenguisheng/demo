<template>
  <div>
    <div class="caregorylist">
      <div class="navleft">
        <ul>
          <li v-for="(item, i) in product" :key="i">
            <a :href="'#' + item">
              <span :class="{ active: currentIndex == i }">{{ item }}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="caregory-content">
        <div id="新品" class="listbox one" ref="scrollOne">
          <h4>新品</h4>
          <Tuijian></Tuijian>
        </div>
        <div id="手机" class="listbox two" ref="scrollTwo">
          <h4>手机</h4>
          <Tuijian></Tuijian>
        </div>
        <div id="智能" class="listbox three" ref="scrollThree">
          <h4>智能</h4>
          <Tuijian></Tuijian>
        </div>
        <div id="笔记本" class="listbox four" ref="scrollFour">
          <h4>笔记本</h4>
          <Tuijian></Tuijian>
        </div>
        <div id="电视" class="listbox five" ref="scrollFive">
          <h4>电视</h4>
          <Tuijian></Tuijian>
        </div>
        <div id="家电" class="listbox six" ref="scrollSix">
          <h4>家电</h4>
          <Tuijian></Tuijian>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tuijian from "../components/Tuijian";

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
    Tuijian
  },
  methods: {
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.navShow = scrollTop;
      let oneHeight = this.$refs.scrollOne.offsetHeight;
      let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
      let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
      let fourHeight = this.$refs.scrollFour.offsetHeight + threeHeight;
      let fiveHeight = this.$refs.scrollFive.offsetHeight + fourHeight;
      if (scrollTop > 0) {
        this.currentIndex = 0;
      }
      if (scrollTop > oneHeight) {
        this.currentIndex = 1;
      }
      if (scrollTop > twoHeight) {
        this.currentIndex = 2;
      }
      if (scrollTop > threeHeight) {
        this.currentIndex = 3;
      }
      if (scrollTop > fourHeight) {
        this.currentIndex = 4;
      }
      if (scrollTop > fiveHeight) {
        this.currentIndex = 5;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //销毁监听页面滚动事件
  }
};
</script>

<style lang="scss">
.navleft {
  width: 21%;
  height: 100%;
  position: fixed;
  top: 1rem;
  left: 0;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      color: #3c3c3c;
      font-size: 0.26rem;
      text-align: center;
      a {
        text-decoration: none;
        color: #3c3c3c;
        span {
          display: inline-block;
          width: 100%;
          height: 0.5.6rem;
        }
        span.active {
          color: #fb7d34;
          font-size: 0.34rem;
        }
      }
    }
  }
}
.caregory-content {
  width: 78%;
  position: absolute;
  top: 1rem;
  right: 0;
  padding-bottom: 50px;
  .listbox {
    width: 100%;
    h4 {
      text-align: center;
    }
  }
}
</style>
