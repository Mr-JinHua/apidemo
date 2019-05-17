<template>
  <div class="add">
    <el-form :model="ruleForm" :label-position="'left'" ref="ruleForm" label-width="120px" class="demo-form-inline">
      <div class="my-form-style">
        <el-form-item label="应用名称" prop="appName">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="APP ID" prop="appId">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="APP Secret：" prop="appId">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="NCC用户编码：" prop="appId">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="租户ID：" prop="appId">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="第三方用户ID：" prop="appId">
          <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Processadd',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      ruleForm: {
        appName: '',
        appId: ''
      }
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.add {
  margin: 20px 0;
  .el-input {
    width: 240px;
  }
  .my-form-style {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 10px;
    }
  }
}
</style>
