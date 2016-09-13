export const actions = {
	updateArtList({dispatch},list){
		dispatch('LOADLISTDATA',list);
	},
	loadMoreArtList({dispatch},list){
		dispatch('LOADMOREARTLIST',list);
	},
	changeSearchKey({dispatch},reg,callback){
		dispatch('CHANGESEARCHKEY',reg,callback);
	},
	changePage({dispatch},reg,callback){
		dispatch('CHANGEPAGE',reg,callback);
	}
}