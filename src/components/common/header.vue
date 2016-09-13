<template>
	<section>
		<x-header :style="headerfixed" :left-options.sync="leftOptions" :right-options.sync="rightOptions">
			{{headerTitle}}
		</x-header>
	</section>
</template>

<script>
	import { XHeader } from 'vux/src/components';

	export default {
		props: ['headerTitle','showBack','showMore'],
		computed: {
			headerfixed(){
				return {
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0
				}
			},
			leftOptions(){
				return {
					preventGoBack: true,
					showBack: this.showBack,
					backText: 'Back'
				}
			},
			rightOptions(){
        return {
          showMore: this.showMore
        }
	    }
		},
		components: { XHeader }
	}
</script>