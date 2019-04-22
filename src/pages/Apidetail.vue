<template>
  <div class="hello">
    <section class="main-content">
      <div class="content">
        <div class="main-tittle">
          <span>NC 通用服务</span>
        </div>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="API 详情" name="first">
            <Apilist />
          </el-tab-pane>
          <el-tab-pane label="错误码参照" name="second">
            <Errorcode />
          </el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </div>
</template>
<script>
import Apilist from '@/components/apidetail/Apilist'
import Errorcode from '@/components/apidetail/Errorcode'
export default {
  name: 'Apidetail',
  data() {
    return {
      data: [],
      activeName: 'first'
    }
  },
  methods: {
  },
  components: {
    Apilist,
    Errorcode
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main-content {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .content {
    width: 1200px;
    border: 1px solid #f3f3f3;
    padding: 0 15px;
    .main-tittle {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      span {
        font-size: 20px;
        letter-spacing: .5px;
        font-weight: bolder;
        color: rgb(55, 72, 153)
      }
    }
    /deep/.el-tabs {
      .el-tabs__header {
        border-bottom: none;
        margin: 0;
        .el-tabs__nav {
          border: none;
          .el-tabs__content {
            border: 1px solid #E4E7ED;
          }
          .el-tabs__item {
            border: none;
            color: #4F4F4F;
            transition: none;
          }
          .el-tabs__item:hover {
            color: #4F4F4F;
          }
          .el-tabs__item.is-active {
            color: #fff;
            border: 1px solid #374899;
            background-color: #374899;
          }
        }
      }
      .el-tabs__content {
        border: 1px solid #E4E7ED;
        .el-tab-pane {
          padding: 30px 15px;
        }
      }
    }
  }
}
</style>
