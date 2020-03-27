<template>
  <div class="caregory-nav">
    <ul>
      <li v-for="(item, i) in tabTitle" :key="i" @click="num = i">
        <span :class="{ active: num == i }">{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      tabTitle: ["新品", "手机", "智能", "笔记本", "电视", "家电"]
    };
  },
  methods: {
    changenum() {
      this.num = this.$store.state.num;
    }
  },
  watch: {
    "this.$store.state.num": function() {
      this.num = this.$store.state.num;
      console.log(this.num + this.num);
    }
  }
};
</script>

<style lang="scss">
.caregory-nav {
  width: 100%;
  background-color: #fefefe;
  ul {
    width: 100%;
    li {
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      color: #3c3c3c;
      font-size: 0.26rem;
      text-align: center;
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
</style>
