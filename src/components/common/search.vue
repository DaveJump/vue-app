<template>
	<div>
		<search :cancel-text="cancel"></search>
	</div>
</template>

<script>
	import { Search } from 'vux/src/components';

	export default {
		components: { Search }
	}
</script>

<style lang="scss">
  .weui_search_bar{
    background: #fff !important;
  }
  .weui_search_inner,.weui_search_outer{
    border-radius: 3px !important;
  }
  .weui_search_text,.weui_search_inner{
    background: #EFEFEF !important;
  }
  .weui_search_bar:after,.weui_search_bar:before{
    border: none !important;
  }
  // .search-mask{
  // 	display: none;
  // 	background: rgba(0,0,0,6);
  // 	position: fixed;
  // 	top: 44px;
  // 	right: 0;
  // 	bottom: 0;
  // 	left: 0;
  // 	z-index: 99999;
  // }
</style>