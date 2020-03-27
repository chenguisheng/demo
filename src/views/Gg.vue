<template>
  <div class="gg">
    <img src="../assets/img/ace5.jpg" alt="" width="100%" />
    <h1 style="font-size:50px;">{{ num }}</h1>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { setTimeout, setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      num: 3,
      cleardata: null
    };
  },
  created() {
    this.cleardata = setInterval(() => {
      if (this.num == 0) {
        this.$router.push("/home");
      } else {
        this.num--;
      }
    }, 1000);
  },
  beforeDestroy() {
    //销毁数据与方法
    clearInterval(this.cleardata);
  }
};
</script>

<style lang="scss">
.gg {
  img {
    display: block;
  }
  h1 {
    text-align: center;
  }
}
</style>
