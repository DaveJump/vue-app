<template>
	<x-header :page-title.sync="headerTitle" :show-back.sync="showBack" :show-more.sync="showMore"></x-header>

	<section class="mine-view" :style="getViewportHeight">
		<section class="account-view" :class="{'tap-active': isTap}" @touchstart="tapHighlight($event)" @touchend="tapHighlight($event)">
			<div class="portrait-left">
				<div class="portrait-box">
					<img src="/static/portrait.jpg">
				</div>
			</div>
			<div class="message-right">
				<h4>Account Name</h4>
				<small>Edit Account Informations</small>
			</div>
		</section>

		<section class="cells-view">
			<group>
			  <cell title="Message" is-link>
			  	<i slot="icon" class="iconfont cell-icon icon-message"></i>
			  </cell>
			</group>

			<group>
			  <cell title="Setting" is-link>
			  	<i slot="icon" class="iconfont cell-icon icon-setting"></i>
			  </cell>
			  <switch title="Night Mode" is-link>
			  	<i slot="icon" class="iconfont cell-icon icon-light" style="font-size: 19px;"></i>
			  </switch>
			</group>

			<group>
			  <cell title="About" is-link>
			  	<i slot="icon" class="iconfont cell-icon icon-info"></i>
			  </cell>
			</group>

			<div class="logout">
				<x-button type="warn" style="font-size: 16px;border-radius: 3px">logout</x-button>
			</div>
		</section>
	</section>
</template>

<script>
	import XHeader from 'common-components/header';
	import { Group,Cell,Switch,XButton } from 'vux/src/components';

	export default {
		data(){
			return {
				hasLogin: false,
				headerTitle: 'Mine',
				showBack: false,
				showMore: false,
				isTap: false
			}
		},
		computed: {
			getViewportHeight(){
				return {
					height: window.innerHeight - 46 + 'px',
					overflow: 'hidden'
				}
			}
		},
		methods: {
			tapHighlight(e){
				e.preventDefault();
				this.isTap = !this.isTap;
				return false;
			}
		},
		components: { XHeader,Group,Cell,Switch,XButton }
	}
</script>

<style lang="scss">
	.weui_cells {
		margin-top: 12px !important;
	}
	.weui_cell_bd,.weui_label{
		font-size: 16px;
	}
	.weui_label{
		display: inline-block;
		margin-left: -6px;
	}
	.vux-header{
		background: #fff !important;
		// box-shadow: 0 0 3px rgba(0,0,0,.1);
		h1{
			height: 35px !important;
			line-height: 35px !important;
		}
	}
	.vux-header .vux-header-title, .vux-header h1{
		color: #666 !important;
	}


	.mine-view{
		background: #F3F3F3;
		padding-top: 46px;
	}
	
	.account-view.tap-active{
		background: #EEEEEE;
	}
	.account-view{
		padding: 10px 5px;
		background: #fff;
		margin-top: 6px;
		height: 86px;
		box-shadow: 0 0 1px rgba(0,0,0,.1);
		position: relative;

		&:after{
	    content: " ";
	    display: block;
	    -webkit-transform: rotate(45deg);
	    transform: rotate(45deg);
	    height: 6px;
	    width: 6px;
      border-width: 2px 2px 0 0;
	    border-color: #C8C8CD;
	    border-style: solid;
	    position: absolute;
	    margin-top: -3px;
	    top: 50%;
	    right: 16px;
		}

		@at-root{
			.portrait-left{
				display: table;
				float: left;
				width: 26%;
				height: 64px;

				.portrait-box{
					display: table-cell;
					text-align: center;
					height: 64px;

					img{
						width: 64px;
						height: 64px;
						border-radius: 50%;
						vertical-align: middle;
						border: 1px solid #ddd;
					}
				}
			}
			.message-right{
				padding-top: 10px;
				float: left;

				h4{
					color: #666;
					font: {
						size: 16px;
						weight: normal;
					}
				}
				small{
					font: {
						size: 12px;
					}
					color: #888;
				}
			}
		}
	}
	.cell-icon{
		font-size: 18px;
		margin-right: 10px;
		line-height: 18px;
		color: #999;
	}
	.logout{
		margin: 15px 0;
		padding: 10px;
	}
</style>