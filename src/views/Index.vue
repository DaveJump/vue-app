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
	      <tab-item v-for="topbar in topbarlist" :selected="topbar.selected" style="position: relative" @click="changeTopBar($index)">
	        <a v-link="{name: topbar.linkname}">{{topbar.title}}</a>
	      </tab-item>
	    </tab>
	  </section>

	  <!-- <scroller :lock-x="true" :scrollbar-y="true" :use-pulldown="true" :use-pullup="true"> -->
	    <div class="list-view">
	      <router-view></router-view>
        <div class="loadmore" v-el:loadmore @click="loadMore" v-show="hasMore">
          <span>加载更多</span>
        </div>
	    </div>
	  <!-- </scroller> -->
  </section>
</template>

<script>
  import Search from 'common-components/search';
  import {Tab,TabItem} from 'vux/src/components';

  import { getters } from 'my-vuex/getters';
  import { actions } from 'my-vuex/actions';

  export default {
    data(){
      return {
        currentIndex: 0,
        currentPage: 1,
        topbarlist: [
          {title: '全部', type: 'all',selected: true},
          {title: '精华', type: 'good'},
          {title: '分享', type: 'share'},
          {title: '问答', type: 'ask'},
          {title: '招聘', type: 'job'}
        ],
        hasMore: false
      }
    },
    vuex: {
      getters: {
        searchKey: getters.getSearchKey
      },
      actions: {
        changeSearchKey: actions.changeSearchKey,
        changePage: actions.changePage,
        updateArtList: actions.updateArtList,
        loadMoreArtList: actions.loadMoreArtList
      }
    },
    route: {
      activate(transition){
        this.$els.loadmore.style.display = 'block';
        transition.next();
      }
    },
    methods: {
      changeTopBar(index){
        this.currentPage = 1;
        this.currentIndex = index;

        this.$dispatch('showLoading',true);
        let tab = this.topbarlist[index].type;

        this.changeSearchKey({
          page: this.currentPage,
          limit: 12,
          tab: tab
        },this.request.bind(this,this.currentIndex));
      },
      loadMore(){
        this.$dispatch('showLoading',true);
        this.currentPage ++;

        this.changePage({
          page: this.currentPage,
          limit: 12,
          tab: this.topbarlist[this.currentIndex].type
        },this.request.bind(this,this.currentIndex));
      },
      request(index){
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          emulateJSON: true,
          params: this.searchKey
        }).then((response) => {
          if(this.searchKey.page > 1){
            this.loadMoreArtList(response.data['data']);
          }else{
            this.updateArtList(response.data['data']);
          }
          this.$route.router.go({path: '/index/'+ this.topbarlist[index].type +''});
          this.$dispatch('showLoading',false);
        },(response) => {
          console.log('请求失败!');
          this.$dispatch('showLoading',false);
          this.$dispatch('setToastInfo',{
            show: true,
            text: '网络开小差啦!',
            type: 'warn',
            time: 2000
          });
        });
      }
    },
  	components: { Tab,TabItem,Search }
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
  .loadmore{
    padding: 20px 0;
    font: {
      weight: 500;
      size: 14px;
    };
    color: #666;
    text-align: center;
  }
</style>