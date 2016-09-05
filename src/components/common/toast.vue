<template>
	<div>
		<toast :show="showToast" :type="toastType" :time="toastTime">操作成功</toast>
	</div>
</template>

<script>
	import { Toast } from 'vux/src/components';

	export default{
		data(){
			return {
				showToast: false,
				toastType: 'success',
				toastTime: 2000
			}
		},
		events: {
			showToast(show){
				this.showToast = show;
			},
			toastChange(type){
				this.toastType = type;
			},
			toastTime(time){
				this.toastTime = time;
			}
		},
		components: { Toast }
	}
</script>