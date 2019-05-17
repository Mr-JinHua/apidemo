<template>
  <div class="write">
    <div @click="newnow">newnow</div>
    <div>{{shazi}}</div>
    <div>{{tiancai}}</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

var mixin = {
  created: function() {
    console.log('混入对象的钩子被调用')
  },
  methods: {
    jinadd() {
      console.log('jinadd')
    }
  }
}

export default {
  name: 'Write',
  mixins: [mixin],
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      coms: 'jin hua'
    }
  },
  created() {
    console.log('name')
  },
  computed: mapState({
    shazi: 'id',
    tiancai: 'name'
  }),
  methods: {
  },
  mounted() {
    console.log(this.$store.state.id)
    this.jinadd()
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped></style>
