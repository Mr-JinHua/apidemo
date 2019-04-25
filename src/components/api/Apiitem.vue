<template>
  <div class="apiitem" @click="toPage">
    <div class="header">
      <img src="@/assets/home/api.png" alt="">
    </div>
    <h3>员工中心员工主职查询</h3>
    <p>员工中心员工主职查询</p>
    <div class="api-trybtn">数据订阅</div>
  </div>
</template>

<script>
export default {
  name: 'Apiitem',
  props: {
    href: {
      type: String,
      default: '/apidetail/apimd'
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toPage() {
      this.$router.push(this.href)
    }
  }
}

</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.apiitem {
  position: relative;
  margin-top: 20px;
  width: 260px;
  height: 280px;
  background: #fff;
  -webkit-box-shadow: 0 1px 6px 0 hsla(0,0%,52%,.5);
  box-shadow: 0 1px 6px 0 hsla(0,0%,52%,.5);
  &:hover {
    -webkit-box-shadow: 0 1px 8px 0 hsla(0, 0%, 52%, .8);
    box-shadow: 0 1px 8px 0 hsla(0, 0%, 52%, .8);
  }
  .header {
    padding-top: 15px;
    background: #f7f7f7;
    padding-bottom: 10px;
    min-height: 100px;
    img {
      max-width: 70%;
      margin: 0 auto;
      width: auto;
      height: 70px;
      display: block;
    }
  }
  &>h3 {
    margin-bottom: 7px;
    margin-top: 15px;
    font-size: 14px;
    font-weight: 600;
    color: #434a54;
    text-align: center;
  }
  &>p {
    text-align: center;
    font-size: 12px;
    color: #a5a5a5;
    letter-spacing: 0;
    margin: 0;
    margin-top: 8px;
    white-space: inherit;
    text-overflow: ellipsis;
    margin-bottom: 5px;
    padding-right: 0;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
    width: 90%;
    padding-left: 20px;
    height: 38px;
    line-height: 20px;
  }
  .api-trybtn {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    border-top: 1px solid #ededed;
    line-height: 40px;
    color: #008bfa;
    font-size: 13px;
    text-align: center;
  }
}
</style>
