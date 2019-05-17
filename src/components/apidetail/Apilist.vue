<template>
  <div class="Apilist">
    <div class="apilist-left">
      <el-tree
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :render-content="renderContent"
      ></el-tree>
    </div>
    <div class="apilist-right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Apimd from './Apimd'
export default {
  name: 'Apilist',
  data() {
    return {
      data: [
        {
        label: '一级 1',
<<<<<<< HEAD
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
=======
        children: [
          {
            label: '二级 1-1',
            children: [
              {
                label: 'san级 1-1',
              }
            ]
          }
        ]
        },
        {
        label: '一级 2',
        children: [
          {
            label: '二级 2-1'
          },
          {
            label: '二级 2-2'
          }
        ]
>>>>>>> f576dc4ffeea8ddbbe164140a1107a78b7e3b7d5
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
    this.eventbus.$on('jinemit', (data) => {
      console.log(data)
    })
    this.getmdfile()
  },
  methods: {
    newemit() {
    },
    handleNodeClick(data) {
      console.log(data)
    },
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
<style lang="less" src="@/less/common.less"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@cred: #e14c46;
.Apilist {
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
