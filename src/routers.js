'use strict'

export default function (router) {
  router.map({
    '/': {
      component: function (resolve) {
        require(['./components/Login'], resolve)
      }
    },
    '/list': {
      name: 'list',
      component: function (resolve) {
        require(['./components/List'], resolve)
      }
    },
    '/editor': {
      name: 'editor',
      component: function (resolve) {
        require(['./components/Editor'], resolve)
      }
    }
  })
}
