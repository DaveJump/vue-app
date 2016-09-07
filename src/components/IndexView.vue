<template>
	<section class="index-view">
	  <section class="sticky-top">
	    <div class="top-tools">
	      <div class="seach-box">
	        <search></search>
	      </div>
	      <div class="more">
	        <a href="#" class="more-btn"></a>
	      </div>
	    </div>
	    <tab :line-width=2 class="router-btn">
	      <tab-item selected style="position: relative">
	        <a v-link="{path: '/front_end'}">前端</a>
	      </tab-item>
	      <tab-item style="position: relative">
	        <a v-link="{path: '/back_end'}">后端</a>
	      </tab-item>
	      <tab-item style="position: relative">
	        <a v-link="{path: '/design'}">设计</a>
	      </tab-item>
	      <tab-item style="position: relative">
	        <a v-link="{path: '/product'}">产品</a>
	      </tab-item>
	    </tab>
	  </section>

	  <scroller :lock-x="true" :scrollbar-y="true" :use-pulldown="true" :use-pullup="true">
	    <div class="list-view">
	      <router-view></router-view>
	    </div>
	  </scroller>
  </section>
</template>

<script>
  import Search from 'common-components/search';
  import {Tab,TabItem,Scroller} from 'vux/src/components';

  export default {
  	components: { Tab,TabItem,Search,Scroller }
  }
</script>

<style lang="scss">
	.xs-plugin-pulldown-up,.xs-plugin-pulldown-down,.xs-plugin-pulldown-loading{
    top: 28px !important;
  }
  .xs-plugin-pullup-down,.xs-plugin-pullup-up,.xs-plugin-pullup-loading{
    bottom: 0px !important;
  }

	.sticky-top{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
  }
  .router-btn{
    a{
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      color: #888;
    }
  }
  .vux-tab-selected{
    a{
      color: #04C002;
    }
  }
  .index-view{
    // display: none;
  }
  .list-view{
    padding: 88px 0 55px 0;
  }
  .top-tools{
    background: #fff;
    &:after{
      content: '';
      clear: both;
      display: block;
    }
  }
  .seach-box,.more{
    float: left;
  }
  .seach-box{
    width: 88%;
  }
  .more{
    width: 12%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    padding: 0 5px 0 0;
    .more-btn{
      color: #888;
      &:after{
        content: "\2022 \2022 \2022 ";
        font-size: 16px;
      }
    }
  }
</style>