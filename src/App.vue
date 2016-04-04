<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <div class="pure-g">
      <div class="pure-u-1-3"></div>
      <div class="pure-u-1-3">
        <hello></hello>
      </div>
      <div class="pure-u-1-3"></div>
    </div>

  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  margin-top: -100px;
  width: 1200px;
  font-family: Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
