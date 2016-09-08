<template>
	<panel type="1" :list="list"></panel>
</template>

<script>
	import { Panel } from 'vux/src/components';
	import { getters } from 'my-vuex/getters';

	export default {
		vuex: {
			getters: {
				list: getters.getFrontEndData
			}
		},
		components: { Panel }
	}
</script>

<style>
	
</style>