import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	searchKey: {
		page : 1,
		limit : 20,
		tab : 'all'
	},
	artlist: [],
	showLoading: false,
	toast: {
		show: false,
		text: '',
		type: '',
		time: 2000
	}
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
	},
	SHOWLOADING(state,show){
		state.showLoading = show;
	},
	SETTOASTINFO(state,info){
		state.toast = info;
	}
}

export const store = new Vuex.Store({state,mutations});