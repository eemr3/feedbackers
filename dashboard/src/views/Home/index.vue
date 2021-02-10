<template>
	<custon-header @create-account="handleAccountCreate" @login="handleLogin" />
	<contact />
	<footer class="flex justify-center py-10 bg-brand-gray">
		<p class="font-medium text-center text-gray-700">feedbacker &copy;</p>
	</footer>
</template>

<script>
	import { onMounted } from 'vue'
	import { useRouter } from 'vue-router'

	import CustonHeader from './CustonHeader'
	import Contact from './Contact'
	import useModal from '../../hooks/useModal'

	export default {
		components: {
			CustonHeader,
			Contact,
		},
		setup() {
			const router = useRouter()
			const modal = useModal()

			onMounted(() => {
				const token = window.localStorage.getItem('token')
				if (token) {
					router.push({ name: 'Feedbacks' })
				}
			})

			function handleLogin() {
				modal.open({
					component: 'ModalLogin',
				})
			}

			function handleAccountCreate() {
				modal.open({
					component: 'ModalCreateAccount',
				})
			}

			return {
				handleLogin,
				handleAccountCreate,
			}
		},
	}
</script>
