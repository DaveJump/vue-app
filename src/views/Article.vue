<template>
	<section class="article-view" transition="stretchInLeft">
		<div :style="getViewportHeight">
			<x-header :header-title.sync="articleInfo.author.loginname" :show-back.sync="headerConfig.showBack" :show-more.sync="headerConfig.showMore"></x-header>

			<div class="article-main" v-cloak>
				<h3>{{articleInfo.title}}</h3>
				<small>{{articleInfo.create_at | getDateTime}}</small>&nbsp;
				<small>{{articleInfo.author.loginname}}</small>&nbsp;
				<small>{{articleInfo.tab | TabTextTransfer}}</small>&nbsp;
				<small>{{articleInfo.reply_count}}/{{articleInfo.visit_count}}</small>
				<div class="art-content">
					<div class="inner-art" v-el:content></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import XHeader from 'common-components/header';
	import { actions } from 'my-vuex/actions';

	export default {
		data(){
			return {
				headerConfig: {
					showBack: true,
					showMore: true
				},
				articleInfo: {
					author: {
						loginname: ''
					},
					title: '',
					tab: '',
					visit_count: '',
					reply_count: '',
					create_at: ''
				}
			}
		},
		vuex: {
			actions: {
				showLoading: actions.showLoading,
				setToastInfo: actions.setToastInfo
			}
		},
		route: {
			deactivate(transition){
				console.log('deactivate')
				this.acticleInfo = {
					author: {
						loginname: ''
					},
					title: '',
					tab: '',
					visit_count: '',
					reply_count: '',
					create_at: ''
				};
				transition.next();
			},
			data(transition){
				let _this = this;
				this.showLoading(true);
				let path = transition.to.path.replace(/\/article\//,'');
				this.$http.get('https://cnodejs.org/api/v1/topic/' + path,{
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          emulateJSON: true
        }).then((response) => {
        	transition.next({
        		articleInfo: response.data['data']
        	});
        	_this.$els.content.innerHTML = response.data['data'].content;
        	_this.showLoading(false);
				},(response) => {
          console.log('请求失败!');
          _this.showLoading(false);
          _this.setToastInfo({
            show: true,
            text: '网络开小差啦!',
            type: 'warn',
            time: 2000
          });
        });
			}
		},
		computed: {
			getViewportHeight(){
				return {
					height: window.innerHeight + 'px'
				}
			}
		},
		filters: {
			TabTextTransfer(text){
				let txt = text;
				switch(txt){
					case 'good':
						txt = '精华';
						break;
					case 'share':
						txt = '分享';
						break;
					case 'ask':
						txt = '问答';
						break;
					case 'job':
						txt = '招聘';
						break;
					default:
						txt = '全部';
				}
				return txt;
			},
			getDateTime(date){
				return new Date(date).toLocaleString();
			}
		},
		components: { XHeader }
	}
</script>

<style lang="scss">
	$header-color: #666;
	[v-cloak]{
		display: none;
	}
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

	.stretchInLeft-transition{
		transition: transform .5s ease-in-out;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}
	.stretchInLeft-enter,
	.stretchInLeft-leave{
		transform: translate3d(100%,0,0);
	}
	
	.article-view{
		box-shadow: 0 0 3px rgba(0,0,0,.3);
		z-index: 88888;
		background: #fff;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
	}
	.article-main{
		position: absolute;
		top: 60px;
		right: 15px;
		left: 15px;
		bottom: 0;
		overflow: auto;
		-webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
		h3{
			line-height: 1.4;
			color: #333;
		}
		small{
			color: #777;
		}
	}
	.art-content{
		margin-top: 5px;
		border-top: 1px solid #ddd;
		font: {
			size: 14px;
		}
		color: #333;
		.inner-art{
			padding: 10px 0;
		}
		ul,ol{
			padding-left: 15px;
		}
		ul{
			list-style: disc;
		}
		h1,h2,h3,h4,h5,h6{
			margin: 20px 0 10px 0;
			border-bottom: 1px solid #ddd;
		}
		img{
			max-width: 100%;
		}
	}
	pre.prettyprint {
		overflow: auto;
		-webkit-overflow-scrolling: touch;
    overflow-scrolling: touch;
    border-radius: 0;
    padding: 8px;
    border: none;
    // margin: 20px -10px;
    margin: 5px 0px;
    border-width: 1px 0;
    background: #f7f7f7;
	}
</style>