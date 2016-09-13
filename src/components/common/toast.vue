<template>
	<div>
		<toast :show="toast.show" :type="toast.type" :time="toast.time">{{toast.text}}</toast>
	</div>
</template>

<script>
	import { Toast } from 'vux/src/components';

	export default{
		data(){
			return {
				toast: {
					show: false,
					text: '',
					type: '',
					time: 2000
				}
			}
		},
		events: {
			setToastInfo(info){
				this.toast = info;
				window.setTimeout(() => {
					this.toast.show = false;
				},this.toast.time);
			}
		},
		components: { Toast }
	}
</script>

<style lang="scss">
	.weui_toast_content{
		font:{
			size: 14px;
		};
		margin-top: 5px;
	}
</style>