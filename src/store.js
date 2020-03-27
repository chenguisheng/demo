import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    goodslist: [],
    list: {},
    CartList: [],
    orderList: [],
    addressList: [
      {
        id: 1,
        name: "ACE",
        tel: "13000000000",
        address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室"
      }
    ],
    flag: true
  },
  mutations: {
    add(state, data) {
      data.datetime = new Date();
      var index = state.CartList.findIndex(val => {
        return val.Id == data.Id;
      });
      // 1.判断商品id在购物车列表中是否存在
      if (index != "-1") {
        // 1.1存在 数量加一
        state.CartList[index].num += 1;
      } else {
        // 1.2不存在 添加数据到购物车
        state.CartList.push(data);
      }
    },
    clear(state) {
      state.CartList = [];
    },
    del(state, data) {
      state.CartList = data;
    },
    orderAdd(state, data) {
      state.orderList.push(data);
    },
    orderDel(state) {
      state.orderList = [];
    },
    setdata(state, data) {
      state.list = data;
    },
    addressAdd(state, data) {
      state.addressList.push(data);
    },
    changenum(state, data) {
      state.num = data;
    },
    getGoodslist(state, data) {
      state.goodslist = data;
    },
    clearnum(state, data) {
      data.forEach(ele => {
        state.goodslist.forEach((ele2, index) => {
          var i = ele2.findIndex(val => {
            return ele.Id == val.Id;
          });
          if (i != -1) {
            state.goodslist[index][i].num = 0;
          }
        });
      });
    }
  }
});
