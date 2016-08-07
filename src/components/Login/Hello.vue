<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="pure-form pure-form-aligned">
      <fieldset>
          <div class="pure-control-group">
              <label for="name">Username</label>
              <input id="name" type="text" placeholder="Username" v-model="userName">
          </div>
          <div class="pure-control-group">
              <label for="password">Password</label>
              <input id="password" type="password" placeholder="Password" v-model="passWord">
          </div>
      </fieldset>
      <my-button type="button" class="pure-button pure-button-primary" v-on:click="login" context="submit"></my-button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      userName: '',
      passWord: ''
    }
  },
  methods: {
    login (userName, passWord) {
      let self = this
      if (!self.passWord) return
      if (!self.userName) return
      this.$http.post('/api/login', {userName: self.userName, passWord: self.passWord}, {emulateJSON: false, emulateHTTP: true}).then(function (response) {
          // success callback
        self.$route.router.go({name: 'list'})
      }, function (response) {
          // error callback
      })
    }
  },
  components: {
    'hello': require('./Hello.vue'),
    'my-button': require('../common/button.vue')
  }
}
</script>
