<template>
  <div>
    <van-nav-bar
      title="登陆"
      left-arrow
      left-text="返回"
      @click-left="$router.push('/my')"
    >
    </van-nav-bar>

    <div class="loginbox">
      <van-image
        width="100%"
        height="100%"
        fit="cover"
        src="../assets/img/huiyuan1.jpg"
      />
    </div>

    <div class="loginname">
      <h4>黑米账号登录</h4>
    </div>

    <div>
      <van-cell-group>
        <el-input
          placeholder="请输入用户名"
          v-model="username"
          maxlength="11"
          minlength="11"
        >
        </el-input>

        <el-input placeholder="请输入密码" v-model="password" show-password>
        </el-input>
      </van-cell-group>
    </div>

    <div class="loginbtn">
      <el-button class="btn1" type="success" @click="login">立即登录</el-button>
      <el-button class="btn2" type="success" @click="$router.push('/register')">
        注册
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.username == "" || this.password == "") {
        console.log("请输入用户名密码");
      } else {
        if (sessionStorage.user != undefined) {
          var arr = JSON.parse(sessionStorage.user);
          var index = arr.findIndex(val => {
            return (
              val.username == this.username && val.password == this.password
            );
          });
          if (index != "-1") {
            this.$router.push("/my");
            sessionStorage.setItem("username", arr[index].username);
            sessionStorage.setItem("Login", JSON.stringify({ login: true }));
          } else {
            console.log("你还没有注册");
          }
        } else {
          console.log("你还没有注册");
        }
      }
    }
  }
};
</script>

<style lang="scss">
.loginbox {
  width: 1.6rem;
  height: 1.6rem;
  overflow: hidden;
  margin: 0.4rem auto;
}
.loginname {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
}
.loginbtn {
  width: 80%;
  margin: 0 auto;
  .btn1 {
    width: 100%;
    background-color: #ff6700;
  }
  .btn2 {
    width: 100%;
    margin-top: 0.2rem;
    margin-left: 0;
  }
}
</style>
