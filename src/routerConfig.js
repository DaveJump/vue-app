export default (router) => router.map({
	'/index': {
		name: 'index',
		component: require('components/IndexView'),
		subRoutes: {
			'/front_end': {
				name: 'front_end',
				component: require('components/ListFrontEnd')
			},
			'/back_end': {
				name: 'back_end',
				component: require('components/ListBackEnd')
			},
			'/design': {
				name: 'design',
				component: require('components/ListDesign')
			},
			'/product': {
				name: 'product',
				component: require('components/ListProduct')
			}
		}
	},
	'/mine': {
		name: 'mine',
		component: require('components/MineView')
	}
});