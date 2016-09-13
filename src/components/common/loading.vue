<template>
	<div>
		<loading :show="show" text="Loading"></loading>
	</div>
</template>

<script>
	import { Loading } from 'vux/src/components';

	export default{
		data(){
			return {
				show: false
			}
		},
		events: {
			showLoading(show){
				this.show = show;
			}
		},
		components: { Loading }
	}
</script>