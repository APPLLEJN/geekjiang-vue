<template>
  <button type="button" class="pure-button pure-button-primary">{{context}}</button>
</template>
<script>
    export default {
      replace: true,
      props: [
        {name: 'context', type: String}
      ]
    }
</script>
