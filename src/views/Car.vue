<template>
  <div class="car">
    <Navbar></Navbar>

    <div v-if="flag" class="carbox">
      <div class="tologin">
        <span class="span1">登录后享受更多优惠</span>
        <router-link to="/login">
          <span class="span2">
            去登录<span class="mui-icon mui-icon-arrowright"></span>
          </span>
        </router-link>
      </div>
      <div class="toshop">
        <van-icon name="shopping-cart-o" class="icon-car" />
        购物车还是空的
        <van-button plain hairline type="primary" size="small" to="/home">
          去逛逛
        </van-button>
      </div>

      <div>
        <img src="../assets/img/gl.jpg" alt="" width="100%" />
      </div>

      <div class="tupian clearfix">
        <div class="tupian-left">
          <img src="../assets/img/mix3.webp" alt="" width="100%" />
        </div>
        <div class="tupian-right">
          <img src="../assets/img/shouhuan4.jpg" alt="" width="100%" />
          <img src="../assets/img/dianshi.webp" alt="" width="100%" />
        </div>
      </div>

      <div class="divline"></div>

      <div>
        <img src="../assets/img/mi8.webp" alt="" width="100%" />
      </div>

      <div class="divline"></div>

      <div>
        <img src="../assets/img/jingxuan.webp" alt="" width="100%" />
      </div>
    </div>

    <div class="carlist">
      <div v-for="(item, i) in CartList" :key="i">
        <van-row>
          <van-col span="2" class="aaa">
            <van-checkbox v-model="item.isshow"></van-checkbox>
          </van-col>
          <van-col span="20">
            <van-card
              tag="标签"
              :price="item.price"
              :desc="item.brief"
              :title="item.name"
              :thumb="item.img"
              :origin-price="item.price"
              :num="item.num"
            >
              <div slot="footer">
                <van-button size="mini" @click="sub(i)">-</van-button>
                <van-button size="mini" @click="add(i)">+</van-button>
                <van-button size="mini" @click="carDel(i)">
                  <van-icon name="delete" />
                </van-button>
              </div>
            </van-card>
          </van-col>
        </van-row>
      </div>
    </div>

    <van-submit-bar
      v-if="!flag"
      :price="Tprice"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox @click="checkeds" :value="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import { Toast } from "vant";
export default {
  data() {
    return {
      CartList: [],
      checked: true,
      Tprice: 0,
      flag: true
    };
  },
  components: {
    Navbar
  },
  methods: {
    onSubmit() {
      var arr = this.CartList.filter(function(x) {
        if (x.isshow) {
          return x;
        }
      });
      if (arr.length < 1) {
        Toast({
          message: "请选择商品",
          icon: "shopping-cart-o",
          duration: 1000
        });
        return;
      } else {
        arr.forEach(data => {
          if (data.isshow) {
            this.$store.commit("orderAdd", data);
            console.log(data);
          }
        });
      }
      var a = this.CartList.filter(data => {
        if (!data.isshow) {
          return data;
        }
      });
      // eslint-disable-next-line no-unused-vars
      var b = this.CartList.filter(data => {
        if (data.isshow) {
          return data;
        }
      });
      this.$store.commit("del", a);
      // this.$store.commit("clearnum", b);
      this.$router.push("/order");
    },

    add(i) {
      this.CartList[i].num++;
    },

    sub(i) {
      if (this.CartList[i].num > 1) {
        this.CartList[i].num--;
      }
    },

    totalPrice() {
      //总价格计算
      var num = 0;
      this.CartList.forEach(data => {
        if (data.isshow) {
          num += data.num * data.price;
        }
      });
      this.Tprice = num * 100;
    },

    checkeds() {
      //控制选择
      this.CartList.forEach(data => {
        return (data.isshow = !this.checked);
      });
    },

    datachecked() {
      var num = 0;
      this.CartList.forEach(data => {
        if (data.isshow) {
          num++;
        } else {
          num--;
        }
      });

      if (this.CartList.length == 0) {
        this.checked = true;
        this.flag = true;
      } else {
        this.flag = false;
        if (Math.abs(num) == this.CartList.length) {
          this.checked = this.CartList[0].isshow;
        } else {
          this.checked = false;
        }
      }
    },

    carDel(key) {
      this.CartList.splice(key, 1);
    }
  },
  created() {
    this.CartList = this.$store.state.CartList;
    this.totalPrice();
    if (this.CartList.length == 0) {
      this.flag = true;
    } else {
      this.flag = false;
    }
  },
  beforeUpdate() {
    this.totalPrice();
    this.datachecked();
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.car {
  overflow: hidden;
  .carlist {
    .van-row {
      background-color: #fff;
    }
    padding-bottom: 1.2rem;
    div {
      margin-top: 0.06rem;
    }
    .aaa {
      margin-top: 40px;
      margin-left: 10px;
    }
  }
}
.carbox {
  .tologin {
    height: 1rem;
    line-height: 1rem;
    padding: 0 0.32rem 0 0.32rem;
    background-color: #fff;
    .span1 {
      display: inline-block;
      width: 70%;
      text-align: left;
      color: rgba(0, 0, 0, 0.87);
      font-size: 0.32rem;
    }
    .span2 {
      width: 28%;
      display: inline-block;
      text-align: right;
      color: rgba(0, 0, 0, 0.54);
      .mui-icon-arrowright {
        font-size: 0.4rem;
      }
    }
  }
  .toshop {
    height: 1.2rem;
    line-height: 1.2rem;
    text-align: center;
    font-size: 0.24rem;
    i {
      font-size: 0.6rem;
      vertical-align: middle;
    }
    button {
      margin-top: 0.24rem;
    }
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
}
</style>
