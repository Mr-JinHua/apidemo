<template>
  <div class="hello">
    <section class="main-content">
      <div class="content">
        <el-tabs type="card">
          <el-tab-pane label="API 详情" name="first">
            <Apilist />
          </el-tab-pane>
          <el-tab-pane label="错误码参照" name="second">
            <Errorcode />
          </el-tab-pane>
          <el-tab-pane label="服务与支持" name="third">服务与支持</el-tab-pane>
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
      data: []
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
  margin-top: 20px;
  .content {
    width: 1200px;
    border: 1px solid #f3f3f3;
    padding: 0 15px;
    /deep/.el-tabs__nav {
      border: none;
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
}
</style>
