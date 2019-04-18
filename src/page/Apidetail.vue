<template>
  <div class="hello">
    <div>apidetail</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Apidetail',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
