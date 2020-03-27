<template>
  <div>
    <div class="registerbox">
      <van-image
        width="100%"
        height="100%"
        fit="cover"
        src="../assets/img/ace5.jpg"
      />
    </div>

    <div class="registername">
      <h4>黑米账号注册</h4>
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

    <div class="registerbtn">
      <el-button class="btn1" type="success" @click="register">
        立即注册
      </el-button>
      <el-button class="btn2" type="success" @click="$router.push('/login')">
        返回登陆
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
    register() {
      if (this.username == "" || this.password == "") {
        console.log("请输入用户名密码");
      } else {
        if (sessionStorage.user != undefined) {
          var arr = JSON.parse(sessionStorage.user);
          var index = arr.findIndex(val => {
            return val.username == this.username;
          });
          if (index == "-1") {
            arr.push({ username: this.username, password: this.password });
            sessionStorage.setItem("user", JSON.stringify(arr));
            console.log("注册成功");
            this.$router.push("/login");
          } else {
            console.log(arr[index]);
            console.log("用户名重复, 请重新输入");
          }
        } else {
          // eslint-disable-next-line no-redeclare
          var arr = [];
          arr.push({ username: this.username, password: this.password });
          sessionStorage.setItem("user", JSON.stringify(arr));
          console.log("注册成功");
          this.$router.push("/login");
        }
      }
    }
  }
};
</script>

<style lang="scss">
.registerbox {
  width: 1.6rem;
  height: 1.6rem;
  overflow: hidden;
  margin: 0.8rem auto 0.4rem;
}
.registername {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
}
.registerbtn {
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
