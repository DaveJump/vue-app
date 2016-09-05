<template>
	<loading :show="show" :text="text1"></loading>
</template>

<script>
	import { Loading } from 'vux/src/components';

	export default{
		data(){
			return {
				show: true
			}
		},
		components: { Loading }
	}
</script>