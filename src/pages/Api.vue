<template>
  <div class="Api">
    <section class="img-use">
      <img src="../assets/home-banner.png">
    </section>
    <section class="tabs-contents">
      <div class="api-list-content">
        <Apilist />
      </div>
    </section>
  </div>
</template>

<script>
import Apilist from '@/components/api/Apilist'
export default {
  name: 'Api',
  data() {
    return {
      activeName: 'first',
      msg: 'Welcome to Your Home'
    }
  },
  methods: {
    handleClick: function() {
      console.log('handleClick')
    }
  },
  components: {
    Apilist
  }
}
</script>
<style lang="less" src="@/less/common.less"></style>
<style lang="less" scoped>
.img-use {
  width: 100%;
  img {
    width: 100%;
    margin-bottom: -4px;
  }
}
section.tabs-contents {
  .api-list-content {
    display: flex;
    justify-content: center;
  }
  /deep/.el-tabs {
    .el-tabs__nav-scroll{
      display: flex;
      justify-content: center;
      .el-tabs__nav {
        border: none;
        .el-tabs__item {
          padding: 0 50px

        }
      }
    }
    .el-tabs__item.is-active {
      border-bottom: transparent!important;
      color: #dd3730;
      -webkit-box-shadow: 0 0 4px 0 rgba(92,92,92,.57);
      box-shadow: 0 0 4px 0 rgba(92,92,92,.57);
    }
  }
}
</style>

