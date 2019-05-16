<template>
  <div class="Apibg">
    <section class="main-content">
      <div class="content">
        <div class="main-tittle">
          <span>{{tittle}}</span>
        </div>
        <slot></slot>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Apibg',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props: [
    'tittle'
  ],
  computed: {
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main-content {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .content {
    width: 1200px;
    border: 1px solid #f3f3f3;
    padding: 0 15px;
    .main-tittle {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      span {
        font-size: 20px;
        letter-spacing: .5px;
        font-weight: bolder;
        color: rgb(55, 72, 153)
      }
    }
  }
}
</style>
