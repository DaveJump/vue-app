<template>
	<div>
		<x-header :header-title.sync="articleInfo.author" :show-back.sync="headerConfig.showBack" :show-more.sync="headerConfig.showMore"></x-header>

		<div class="article-main">
			<h2>{{articleInfo.title}}</h1>
			<span></span>
		</div>
	</div>
</template>

<script>
	import XHeader from 'common-components/header';

	export default {
		data(){
			return {
				headerConfig: {
					showBack: true,
					showMore: true
				},
				articleInfo: {
					author: 'DaveLee',
					title: 'articleTitle',
				}
			}
		},
		components: { XHeader }
	}
</script>

<style lang="scss">
	$header-color: #666;
	.vux-header{
		background: #F8F8F8;
		box-shadow: 0 0 4px rgba(0,0,0,.2);
	}
	.vux-header-back,.vux-header-title{
		color: $header-color !important;
		font:{
			size: 14px !important;
		}
	}
	.vux-header .vux-header-left .vux-header-back{
		&:before{
			border: 1px solid $header-color !important;
			border-width: 1px 0 0 1px !important;
		}
	}
	.vux-header-more{
		color: $header-color !important;
	}

	.article-main{
		padding: 60px 15px 0 15px;
		h2{
			font: {
				weight: normal;
			}
		}
	}
</style>