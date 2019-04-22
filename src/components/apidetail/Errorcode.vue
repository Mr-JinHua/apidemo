<template>
  <div class="errorcode">
    <table class="api_table" border="0" cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th width="20">&nbsp;</th>
          <th width="200">错误码</th>
          <th>说明</th>
          <th>错误信息</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G001</td>
            <td class="text">配置文件错误</td>
            <td class="text">Config error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G002</td>
            <td class="text">数据库初始化错误</td>
            <td class="text">DataBase initialized error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G003</td>
            <td class="text">redis操作错误</td>
            <td class="text">Redis initialized error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G004</td>
            <td class="text">验证token出错</td>
            <td class="text">Verify permission error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G005</td>
            <td class="text">获取表单对照信息出错</td>
            <td class="text">Fetch the information of bill-exchange error</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G006</td>
            <td class="text">获取api信息出错</td>
            <td class="text">Fetch the information of outerapi error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G007</td>
            <td class="text">调用NC服务出错</td>
            <td class="text">Call nc service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G008</td>
            <td class="text">解析NC视图查询condition条件出错</td>
            <td class="text">Analysis the condition information of NC tableview error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G009</td>
            <td class="text">根据用户上送条件生成新sql出错</td>
            <td class="text">Create new sql with the specific condition information error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G010</td>
            <td class="text">版本号非法</td>
            <td class="text">The version number is illegal.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G011</td>
            <td class="text">内部调用API出错</td>
            <td class="text">Gateway caught error when calling api internally.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G012</td>
            <td class="text">内部调用eventbus服务出错</td>
            <td class="text">Gateway caught error when calling eventbus service internally.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G013</td>
            <td class="text">断路器验证失败，服务暂时不可用</td>
            <td class="text">This service is temporarily unavailable, try again later.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G014</td>
            <td class="text">查询应用信息失败</td>
            <td class="text">Fetch the information of app error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G015</td>
            <td class="text">查询应用信息失败</td>
            <td class="text">Fetch the information of app error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G016</td>
            <td class="text">查询erp配置信息失败</td>
            <td class="text">Fetch the information of erp error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G017</td>
            <td class="text">从excel模板导入outerapi失败</td>
            <td class="text">Import outer api from excel templete error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G100</td>
            <td class="text">NC通用服务调用出错</td>
            <td class="text">Call nc common service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G101</td>
            <td class="text">NC视图查询服务调用出错</td>
            <td class="text">Call nc tableview service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G102</td>
            <td class="text">NC附件服务调用出错</td>
            <td class="text">Call nc attachment service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G103</td>
            <td class="text">NC Webservice服务调用出错</td>
            <td class="text">Call nc webserivce service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G104</td>
            <td class="text">内部http服务调用出错</td>
            <td class="text">Call inner http service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G105</td>
            <td class="text">NC自定义服务调用出错</td>
            <td class="text">Call nc custom service error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G110</td>
            <td class="text">上送请求参数错误</td>
            <td class="text">Input param error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G111</td>
            <td class="text">token无效</td>
            <td class="text">Accesstoken is invalid.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G112</td>
            <td class="text">事件消息派发出错</td>
            <td class="text">Event message disparch error.</td>
        </tr>
        <tr>
            <td>&nbsp;</td>
            <td class="url">G113</td>
            <td class="text">获取事件消息出错</td>
            <td class="text">Event message fetch error.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G404</td>
          <td class="text">未知的Http请求</td>
          <td class="text">404 NOT FOUND.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G703</td>
          <td class="text">请求超时</td>
          <td class="text">Request time out.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G704</td>
          <td class="text">连接被拒绝</td>
          <td class="text">Connection refused.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G705</td>
          <td class="text">执行vochange失败</td>
          <td class="text">process vochange error.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G706</td>
          <td class="text">查询VoChangeDetailPO列表失败</td>
          <td class="text">process vochange error.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G707</td>
          <td class="text">外部交换平台服务调用出错</td>
          <td class="text">Call XExchange service error.</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td class="url">G999</td>
          <td class="text">未知错误</td>
          <td class="text">Unknown exception.</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Errorcode',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" src="@/less/common.less" scoped></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.errorcode {
  table {
    border: 1px solid #f2f2f2;
    th {
      text-align: left;
      border-bottom: 1px solid #f2f2f2;
      font-weight: 400;
      color: #555;
      background: #fbfbfb;
      height: 34px;
      font-size: 13px;
      line-height: 34px;
    }
    td {
      line-height: 20px;
      padding: 5px 0;
      font-size: 13px;
      border-bottom: 1px solid #f2f2f2;
    }
  }
}
</style>
