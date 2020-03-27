<template>
  <div class="CaregoreMobile">
    <div>
      <img src="http://127.0.0.1:3000/img/mobile.png" alt="" width="100%" />
    </div>

    <div class="title">
      <span>小米数字系列</span>
    </div>

    <div class="mobile clearfix">
      <div v-for="(item, i) in xiaomi" :key="i">
        <img :src="item.img" alt="" />
        <div class="span">{{ item.text }}</div>
      </div>
    </div>

    <div class="title">
      <span>红米系列</span>
    </div>

    <div class="mobile clearfix">
      <div v-for="(item, i) in redmi" :key="i">
        <img :src="item.img" alt="" />
        <div class="span">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      xiaomi: [
        {
          img: "http://127.0.0.1:3000/img/小米10pro.png",
          text: "小米10Pro"
        },
        {
          img: "http://127.0.0.1:3000/img/小米10.png",
          text: "小米10"
        },
        {
          img: "http://127.0.0.1:3000/img/小米9pro.png",
          text: "小米9Pro 5G"
        },
        {
          img: "http://127.0.0.1:3000/img/小米cc9pro.png",
          text: "小米cc9pro"
        },
        {
          img: "http://127.0.0.1:3000/img/小米cc9.png",
          text: "小米cc9"
        },
        {
          img: "http://127.0.0.1:3000/img/小米cc9ee.png",
          text: "小米cc9ee"
        },
        {
          img: "http://127.0.0.1:3000/img/小米CC9 美图版.png",
          text: "小米CC9 美图版"
        }
      ],
      redmi: [
        {
          img: "http://127.0.0.1:3000/img/K30 Pro 变焦版.png",
          text: "K30 Pro 变焦版"
        },
        {
          img: "http://127.0.0.1:3000/img/K30 Pro.png",
          text: "K30 Pro"
        },
        {
          img: "http://127.0.0.1:3000/img/Redmi K30 5G.png",
          text: "Redmi K30 5G"
        },
        {
          img: "http://127.0.0.1:3000/img/Redmi K30 4G.png",
          text: "Redmi K30 4G"
        },
        {
          img: "http://127.0.0.1:3000/img/Redmi Note 8 Pro.png",
          text: "Redmi Note 8 Pro"
        },
        {
          img: "http://127.0.0.1:3000/img/Redmi Note 8.png",
          text: "Redmi Note 8"
        },
        {
          img: "http://127.0.0.1:3000/img/小米MIX Alpha.png",
          text: "小米MIX Alpha"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.CaregoreMobile {
  .title {
    width: 100%;
    text-align: center;
    span {
      font-size: 0.28rem;
      font-weight: 400;
      line-height: 1.28rem;
    }
  }
  .mobile {
    width: 100%;
    div {
      width: 33%;
      margin-top: 0.2rem;
      margin-bottom: 0.3rem;
      text-align: center;
      overflow: hidden;
      float: left;
      img {
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 auto;
      }
      div.span {
        width: 100%;
        margin-top: 0.28rem;
        font-size: 0.23rem;
        color: rgba(0, 0, 0, 0.54);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
