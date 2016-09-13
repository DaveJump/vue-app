let artlistComponent = require('components/ArtList');
export default (router) => router.map({
	'/': {
		name: 'mainView',
		component: require('views/MainView'),
		subRoutes: {
			'/index': {
				name: 'index',
				component: require('views/Index'),
				subRoutes: {
					'/all': {
						name: 'all',
						component: artlistComponent
					},
					'/good': {
						name: 'good',
						component: artlistComponent
					},
					'/share': {
						name: 'share',
						component: artlistComponent
					},
					'/ask': {
						name: 'ask',
						component: artlistComponent
					},
					'/job': {
						name: 'job',
						component: artlistComponent
					}
				}
			},
			'/mine': {
				name: 'mine',
				component: require('views/Mine')
			}
		}
	},
	'/article/:id': {
		name: 'article',
		component: require('views/Article')
	}
});