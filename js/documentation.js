var isOnTestissimoWeb = window.location.host === 'testissimo.io';
var baseUrl = isOnTestissimoWeb ? '' : 'https://testissimo.github.io';

new Vue({
	el: '#documentation',
	router: new VueRouter({
		routes: [{ path: '/:id' }, { path: '*' }]
	}),
	data: {
		sitemap: null,
		page: {
			index: -1,
			id: '',
			title: '',
			content: ''
		},
		baseUrl: baseUrl
	},
	methods:{
		getSitemapPromise: function(){
			var app = this;
			if(!app._sitemapPromise){
				app._sitemapPromise = app.$http.get(app.baseUrl + '/sitemap' + (isOnTestissimoWeb ? '' : '.json')).then(function(res, status){
					app.sitemap = res.body;
				});
			}
			return app._sitemapPromise;
		},
		fixMdImagesUrl: function(md){
			var app = this;
			return (md || '').replace(/(?:!\[(.*?)\]\((.*?)\))/g, function(md, alt, src){ 
				return '!['+alt+'](' + (src[0] === '/' ? app.baseUrl + src : src) + ')';
			});
		},
		loadPage: function(pageId){
			var app = this;
			app.page.id = pageId;
			app.page.index = app.sitemap.map(function(pageInfo){ return pageInfo.id; }).indexOf(pageId);
			app.page.content = '';
			app.page.title = app.page.index === -1 ? 'Documentation' : app.sitemap[app.page.index].title;

			// scroll to top
			window.scrollTo(0,0);

			// reset route if page is not in sitemap
			if(app.page.index === -1 && app.$route.path !== '/') return app.$router.push({ path:'/' });
			
			var pageUrl;
			if(isOnTestissimoWeb) pageUrl = app.baseUrl + '/' + app.page.id;
			else pageUrl = app.baseUrl + '/documentation/' + app.page.id + '.md';
			
			if(pageId) app.$http.get(pageUrl).then(function(res, status){
				app.page.content = app.fixMdImagesUrl(res.body);
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

				// for google analytics tracking purpose
				if(window.onVueRouteChange) window.onVueRouteChange(to, from);
			}
		}
	}
});
