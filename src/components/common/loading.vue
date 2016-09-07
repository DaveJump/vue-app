<template>
	<section>
		<loading :show="show" :text="loading"></loading>
	</section>
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