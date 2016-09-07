<template>
  <div>
    <!-- <index-view></index-view> -->
    <router-view></router-view>
    <tabbar></tabbar>
    <loading></loading>
  </div>
</template>

<script>
  import Tabbar from 'common-components/tabbar';
  import Loading from 'common-components/loading';

  import Vue from 'vue';
  import Resource from 'vue-resource';
  Vue.use(Resource);

  export default {
    data(){
      return {
        
      }
    },
    ready(){
      let _this = this;
      this.$broadcast('showLoading',true);
      this.$http.get('/static/data/datas.json').then((response) => {
        console.log(response);
        _this.$route.router.go({name: 'index'});
        _this.$broadcast('showLoading',false);
      },(response) => {
        console.log('请求失败!');
      });
        
    },
    components: { Tabbar,Loading }
  }
</script>

<style lang="scss">
  @import '~vux/dist/vux.css';
  @import '/static/iconfont.css';

  div,section,a,span,h1,h2,h3,h4{box-sizing: border-box;}
  .weui_mask_transparent{
    z-index: 999999 !important;
  }
</style>
