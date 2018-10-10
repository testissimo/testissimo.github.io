new Vue({
	el: '#documentation',
	router: new VueRouter({
		routes: [{ path: '/:id' }, { path: '*' }]
	}),
	data: {
		sitemap: [],
		page: {
			index: -1,
			id: '',
			title: '',
			content: ''
		}
	},
	methods:{
		getSitemapPromise: function(){
			var app = this;
			if(!app._sitemapPromise){
				app._sitemapPromise = app.$http.get('/sitemap.json').then(function(res, status){
					app.sitemap = res.body;
				});
			}
			return app._sitemapPromise;
		},
		loadPage: function(pageId){
			var app = this;
			app.page.id = pageId;
			app.page.index = app.sitemap.map(function(pageInfo){ return pageInfo.id; }).indexOf(pageId);
			app.page.content = '';
			app.page.title = app.page.index === -1 ? '' : app.sitemap[app.page.index].title;

			// scroll to top
			window.scrollTo(0,0);

			// reset route if page is not in sitemap
			if(app.page.index === -1 && app.$route.path !== '/') return app.$router.push({ path:'/' });
			
			if(pageId) app.$http.get('/documentation/' + app.page.id + '.md').then(function(res, status){
				app.page.content = res.body;
			});
		}
	},
	watch:{
		$route: {
			immediate: true,
			handler: function(to, from){
				var app = this;
				app.getSitemapPromise().then(function(){
					app.loadPage(to.params.id);
				});
			}
		}
	}
});
