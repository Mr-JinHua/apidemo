<template>
  <div class="log">
    <Apibg :tittle="'日志管理'">
      <div>log</div>
    </Apibg>
  </div>
</template>
<script>
import Apibg from '@/common/coms/Apibg'

export default {
  name: 'Log',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeDestroy() {
  },
  components: {
    Apibg
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
