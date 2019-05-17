<template>
  <div id="app">
    <api-header />
    <router-view/>
  </div>
</template>

<script>
import ApiHeader from '@/components/ApiHeader'

export default {
  name: 'App',
  components: {
    ApiHeader
  }
}
</script>

<style lang="less" src="@/less/common.less" scoped></style>
