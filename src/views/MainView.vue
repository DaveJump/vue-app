<template>
	<div>
		<router-view></router-view>
		<tabbar></tabbar>
	</div>
</template>

<script>
	import Tabbar from 'common-components/tabbar';

  import { store } from 'my-vuex/store';
  import { actions } from 'my-vuex/actions';
  import { getters } from 'my-vuex/getters';

  export default {
    ready(){
      this.getFirstDatas();
    },
    store,
    vuex: {
      getters: {
        searchKey: getters.getSearchKey
      },
      actions: {
        updateArtList: actions.updateArtList
      }
    },
    methods: {
      getFirstDatas(){
        let _this = this;
        this.$dispatch('showLoading',true);
        this.$http.get('https://cnodejs.org/api/v1/topics',{
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          },
          emulateJSON: true,
          params: this.searchKey
        }).then((response) => {
          _this.$route.router.go({path: '/index/all'});
          _this.$dispatch('showLoading',false);
          _this.updateArtList(response.data['data']);
        },(response) => {
          console.log('请求失败!');
          _this.$dispatch('showLoading',false);
          _this.$dispatch('setToastInfo',{
            show: true,
            text: '网络开小差啦!',
            type: 'warn',
            time: 2000
          });
        });
      }
    },
    components: { Tabbar }
  }
</script>