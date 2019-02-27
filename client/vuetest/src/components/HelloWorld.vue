<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input v-model="form.realname" placeholder="请输入realname"></el-input>
    <el-input v-model="form.phone" placeholder="请输入phone"></el-input>
    <el-button type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      form: {
        realname: "",
        phone: ""
      }
    };
  },
  methods: {
    submit() {
      console.log(this.loginData);
      const url = "/api/login";
      const _this = this;
      this.$http.post(url, _this.form, {}).then(
        function(data) {
          console.log("请求成攻！ ", data.body);
          let content = data.body;
          if (content.length != 0) {
            alert("登录成功！");
          } else {
            alert("账户密码错误！");
          }
        },
        function(response) {
          console.log(response);
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
