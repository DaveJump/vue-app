export const getters = {
	getSearchKey(state){
		return state.searchKey;
	},
	getArtList(state){
		return state.artlist;
	},
	showLoading(state){
		return state.showLoading;
	},
	showToast(state){
		return state.toast;
	}
}