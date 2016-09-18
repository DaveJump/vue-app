<template>
	<section class="tabbar-section">
	  <tabbar>
	    <tabbar-item v-for="baritem in baritems" @click="changeCurrent($index)" :link="baritem.link">
	      <i slot="icon" class="iconfont" :class="baritem.iconName" :style="baritem.style" v-show="baritem.status.normal"></i>
	      <i slot="icon" class="iconfont" :class="baritem.iconName" style="color: #09BB07" :style="baritem.style" v-show="baritem.status.current"></i>
	      <span slot="label" :class="{'current-bar-label': baritem.status.current}">{{baritem.text}}</span>
	    </tabbar-item>
	  </tabbar>
	</section>
</template>

<script>
	import { Tabbar,TabbarItem } from 'vux/src/components';

	export default {
		data(){
			return {
				baritems: [
					{
						iconName: 'icon-home',
						text: '首页',
						style: {
							width: '26px',
							height: '26px',
							margin: '-1px 0 0 -1px'
						},
						status: {
							normal: false,
							current: true
						},
						link: '/index/all'
					},
					{
						iconName: 'icon-latest',
						text: '最新',
						status: {
							normal: true,
							current: false
						},
						style: {
							fontSize: '22px',
							lineHeight: '28px'
						},
						link: '/'
					},
					{
						iconName: 'icon-explore',
						text: '发现',
						status: {
							normal: true,
							current: false
						},
						style: {
							fontSize: '22px',
							lineHeight: '24px'
						},
						link: '/'
					},
					{
						iconName: 'icon-mine',
						text: '我的',
						style: {
							fontSize: '23px',
							lineHeight: '28px'
						},
						status: {
							normal: true,
							current: false
						},
						link: '/mine'
					}
				]
			}
		},
		methods: {
			changeCurrent(index){
				this.baritems.forEach((each,idx) => {
					if(idx === index){
						this.baritems[index].status.normal = false;
						this.baritems[index].status.current = true;
					}else{
						this.baritems[idx].status.normal = true;
						this.baritems[idx].status.current = false;
					}
				});
			}
		},
		components: { Tabbar,TabbarItem }
	}
</script>

<style>
	.tabbar-section{
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		height: 54px;
		background: #fff;
	}
	.current-bar-label{
		color: #09BB07;
	}
	.weui_tabbar_icon{
		text-align: center;
		line-height: 24px;
	}
	.icon-font.icon-current{
		color: #09BB07;
	}
	.weui_tabbar_item{
		padding: 3px 0 !important;
	}
</style>