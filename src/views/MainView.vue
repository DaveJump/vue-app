<template>
	<div class="main-view" transition="stretchOutLeft">
		<router-view></router-view>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import Tabbar from 'common-components/tabbar';
  import { actions } from 'my-vuex/actions';
  import { getters } from 'my-vuex/getters';

  export default {
    ready(){
      this.goIndex();
    },
    vuex: {
      getters: {
        searchKey: getters.getSearchKey
      },
      actions: {
        updateArtList: actions.updateArtList,
        showLoading: actions.showLoading,
        setToastInfo: actions.setToastInfo
      }
    },
    computed: {
      getViewportHeight(){
        return {
          height: window.innerHeight + 'px'
        }
      }
    },
    methods: {
      goIndex(){
        this.$route.router.go({path: '/index/all'});
      }
    },
    components: { Tabbar }
  }
</script>

<style lang="scss">
	.main-view{
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
	}
	.stretchOutLeft-transition{
    transition: transform .5s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .stretchOutLeft-enter,
  .stretchOutLeft-leave{
    transform: translate3d(-50%,0,0);
  }
</style>