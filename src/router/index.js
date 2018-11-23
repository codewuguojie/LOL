import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import Header from '@/components/base/header/header'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/home',
			name: 'home',
			component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/header',
            name: 'header',
            component: Header
        },

		{ path: '*', redirect: { name: "home" } }
	]
})
