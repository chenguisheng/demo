<template>
  <div class="order">
    <van-nav-bar title="订单" left-arrow @click-left="onClickLeft" />

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
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
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
