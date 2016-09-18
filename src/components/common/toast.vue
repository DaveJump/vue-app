<template>
	<div>
		<toast :show="getToast.show" :type="getToast.type" :time="getToast.time">{{getToast.text}}</toast>
	</div>
</template>

<script>
	import { Toast } from 'vux/src/components';
	import { getters } from 'my-vuex/getters';
	import { actions } from 'my-vuex/actions';

	export default{
		vuex: {
			getters: {
				toast: getters.toast
			},
			actions: {
				setToastInfo: actions.setToastInfo
			}
		},
		computed: {
			getToast(){
				window.setTimeout(() => {
					this.setToastInfo({show: false});
				},this.toast.time);
				return this.toast;
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