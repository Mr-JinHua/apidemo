<template>
  <div class="apimd">
    ddjj
  </div>
</template>

<script>

export default {
  name: 'Apimd',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    this.getmdfile()
  },
  methods: {
    getmdfile: function() {
      this.$axios('http://127.0.0.1:3000/use/md').then((res) => {
        console.log(res.data)
      })
    }
  },
  components: {
  }
}

</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
