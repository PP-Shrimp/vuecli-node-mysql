<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-input v-model="form.realname" placeholder="请输入realname"></el-input>
    <el-input v-model="form.phone" placeholder="请输入phone"></el-input>
    <el-button type="primary" @click="submit">提交</el-button>
    <el-input v-model="form2.phone" placeholder="请输入phone"></el-input>
    <el-button type="primary" @click="submit2">提交</el-button>
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
      },
      form2: {
        phone: ""
      }
    };
  },
  methods: {
    submit() {
      const url = "/api/login";
      const _this = this;
      _this.$http.post(url, _this.form).then(
        res => {
          res = res.body;
          if (res.code) {
            let a = res.data.tip ? res.data.tip : "登陆成功";
            alert(a);
          } else {
            alert(res.msg);
          }
        },
        err => {
          console.log(err);
        }
      );
    },
    submit2() {
      const url = "/api/query";
      const _this = this;
      _this.$http.get(url, _this.form2).then(
        res => {
          res = res.body;
          if (res.code) {
            let a = res.data.tip ? res.data.tip : "登陆成功";
            alert(a);
          } else {
            alert(res.msg);
          }
        },
        err => {
          console.log(err);
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
