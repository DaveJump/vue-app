export const getters = {
	getFrontEndData(state){
		return state.list[0].list;
	},
	getBackEndData(state){
		return state.list[1].list;
	},
	getDesignData(state){
		return state.list[2].list;
	},
	getProductData(state){
		return state.list[3].list;
	}
}