<template>
  <div class="detail">
    <el-tree
      :data="data"
      :props="defaultProps"
      @node-click="handleNodeClick"
      :render-content="renderContent"
    ></el-tree>
    <div>
      <el-tree
        :data="data"
        show-checkbox
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
      ></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Processdetail',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
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
    renderContent(h, { node, data, store }) {
      console.log(node)
      return (
        <span>
          {!node.childNodes.length ? <span class="api-use-img" /> : (!node.expanded ? <span class="icon iconfont icon-icon_file"></span> : <span class="icon iconfont icon-icon_workfile_line"></span>)}
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
<style lang="less" scoped>
@cred: #e14c46;
.detail {
  display: flex;
  .apilist-left {
    border-right: 1px solid #f3f3f3;
    min-height: 800px;
    padding-right: 15px;
    width: 220px;
    box-sizing: border-box;
  }
  .apilist-right {
    padding-left: 15px;
    flex: auto;
  }
  /deep/.el-tree {
    .el-tree-node__expand-icon {
      font-size: 20px;
      color: #25aef5;
    }
    .el-tree-node__expand-icon::before {
      border: none;
    }
    .el-tree-node__expand-icon.is-leaf {
      visibility: hidden;
    }
    .icon-icon_workfile_line {
      color: #FFAA33;
    }
    .icon-icon_file {
      color: #FFAA33;
    }
    .api-use-img {
      width: 20px;
      height: 14px;
      display: inline-block;
      background: url('../../assets/apidetail/api.png') 0 0 no-repeat;
    }
    .is-current {
      color: @cred;
    }
  }
}
</style>
