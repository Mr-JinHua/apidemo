<template>
  <div class="home">
    <section class="img-use">
      <img src="../assets/home-banner.png">
    </section>
    <section class="tabs-contents">
      <el-tabs type="card" @tab-click="handleClick">
        <el-tab-pane label="API 列表" name="first">API 列表</el-tab-pane>
        <el-tab-pane label="关于 yonyou" name="second">关于 yonyou</el-tab-pane>
        <el-tab-pane label="服务与支持" name="third">服务与支持</el-tab-pane>
      </el-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Welcome to Your Home'
    }
  },
  methods: {
    handleClick: function() {
      console.log('handleClick')
    }
  }
}
</script>
<style lang="less" src="@/less/common.less"></style>
<style lang="less" scoped>
.home .img-use {
  width: 100%;
  img {
    width: 100%;
    margin-bottom: -4px;
  }
}
.home section.tabs-contents {
  /deep/.el-tabs {
    .el-tabs__nav-scroll{
      display: flex;
      justify-content: center;
      .el-tabs__nav {
        border: none;
        .el-tabs__item {
          padding: 0 50px

        }
      }
    }
    .el-tabs__item.is-active {
      border-bottom: transparent!important;
      color: #dd3730;
      -webkit-box-shadow: 0 0 4px 0 rgba(92,92,92,.57);
      box-shadow: 0 0 4px 0 rgba(92,92,92,.57);
    }
  }
}
</style>

