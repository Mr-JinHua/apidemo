<template>
  <div class="home">
    <div class="main">
      <router-link to="/apidetail/apimd" class="item">服务管理</router-link>
      <router-link to="/apidetail/apimd" class="item">路由管理</router-link>
      <router-link to="/apidetail/apimd" class="item">过滤器管理</router-link>
      <router-link to="/api" class="item">API接口管理</router-link>
      <router-link to="/apidetail/apimd" class="item">第三方应用管理</router-link>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.home {
  color: black;
  .header {
    text-align: left;
    font-size: 25px;
  }
  .main {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .item {
      font-size: 13px;
      width: 160px;
      height: 100px;
      border: 1px solid black;
      text-align: center;
      line-height: 100px;
      margin-top: 20px;
    }
  }
}
</style>
