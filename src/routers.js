'use strict'

export default function (router) {
  router.map({
    '/': {
      component: function (resolve) {
        require(['./components/Login'], resolve)
      }
    },
    '/home': {
      name: 'home',
      component: function (resolve) {
        require(['./components/Home'], resolve)
      }
    }
  })
}
