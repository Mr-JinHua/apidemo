<template>
  <div class="query">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="num"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="应用名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="appid"
        label="APP ID">
      </el-table-column>
      <el-table-column
        prop="appsecret"
        label="APP Secret">
      </el-table-column>
      <el-table-column
        prop="NCCnum"
        label="NCC用户编码">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Processquery',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [{
        num: 1,
        name: '钉钉',
        appid: 'XXX-XXX-XXX',
        appsecret: '21313',
        NCCnum: '34343',
        operation: '修改 删除'
      }]
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
