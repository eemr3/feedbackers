<template>
	<teleport to="body">
		<component
			@open-box="handleopenBox"
			@close-box="handleColseBox"
			:is="state.component"
		/>
	</teleport>
</template>

<script lang="ts">
	import { defineComponent, reactive, watch } from 'vue'
	import Standby from './Standby.vue'
	import Box from './Box.vue'
	import useIframeControl from '../../hooks/ifram'
	import store from '@/store'

	type State = {
		component: string
	}

	interface SetupReturn {
		state: State
		handleopenBox(): void
		handleColseBox(): void
	}

	export default defineComponent({
		components: { Standby, Box },
		setup(): SetupReturn {
			const iframe = useIframeControl()
			const state = reactive<State>({
				component: 'Standby',
			})

			watch(
				() => store.currentComponent,
				() => {
					iframe.updateCoreValuesOnStore()
				}
			)

			function handleopenBox(): void {
				iframe.notifyOpen()
				state.component = 'Box'
			}

			function handleColseBox(): void {
				iframe.notifyClose()
				state.component = 'Standby'
			}
			return {
				state,
				handleColseBox,
				handleopenBox,
			}
		},
	})
</script>
