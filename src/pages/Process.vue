<template>
  <div class="process">
    <Apibg :tittle="'第三方应用管理'">
      <div><router-view /></div>
    </Apibg>
  </div>
</template>

<script>
import Apibg from '@/common/coms/Apibg'

export default {
  name: 'Process',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
  },
  components: {
    Apibg
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
