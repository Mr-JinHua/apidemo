<template>
  <header class="header">
    <div class="api-icon" @click="returnHome">NCCloud 开放管理平台</div>
    <div class="api-tab">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="routerSelect">
<<<<<<< HEAD
        <!-- <el-submenu index="1">
          <template slot="title">API管理</template>
          <el-menu-item index="11">API 浏览</el-menu-item>
          <el-menu-item index="12">API 维护</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="11">API 浏览</el-menu-item>
        <el-menu-item index="12">API 维护</el-menu-item>
=======
        <el-submenu index="1">
          <template slot="title">API管理</template>
          <el-menu-item index="11">API 浏览</el-menu-item>
          <el-menu-item index="12">API 维护</el-menu-item>
        </el-submenu>
>>>>>>> f576dc4ffeea8ddbbe164140a1107a78b7e3b7d5
        <el-submenu index="2">
          <template slot="title">第三方应用管理</template>
          <el-menu-item index="21">添加</el-menu-item>
          <el-menu-item index="22">查询</el-menu-item>
          <el-menu-item index="23">详细</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">日志管理</el-menu-item>
      </el-menu>
    </div>
  </header>
</template>

<script>
export default {
  name: 'ApiHeader',
  data() {
    return {
      activeIndex: '3',
      router: {
        11: '/apidetail/apimd',
        12: '/apidetail/write',
        21: '/process/add',
        22: '/process/query',
        23: '/process/detail',
        3: '/log'
      }
    }
  },
  methods: {
    routerSelect(key) {
      let turnRoute = this.router
      this.$router.push(turnRoute[key])
    },
    returnHome() {
      this.$router.push('/api')
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@tab-height: 50px;
@cred: #e14c46;

.api-common {
  vertical-align: bottom;
  display: inline-block;
}
.api-icon {
  background: @cred;
  color: white;
  padding: 0 20px;
  height: @tab-height;
  line-height: @tab-height;
  font-size: 18px;
  font-weight: bolder;
  cursor: pointer;
  &:extend(.api-common);
}
.item-common {
  height: @tab-height;
  line-height: @tab-height;
  padding: 0 20px;
}
.api-tab {
  padding-left: 30px;
  &:extend(.api-common);
  /deep/ul.el-menu {
    border: none;
    .el-menu-item {
      &:extend(.item-common);
    }
    .el-submenu,.is-active {
      border-color: @cred;
      .el-submenu__title {
        &:extend(.item-common);
        border-color: @cred;
      }
    }
  }
}
/deep/.el-menu--popup {
  .is-active {
    color: @cred;
  }
}
</style>
