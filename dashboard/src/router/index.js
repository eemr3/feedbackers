import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home')
const Feedbacks = () => import('../views/Feedbacks')
const Credencials = () => import('../views/Credancials')
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/feedbacks',
		name: 'Feedbacks',
		component: Feedbacks,
		meta: {
			hasAuth: true,
		},
	},
	{
		path: '/credencials',
		name: 'Credencials',
		component: Credencials,
		meta: {
			hasAuth: true,
		},
	},
	{
		path: '/:pathMatch(.*)*',
		redirect: {
			name: 'Home',
		},
	},
]

const router = createRouter({
	history: createWebHistory('/'),
	routes,
})

export default router
