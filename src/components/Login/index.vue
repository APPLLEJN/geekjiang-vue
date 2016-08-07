<template>
    <img class="logo" src="../../assets/images/logo.png">
    <div class="pure-g">
      <div class="pure-u-1-3"></div>
      <div class="pure-u-1-3">
        <hello></hello>
      </div>
      <div class="pure-u-1-3"></div>
    </div>
</template>

<script>
export default {
  components: {
    'hello': require('./Hello.vue')
  }
}
</script>
