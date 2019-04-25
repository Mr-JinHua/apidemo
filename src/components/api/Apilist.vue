<template>
  <div class="apilist" ref="apilist">
    <Apiitem />
    <Apiitem />
    <Apiitem />
    <Apiitem />
    <Apiitem />
    <div class="apilist-item-hidden"></div>
    <div class="apilist-item-hidden"></div>
    <div class="apilist-item-hidden"></div>
  </div>
</template>

<script>
import Apiitem from '@/components/api/apiitem'
export default {
  name: 'Apilist',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
  },
  components: {
    Apiitem
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.apilist {
  width: 1200px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 30px;
}
.apilist-item-hidden {
  margin-top: 20px;
  width: 260px;
  height: 280px;
}

</style>
