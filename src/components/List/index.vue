<template>
  <h2>文章列表</h2>
  <div>
      <button class="btn">
          <a v-link="'editor'">新建</a>
      </button>
  </div>
  <div id="list">
    <table>
      <tr>
          <th>序号</th>
          <th>标题</th>
          <th>文章</th>
          <th>创建时间</th>
          <th>操作</th>
      </tr>
      <tr v-for="item in articleList">
        <td v-for="key in columns">
            {{{item[key]}}}
        </td>
        <td>
            <a v-link="'edit'">编辑</a>
            <a>删除</a>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
    import '../../assets/scss/list'
    export default {
      replace: false,
      data () {
        return { articleList: [] }
      },
      route: {
        data () {
          this.$http.get('/api/article/list', {}, {emulateJSON: false, emulateHTTP: true}).then(function (response) {
             // success callback
            this.articleList = response.data
            this.columns = ['_id', 'title', 'article', 'ctime']
          }, function (response) {
             // error callback
              // return { items: response }
          })
        }
      }}
</script>
