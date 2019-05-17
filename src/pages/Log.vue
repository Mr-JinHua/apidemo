<template>
  <div class="log">
    <Apibg :tittle="'日志管理'">
      <div>
        <div>
          <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item label="应用名称：">
              <el-select placeholder="应用名称" v-model="form.name">
                <el-option label="名称一" value="shanghai"></el-option>
                <el-option label="名称二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动名称" v-model="form.date">
              <el-input></el-input>
            </el-form-item>
            <el-button>查询</el-button>
          </el-form>
        </div>
        <div>
          <Mytree></Mytree>
          <my-table v-bind:config="tableConfig" deal="true"></my-table>
        </div>
      </div>
    </Apibg>
  </div>
</template>
<script>
import Apibg from '@/common/coms/Apibg'
import { MyTable, Mytree } from 'base'

export default {
  name: 'Log',
  data() {
    return {
      columnname: 'jfkdfjkfl',
      form: {
        name: '',
        date: ''
      },
      tableConfig: {
        header: [
          {
            id: 'name',
            label: '名字',
            width: 150
          },
          {
            id: 'appid',
            label: 'APP ID',
            width: 150
          },
          {
            id: 'appsecret',
            label: 'APP Secret',
            width: 150
          },
          {
            id: 'NCCnum',
            label: 'NCC用户编码',
            width: 150
          }
        ],
        data: [{
          name: '钉钉',
          appid: 'XXX-XXX-XXX',
          appsecret: '21313',
          NCCnum: '34343',
          operation: '修改 删除'
        }],
        meth: {
          edit: function(index, row) {
            console.log(index, row, 'edit')
          },
          delete: function(index, row) {
            console.log(index, row, 'delete')
          }
        }
      }
    }
  },
  beforeDestroy() {
  },
  components: {
    Apibg,
    'my-table': MyTable,
    Mytree
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.el-button {
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
}
</style>
