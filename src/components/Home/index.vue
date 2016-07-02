<template>
  <div id="editor">
    <textarea v-model="input" @keyup="onKeyup | debounce 500"></textarea>
    <div v-html="html"></div>
  </div>
</template>
<script>
  var marked = require('marked')
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
  });
  export default {
    replace: false,
    data () {
      return {
        input: '# Hello World!',
        html: marked('# Hello World!')
      }
    },
    methods: {
      onKeyup(input) {
        const self = this
        self.html = marked(self.input)
      }
    }
  }
</script>
<style>
  html, body, #editor {
    margin: 0;
    height: 100%;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    color: #333;
  }

  textarea, #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
    background-color: #f6f6f6;
    font-size: 14px;
    font-family: 'Monaco', courier, monospace;
    padding: 20px;
  }

  code {
    color: #f66;
  }
</style>
