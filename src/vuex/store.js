import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
	list: [
		{
			type: 'front_end',
			list: []
		},
		{
			type: 'back_end',
			list: []
		},
		{
			type: 'design',
			list: []
		},
		{
			type: 'product',
			list: []
		}
	]
}

const mutations = {
	LOADLISTDATA(state,type,list){
		state.list.forEach((li,idx) => {
			if(li.type === type){
				li.list = list[type];
			}
		});
	}
}

export const store = new Vuex.Store({state,mutations});