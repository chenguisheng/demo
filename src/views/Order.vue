<template>
  <div class="order">
    <van-nav-bar title="待付款" left-arrow @click-left="onClickLeft" />

    <div class="orderlist">
      <van-card
        v-for="(item, i) in list"
        :key="i"
        :num="item.num"
        tag="订单"
        :price="item.price * item.num"
        :desc="item.date | dataFormat"
        :title="item.name"
        :thumb="item.img"
      />
    </div>
    <van-submit-bar :price="Tprice" button-text="立即付款" @submit="onSubmit" />
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      maohao: "订单号:",
      list: [],
      Tprice: 0
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onSubmit() {
      if (this.list.length == 0) {
        Toast({
          message: "先去下单吧",
          icon: "shopping-cart-o",
          duration: 1000
        });
      } else {
        Toast({
          message: "付款成功",
          icon: "success",
          duration: 1000
        });
        this.list = [];
        this.$store.commit("orderDel");
        console.log(this.$store.state.orderList);
        this.Tprice = 0;
      }
    }
  },
  created() {
    this.list = this.$store.state.orderList;
    var num = 0;
    this.list.forEach(data => {
      num += data.num * data.price;
    });
    this.Tprice = num * 100;
  }
};
</script>

<style lang="scss"></style>
