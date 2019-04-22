<template>
  <div class="Apilist">
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :render-content="renderContent"
    ></el-tree>
    <Apimd></Apimd>
  </div>
</template>

<script>
import Apimd from './Apimd'
export default {
  name: 'Apilist',
  data() {
    return {
      data: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    this.getmdfile()
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    renderContent(h, { node, data, store }) {
      return (
        <span>
          {!node.expanded ? <span class="icon iconfont icon-icon_file"></span> : <span class="icon iconfont icon-icon_workfile_line"></span>}
          <span>
            <span>{node.label}</span>
          </span>
        </span>
      )
    },
    getmdfile: function() {
      this.$axios('http://127.0.0.1:3000/use/md').then((res) => {
        console.log(res.data)
      })
    }
  },
  components: {
    Apimd
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
