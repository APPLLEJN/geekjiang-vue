<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form class="pure-form pure-form-aligned">
      <fieldset>
          <div class="pure-control-group">
              <label for="name">Username</label>
              <input id="name" type="text" placeholder="Username" v-model=userName>
          </div>
          <div class="pure-control-group">
              <label for="password">Password</label>
              <input id="password" type="password" placeholder="Password" v-model=passWord>
          </div>
      </fieldset>
      <button type="button" class="pure-button pure-button-primary" v-on:click="login">Submit</button>
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
      msg: 'Hello World!'
    }
  },
  methods: {
    login (userName, passWord) {
      let self = this
      if (!self.passWord) return
      if (!self.userName) return
      console.log(self.passWord, self.userName)
      // 方法内 `this` 指向 vm
      // alert('Hello ' + this.name + '!')
      // // `event` 是原生 DOM 事件
      // alert(event.target.tagName)
    }
  }
}
</script>
