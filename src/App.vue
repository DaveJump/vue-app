<template>
  <div>
    <router-view></router-view>
    <loading></loading>
    <toast></toast>
  </div>
</template>

<script>
  import Loading from 'common-components/loading';
  import Toast from 'common-components/loading';

  export default {
    events: {
      showLoading(show){
        this.$broadcast('showLoading',show);
      },
      setToastInfo(info){
        this.$broadcast('setToastInfo',info);
      }
    },
    components: { Loading,Toast }
  }
</script>

<style lang="scss">
  @import '~vux/dist/vux.css';
  @import '/static/iconfont.css';

  div,section,a,span,h1,h2,h3,h4{box-sizing: border-box;}
  ul{list-style: none;}

  .weui_mask_transparent{
    background: rgba(0,0,0,.3);
    z-index: 99999 !important;
  }
  .weui_toast{
    z-index: 999999 !important;
  }
</style>
