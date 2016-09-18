<template>
	<div>
		<loading :show="show" text="Loading"></loading>
	</div>
</template>

<script>
	import { Loading } from 'vux/src/components';
	import { getters } from 'my-vuex/getters';

	export default{
		vuex: {
			getters: {
				show: getters.showLoading
			}
		},
		components: { Loading }
	}
</script>