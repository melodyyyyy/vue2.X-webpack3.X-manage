import Vue from 'vue'
import Router from 'vue-router'
import login from  '../components/login.vue'
import home from  '../components/home.vue'
import readme from  '../components/readme.vue'
import basetable from '../components/basetable.vue'
import vuetable from '../components/vuetable.vue'
import baseform from '../components/baseform.vue'
import vueeditor from '../components/vueeditor.vue'
import upload from '../components/upload.vue'
import echarts from '../components/echarts.vue'
import map from '../components/map.vue'
Vue.use(Router)

export default new Router({
  routes: [
     {//重定向
         path: '/',
         redirect: '/login'
     },
  	{//首页
         path: '/login',
         component: login
    },
    {
         path: '/readme',
         component: home,
            children:[
                {
                    path: '/',
                    component: readme
                },{
                    path: '/basetable',
                    component: basetable
                },{
                    path: '/vuetable',
                    component: vuetable
                },{
                    path: '/baseform',
                    component: baseform
                },{
                    path: '/vueeditor',
                    component: vueeditor
                },{
                    path: '/upload',
                    component: upload
                },{
                    path: '/echarts',
                    component: echarts
                },{
                    path: '/map',
                    component: map
                }                                                      
          ]
     },
  ]
})
