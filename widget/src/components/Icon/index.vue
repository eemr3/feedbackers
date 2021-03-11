<template>
	<component :is="name" v-bind="$props" />
</template>

<script>
	import ArrowBack from './ArrowBack.vue'
	import Atention from './Atention.vue'
	import Chat from './Chat.vue'
	import Check from './Check.vue'
	import ChevronDown from './ChevronDown.vue'
	import Close from './Close.vue'
	import Copy from './Copy.vue'
	import Loading from './Loading.vue'

	export default {
		components: {
			ArrowBack,
			Atention,
			Chat,
			Check,
			ChevronDown,
			Close,
			Copy,
			Loading,
		},
		props: {
			name: { type: String, required: true },
		},
	}
</script>
