import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Login from '@/components/login/login'
import Register from '@/components/register/register'
import Header from '@/components/base/header/header'
import Footer from '@/components/base/footer/footer'
import Book from '@/components/book/book'
import Music from '@/components/music/music'
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
        {
            path: '/footer',
            name: 'footer',
            component: Footer
        },
        {
            path: '/book',
            name: 'book',
            component: Book
        },
        {
            path: '/music',
            name: 'music',
            component: Music
        },

		{ path: '*', redirect: { name: "home" } }
	]
})
