<template>
	<panel type="1" :list="list"></panel>
</template>

<script>
	import { Panel } from 'vux/src/components';

	export default {
		data(){
			return {
				list: []
			}
		},
		components: { Panel }
	}
</script>

<style>
	
</style>