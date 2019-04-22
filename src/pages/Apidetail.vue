<template>
  <div class="hello">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" :render-content="renderContent"></el-tree>
  </div>
</template>

<script>
export default {
  name: 'Apidetail',
  data () {
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
  methods: {
    handleNodeClick (data) {
      console.log(data)
    },
    renderContent (h, { node, data, store }) {
      console.log(node)
      return (
        <span>
          {!node.expanded ? <span class="icon iconfont icon-icon_file"></span> : <span class="icon iconfont icon-icon_workfile_line"></span>}
          <span>
            <span>{node.label}</span>
          </span>
        </span>
      )
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
