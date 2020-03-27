<template>
  <div class="details">
    <mt-header fixed title="商品详情"></mt-header>

    <div class="fanhui">
      <van-icon name="arrow-left" class="icon" @click="$router.go(-1)" />
    </div>

    <div>
      <img :src="goods.img" alt="" width="100%" />
    </div>

    <div class="detbox">
      <van-cell-group>
        <van-cell>
          <div class="goods-title">{{ goods.name }}</div>
          <div class="goods-brief">{{ goods.brief }}</div>
          <div class="goods-price">￥{{ goods.price }}</div>
        </van-cell>
        <van-cell class="goods-express">
          <van-col span="10">运费：{{ goods.express }}</van-col>
          <van-col span="14">剩余：{{ goods.remain }}</van-col>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell value="商家店铺" icon="shop-o">
          <template slot="title">
            <span class="van-cell-text">有赞的店</span>
            <van-tag class="goods-tag" type="danger">官方</van-tag>
          </template>
        </van-cell>
      </van-cell-group>

      <van-cell-group class="goods-cell-group">
        <van-cell title="商品详情" />
      </van-cell-group>
    </div>

    <div class="details-foot">
      <van-goods-action>
        <van-goods-action-icon />
        <van-goods-action-icon
          icon="cart-o"
          :info="goods.num"
          text="购物车"
          to="/car"
        />
        <van-goods-action-icon />
        <van-goods-action-button
          type="warning"
          text="加入购物车"
          @click="getCard"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      goods: {}
    };
  },
  methods: {
    getCard() {
      if (sessionStorage.Login == undefined) {
        this.$router.push("/login");
        return;
      }
      if (!JSON.parse(sessionStorage.Login).login) {
        this.$router.push("/login");
      } else {
        this.goods.num++;
        this.goods.remain--;
        this.$store.commit("add", this.goods);
        console.log("购物车添加成功");
      }
    }
  },
  created() {
    var id = this.$route.query.id;

    //axios.get("https://chenguisheng.mynatapp.cc").then(res => {
    axios
      .get("http://127.0.0.1:3000")
      .then(res => {
        res.data.goodslist.forEach(element => {
          var index = element.findIndex(val => {
            return val.Id == id;
          });
          if (index != "-1") {
            this.goods = element[index];
          }
          var index1 = this.$store.state.CartList.findIndex(val1 => {
            return val1.Id == id;
          });
          if (index1 != "-1") {
            this.goods.num = this.$store.state.CartList[index1].num;
          }
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>

<style lang="scss">
.details {
  padding-top: 40px;
  padding-bottom: 60px;
  background-color: #fff;
  .fanhui {
    position: fixed;
    top: 10px;
    left: 10px;
  }
  .detbox {
    .goods-title {
      font-size: 16px;
    }
    .goods-brief {
      font-size: 14px;
      color: #999;
    }
    .goods-price {
      color: #f44;
    }
    .goods-express {
      color: #999;
      font-size: 12px;
      padding: 5px 15px;
    }
    .goods-cell-group {
      margin: 15px 0;
      .van-cell__value {
        color: #999;
      }
    }
    .goods-tag {
      margin-left: 5px;
    }
  }
}
.fanhui {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 10;
  .icon {
    font-size: 20px;
    color: #fff;
  }
}
.details-foot {
  width: 100%;
  height: 60px;
  background-color: #fff;
  position: fixed;
  bottom: 0px;
  left: 0;
  z-index: 100;
}
</style>
