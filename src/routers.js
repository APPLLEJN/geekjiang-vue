'use strict'

export default function(router){
    router.map({
        '/':{				//首页
            component: function(resolve){
                require(['./components/App.vue'],resolve);
            }
        },
        '/home':{
  				  name: 'home',
            component: function(resolve){
                require(['./components/Home.vue'],resolve);
            }
        },
    })
}
