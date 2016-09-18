<template>
  <div>
    <router-view keep-alive></router-view>
    <loading></loading>
    <toast></toast>
  </div>
</template>

<script>
  import { store } from 'my-vuex/store';
  import Loading from 'common-components/loading';
  import Toast from 'common-components/loading';

  export default {
    store,
    components: { Loading,Toast }
  }
</script>

<style lang="scss">
  @import '~vux/dist/vux.css';
  @import '/static/iconfont.css';

  div,section,a,span,h1,h2,h3,h4{box-sizing: border-box;}
  ul{list-style: none;}
  code,pre{
    font: {
      size: 14px;
      family: Monaco,Menlo,Consolas,"Courier New",monospace;
    };
  }

  .weui_mask_transparent{
    // background: rgba(0,0,0,.3) !important;
    z-index: 99999 !important;
    background: transparent !important;
    // z-index: 0 !important;
  }
  .weui_toast{
    z-index: 999999 !important;
  }
  
</style>
