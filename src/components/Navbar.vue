<template>
  <div>
    <div>
      <van-nav-bar
        :title="$route.name"
        :left-arrow="leftArrow"
        @click-left="onClickLeft"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftArrow: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    }
  },
  created() {
    console.log(this.$route.path);
    if (this.$route.path == "/xq" || this.$route.path == "/car") {
      this.leftArrow = true;
    }
  }
};
</script>
