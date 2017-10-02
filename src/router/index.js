import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
//import Apple from '@/components/Apple'
import Index from '@/pages/index'

Vue.use(Router)

export default new Router({
	mode: 'history',
    routes: [
		{
		  path: '/',
		  component: Index
		}
    ]
})
