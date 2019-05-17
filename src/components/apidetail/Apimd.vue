<template>
  <div class="apimd">
    <div id="content"></div>
  </div>
</template>

<script>
import marked from 'marked'

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
      this.$axios.post('http://10.4.112.32:1112/opm/apimanager/showdoc.do', {
        path: '/aim/equip/md/equip.md'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'CharacterEncoding': 'utf-8'
        }
      }).then((res) => {
        // console.log(res.data, 'axios')
        document.getElementById('content').innerHTML = marked(res.data)
      })
    }
  },
  components: {
  }
}

</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/deep/#content {
  pre {
    padding: 16px;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    background-color: #f6f8fa;
    border-radius: 3px;
    color: #6a737d;
  }
  h1, h2, h3, h4, h5, h6 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eaecef;
    margin-top: 24px;
    margin-bottom: 16px;
    font-weight: 600;
    line-height: 1.25;
  }
  h1 {
    font-size: 2.25em;
  }
  h2 {
    font-size: 1.75em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.25em;
  }
  h5 {
    font-size: 1em;
  }
  h6 {
    font-size: 1em;
  }
  table {
    width: auto;
    display: table;
    margin-top: 0;
    margin-bottom: 16px;
    border-spacing: 0;
    border-collapse: collapse;
    tr {
      background-color: #fff;
      border-top: 1px solid #c6cbd1;
      td, th {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }
    }
    tr:nth-child(2n) {
      background-color: #f6f8fa;
    }
  }
}
</style>
