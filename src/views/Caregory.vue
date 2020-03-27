<template>
  <div class="caregory">
    <van-nav-bar title="分类" left-arrow @click-left="$router.push('/home')">
      <van-icon name="search" slot="right" />
    </van-nav-bar>

    <div class="wrapper" ref="wrapper">
      <div class="content">
        <ul>
          <li v-for="(item, i) in product" :key="i">
            <a @click="tiao(i)">
              <span :class="{ active: currentIndex == i }">{{ item }}</span>
            </a>
          </li>
          <li style="height:2rem"></li>
        </ul>
      </div>
    </div>

    <div class="caregory-content">
      <div id="新品" class="listbox one" ref="scrollOne">
        <Tuijian></Tuijian>
      </div>
      <div id="手机" class="listbox two" ref="scrollTwo">
        <CaregoreMobile></CaregoreMobile>
      </div>
      <div id="智能" class="listbox three" ref="scrollThree">
        <h5>智能</h5>
        <div style="width:100%;height:200px;background-color:skyblue"></div>
      </div>
      <div id="笔记本" class="listbox four" ref="scrollFour">
        <h5>笔记本</h5>
        <div style="width:100%;height:200px;background-color:skyblue"></div>
      </div>
      <div id="电视" class="listbox five" ref="scrollFive">
        <h5>电视</h5>
        <div style="width:100%;height:200px;background-color:skyblue"></div>
      </div>
      <div id="家电" class="listbox six" ref="scrollSix">
        <h5>家电</h5>
        <div style="width:100%;height:200px;background-color:skyblue"></div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Tuijian from "../components/Tuijian";
import CaregoreMobile from "../components/CaregoreMobile";
export default {
  data() {
    return {
      currentIndex: 0,
      product: ["新品", "手机", "智能", "笔记本", "电视", "家电"]
    };
  },
  methods: {
    tiao(i) {
      // eslint-disable-next-line no-unused-vars
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let oneHeight = this.$refs.scrollOne.offsetHeight + 5;
      let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight + 5;
      let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight + 5;
      let fourHeight = this.$refs.scrollFour.offsetHeight + threeHeight + 5;
      let fiveHeight = this.$refs.scrollFive.offsetHeight + fourHeight + 5;

      var arr = [
        0,
        oneHeight,
        twoHeight,
        threeHeight,
        fourHeight,
        fiveHeight,
        0,
        oneHeight,
        twoHeight,
        threeHeight,
        fourHeight,
        fiveHeight
      ];
      window.scrollTo(0, arr[i]);
      this.currentIndex = i;
    },
    handleScroll() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let oneHeight = this.$refs.scrollOne.offsetHeight;
      let twoHeight = this.$refs.scrollTwo.offsetHeight + oneHeight;
      let threeHeight = this.$refs.scrollThree.offsetHeight + twoHeight;
      let fourHeight = this.$refs.scrollFour.offsetHeight + threeHeight;
      let fiveHeight = this.$refs.scrollFive.offsetHeight + fourHeight;

      var arr = [0, oneHeight, twoHeight, threeHeight, fourHeight, fiveHeight];

      arr.forEach((ele, index) => {
        if (scrollTop > ele) {
          this.currentIndex = index;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      //$refs绑定元素
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.wrapper, { click: true });
      } else if (!this.$refs.wrapper) {
        return;
      } else {
        this.scroll.refresh();
      }
    });
  },
  components: {
    Tuijian,
    CaregoreMobile
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); //销毁监听页面滚动事件
  }
};
</script>

<style lang="scss">
.caregory {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  .wrapper {
    width: 20%;
    height: 100%;
    text-align: center;
    position: fixed;
    top: 45px;
    bottom: 50px; /*关键*/
    overflow: hidden;
    z-index: 1;
    touch-action: none;
    .content {
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
  }
  .caregory-content {
    width: 78%;
    height: 100%;
    position: absolute;
    top: 1rem;
    right: 0;
    .listbox {
      width: 100%;
      h5 {
        line-height: 1rem;
        color: #3c3c3c;
        text-align: center;
      }
    }
    .bottom {
      width: 100%;
      height: 50px;
    }
  }
}
</style>
