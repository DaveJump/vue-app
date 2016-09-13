import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	searchKey: {
		page : 1,
		limit : 12,
		tab : 'all'
	},
	artlist: []
}

const mutations = {
	LOADLISTDATA(state,list){
		state.artlist = list;
	},
	LOADMOREARTLIST(state,list){
		state.artlist = state.artlist.concat(list);
	},
	CHANGESEARCHKEY(state,reg,callback){
		state.searchKey = reg;
		callback && callback();
	},
	CHANGEPAGE(state,reg,callback){
		state.searchKey = reg;
		callback && callback();
	}
}

export const store = new Vuex.Store({state,mutations});