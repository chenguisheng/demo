<template>
  <div>
    <van-nav-bar title="我的地址" left-arrow @click-left="onClickLeft" />

    <div class="address">
      <van-address-list
        v-model="chosenAddressId"
        :list="list"
        @add="$router.push('/addAddress')"
        @edit="onEdit"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: 1,
      list: []
    };
  },

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onEdit(item, index) {
      console.log(item);
      console.log(index);
    }
  },
  created() {
    this.list = this.$store.state.addressList;
  }
};
</script>

<style lang="scss"></style>
