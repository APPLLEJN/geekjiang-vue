<template>
  <div id="editor">
    <div class="editorWrapper">
      <input v-model="title" @keyup="onKeyup | debounce 500">
      <textarea v-model="article" @keyup="onKeyup | debounce 500"></textarea>
    </div>
    <div class="editorWrapper">
      <div v-html="titleHtml"></div>
      <div v-html="articleHtml"></div>
    </div>
    <my-button type="button" class="pure-button pure-button-primary" v-on:click="save" context="save"></my-button>
  </div>
</template>
<script>
  import '../../assets/scss/editor'
  var marked = require('marked')
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  })
  export default {
    replace: false,
    data () {
      return {
        title: '# title',
        article: '# Hello World!',
        titleHtml: marked('# title'),
        articleHtml: marked('# Hello World!')
      }
    },
    methods: {
      onKeyup (input) {
        const self = this
        self.articleHtml = marked(self.article)
        self.titleHtml = marked(self.title)
      },
      save () {
        let self = this
        if (!self.article || !self.title) return
        this.$http.post('/api/article', {article: self.articleHtml, title: self.titleHtml}, {emulateJSON: false, emulateHTTP: true}).then(function (response) {
            // success callback
          self.$route.router.go({name: 'list'})
        }, function (response) {
            // error callback
        })
      }
    },
    components: {
      'my-button': require('../common/button.vue')
    }
  }
</script>
