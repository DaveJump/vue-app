<template>
	<div>
		<x-header :style="headerfixed" :left-options="leftOptions" :right-options="rightOptions">
			{{pageTitle}}
		</x-header>
	</div>
</template>

<script>
	import { XHeader } from 'vux/src/components';

	export default {
		data(){
			return {
				pageTitle: 'PAGE TITLE'
			}
		},
		computed: {
			headerfixed(){
				return {
					position: 'absolute',
					top: 0,
					left: 0,
					right: 0
				}
			},
			leftOptions(){
				return {
					preventGoBack: true,
					showBack: true,
					backText:'Back'
				}
			},
			rightOptions(){
        return {
          showMore: true
        }
	    }
		},
		components: { XHeader }
	}
</script>