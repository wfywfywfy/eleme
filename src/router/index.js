import Vue from 'vue'
import Router from 'vue-router'

import login from '@/pages/login'
import home from '@/pages/home'
import homeIn from '@/pages/homeIn'
import found from '@/pages/found'
import order from '@/pages/order'
import user from '@/pages/user'
import dianCanIn from '@/pages/dianCanIn'
import dianCan from '@/pages/dianCan'
import pingjia from '@/pages/pingjia'
import shangjia from '@/pages/shangjia'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },


    {
      path: '/dianCanIn',
      name: 'dianCanIn',
      component: dianCanIn,
      children: [{
          path: '/dianCan',
          name: 'dianCan',
          component: dianCan
        },
        {
          path: '/pingjia',
          name: 'pingjia',
          component: pingjia
        },
        {
          path: '/shangjia',
          name: 'shangjia',
          component: shangjia
        },
      ]
    },

    {
      path: '/home',
      name: 'home',
      redirect: '/homeIn',
      component: home,
      children: [{
          path: '/homeIn',
          name: 'homeIn',
          component: homeIn
        },
        {
          path: '/found',
          name: 'found',
          component: found
        },
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/user',
          name: 'user',
          component: user
        },

      ]
    },
    {
      path: '/address',
      name: 'address',
      component: () => import('@/pages/address')
    }

  ]
})
