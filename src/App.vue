<template>
  <div>
    <router-view></router-view>
    <tabbar></tabbar>
    <loading></loading>
  </div>
</template>

<script>
  import Tabbar from 'common-components/tabbar';
  import Loading from 'common-components/loading';

  import { store } from 'my-vuex/store';
  import { actions } from 'my-vuex/actions';

  export default {
    ready(){
      this.getFirstDatas();
    },
    store,
    vuex: {
      actions: {
        loadlistdata: actions.loadlistdata
      }
    },
    methods: {
      getFirstDatas(){
        let _this = this;

        this.$broadcast('showLoading',true);
        this.$http.get('/static/data/datas.json',{
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          emulateJSON: true
        }).then((response) => {
          _this.$route.router.go({path: '/index/front_end'});
          _this.$broadcast('showLoading',false);
          _this.loadlistdata('front_end',response.data);
        },(response) => {
          console.log('请求失败!');
        });
      }
    },
    events: {
      showLoading(show){
        this.$broadcast('showLoading',show);
      }
    },
    components: { Tabbar,Loading }
  }
</script>

<style lang="scss">
  @import '~vux/dist/vux.css';
  @import '/static/iconfont.css';

  div,section,a,span,h1,h2,h3,h4{box-sizing: border-box;}
  .weui_mask_transparent{
    background: rgba(0,0,0,.3);
    z-index: 99999 !important;
  }
  .weui_toast{
    z-index: 999999 !important;
  }
</style>
