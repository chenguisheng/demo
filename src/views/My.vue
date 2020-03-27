<template>
  <div>
    <div class="userbox">
      <div style="height:.2rem"></div>
      <div class="imgbox">
        <van-image
          width="100%"
          height="100%"
          fit="cover"
          src="http://127.0.0.1:3000/img/huiyuan1.jpg"
        />
      </div>

      <div class="namebox">
        <router-link v-if="!flag" to="/login">
          <p>登录/注册</p>
        </router-link>
        <p v-if="flag">{{ username }}</p>
      </div>
    </div>

    <van-row class="user-links">
      <van-col span="12">
        <van-icon name="pending-payment" @click="isLogin('/order')" />
        待付款
      </van-col>
      <van-col span="12">
        <van-icon name="logistics" />
        待收货
      </van-col>
    </van-row>

    <van-cell-group class="user-group" @click="isLogin('/myorder')">
      <van-cell icon="records" title="我的订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell
        icon="location-o"
        title="我的地址"
        is-link
        @click="isLogin('/address')"
      />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="退出登录" is-link @click="outlogin" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      flag: false
    };
  },
  methods: {
    outlogin() {
      sessionStorage.Login = JSON.stringify({ login: false });
      this.flag = false;
    },
    isLogin(path) {
      if (sessionStorage.Login == undefined) {
        this.$router.push("/login");
        return;
      }
      if (!JSON.parse(sessionStorage.Login).login) {
        this.$router.push("/login");
      } else {
        this.$router.push(path);
      }
    }
  },
  created() {
    this.username = sessionStorage.username;
    if (sessionStorage.user != undefined) {
      this.flag = JSON.parse(sessionStorage.Login).login;
    } else {
      this.flag = false;
    }
  }
};
</script>

<style lang="scss">
.user {
  // &-poster {
  //     display: block;
  //     border-radius: 10%;
  // }

  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
.userbox {
  background-color: #f37d0f;
  .imgbox {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  .namebox {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    a {
      text-decoration: none;
      p {
        color: #fff;
      }
    }
    p {
      color: #fff;
    }
  }
}
</style>
