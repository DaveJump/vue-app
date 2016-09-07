<template>
	<section class="page-section">
		<flexbox>
		  <flexbox-item><div class="page-btn">PREVIOUS</div></flexbox-item>
		  <flexbox-item><div class="page-info">Page 2 of 10</div></flexbox-item>
		  <flexbox-item><div class="page-btn">NEXT</div></flexbox-item>
		</flexbox>
	</section>
</template>

<script>
	import { Flexbox,FlexboxItem } from 'vux/src/components';

	export default {
		components: { Flexbox,FlexboxItem }
	}
</script>

<style lang="scss">
	%page-font-style{
		font-size: 12px;
		text-align: center;
		line-height: 35px;
		height: 35px;
		color: #777;
	} 
	
	.page-section{
		margin-top: 10px;
	}
	.page-btn{
		border: 1px solid #ccc;
		@extend %page-font-style;
		padding: 0 10px;
		margin: 0 auto;
		border-radius: 3px;
		
		@at-root{
			.page-info{
				@extend %page-font-style;
			}
		}
	}

</style>