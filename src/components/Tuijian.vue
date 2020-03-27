<template>
  <div class="tuijian">
    <div>
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, i) in lunbo" :key="i">
          <img :src="item" alt="" width="100%" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div>
      <a href="javascript:;" v-for="(item, i) in tuijian" :key="i">
        <img :src="item" alt="" width="20%" />
      </a>
    </div>

    <div class="divline"></div>

    <div class="tupian clearfix">
      <div class="tupian-left">
        <img src="http://127.0.0.1:3000/img/mix3.webp" alt="" width="100%" />
      </div>
      <div class="tupian-right">
        <img
          src="http://127.0.0.1:3000/img/shouhuan4.jpg"
          alt=""
          width="100%"
        />
        <img src="http://127.0.0.1:3000/img/dianshi.webp" alt="" width="100%" />
      </div>
    </div>

    <div class="divline"></div>

    <div class="mi8">
      <img src="http://127.0.0.1:3000/img/mi8.webp" alt="" width="100%" />
    </div>

    <div class="divline"></div>

    <div class="jingxuan">
      <img src="http://127.0.0.1:3000/img/jingxuan.webp" alt="" width="100%" />
    </div>

    <div class="divline"></div>

    <div class="googslist clearfix" v-for="(item, i) in goodslist" :key="i">
      <div class="list" v-for="(k, j) in item" :key="j">
        <router-link :to="{ path: 'xq', query: { id: k.Id } }">
          <div class="listtop">
            <img :src="k.img" alt="" width="100%" />
          </div>
          <div class="listbottom">
            <div class="name">{{ k.name }}</div>
            <div class="brief">{{ k.brief }}</div>
            <div class="price">
              <span>¥{{ k.price }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div v-if="flag" class="jiazai">
      <p @click="jiazai" v-if="flag1">点击加载更多</p>
      <p v-if="!flag1">已经到底了</p>
    </div>

    <div v-if="!flag" class="jiazai">
      <van-loading type="spinner" color="#1989fa" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
// eslint-disable-next-line no-unused-vars
import { setInterval, setTimeout } from "timers";
export default {
  data() {
    return {
      flag: true,
      flag1: true,
      lunbo: [],
      tuijian: [],
      goodslist: []
    };
  },
  methods: {
    getdata() {
      axios
        .get("http://127.0.0.1:3000")
        .then(res => {
          this.goodslist = res.data.goodslist.slice(0, 2);
          this.lunbo = res.data.lunbo;
          this.tuijian = res.data.tuijian;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    jiazai() {
      this.flag = false;
      setTimeout(() => {
        var h = this.goodslist.length;
        if (h < this.$store.state.goodslist.length) {
          this.goodslist.push(this.$store.state.goodslist.slice(h, h + 1)[0]);
        } else {
          Toast("没有更多了");
          this.flag1 = false;
        }
        this.flag = true;
      }, 1000);
    }
  },
  created() {
    this.getdata();
  }
};
</script>

<style lang="scss" scoped>
.tuijian {
  .divline {
    width: 100%;
    height: 0.16rem;
    background-color: #f5f5f5;
  }
  .tupian {
    .tupian-left {
      float: left;
      width: 50%;
    }
    .tupian-right {
      float: left;
      width: 50%;
    }
  }
  .googslist {
    width: 100%;
    height: 5.1rem;
    .list {
      width: 50%;
      float: left;
      a {
        text-decoration: none;
      }
      .listtop {
        width: 100%;
        height: 3.6rem;
      }
      .listbottom {
        height: 1.5rem;
        div {
          text-align: center;
          height: 30%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .name {
          font-size: 0.28rem;
          color: rgba(0, 0, 0, 0.87);
        }
        .brief {
          font-size: 0.2rem;
          color: rgba(0, 0, 0, 0.54);
        }
        .price {
          font-size: 0.28rem;
          color: #ea625b;
        }
      }
    }
  }
  .jiazai {
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }
}
</style>
