<template>
  <div class="MyTable">
    <el-table :data="data" border style="width: 100%">
      <template v-for="(item, index) in header">
        <el-table-column :key="index" :prop="item.id" :label="item.label"></el-table-column>
      </template>
      <el-table-column label="操作" v-if="deal">
        <template slot-scope="scope">
          <el-button
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
          <el-button
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MyTable',
  props: {
    config: Object,
    deal: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    header: function() {
      return this.config.header
    },
    data: function() {
      return this.config.data
    },
    meth: function() {
      return this.config.meth
    }
  },
  data() {
    return {
    }
  },
  methods: {
    handleEdit(index, row) {
      this.meth.edit(index, row)
    },
    handleDelete(index, row) {
      this.meth.delete(index, row)
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
