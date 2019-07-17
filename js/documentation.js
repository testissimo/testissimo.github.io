var isOnTestissimoWeb = window.location.host === 'localhost:8000';

new Vue({
	el: '#documentation',
	router: new VueRouter({
		routes: [{ path: '/:id' }, { path: '*' }]
	}),
	data: {
    sitemap: null,
    tutorialsSitemap: [
      { 
        "id": "setup",
        "title": "First Time Setup",
      },
      { 
        "id": "become-a-user",
        "title": "Become a User",
      },
      { 
        "id": "first-repo",
        "title": "First Repo and Test Setup",
      },
      { 
        "id": "write-test",
        "title": "Write your first Test",
      },
      { 
        "id": "run-debug-test",
        "title": "Run and Debug Test",
      },
      { 
        "id": "mastering-picker",
        "title": "Mastering The Picker",
      },
      { 
        "id": "variables-reusability",
        "title": "Test Variables and Reusability",
      },
      { 
        "id": "if-else-conditions",
        "title": "If-Else Conditions",
      },
      { 
        "id": "test-repeaters",
        "title": "Test Repeaters",
      },
      { 
        "id": "wait-for-element",
        "title": "\"Wait for\" element",
      },
      { 
        "id": "test-suites",
        "title": "Test Suites",
      },
      { 
        "id": "components",
        "title": "Components",
      },
    ],
    referencesSitemap:[
      {
        "id" : "actions-reference",
        "title" : "Actions list"
      },
      {
        "id" : "assertions-reference",
        "title" : "Assertions list"
      },
      {
        "id" : "selectors-reference",
        "title" : "Selectors reference"
      },
      {
        "id" : "picker-reference",
        "title" : "Picker algorithm"
      }
    ],
		page: {
			index: -1,
			id: '',
			title: '',
			content: ''
		},
		baseUrl: isOnTestissimoWeb ? '' : 'https://testissimo.github.io',
		imageBaseUrl: 'https://testissimo.github.io'
	},
	methods:{
		getSitemapPromise: function(){
			var app = this;
			if(!app._sitemapPromise){
				app._sitemapPromise = app.$http.get(app.baseUrl + '/sitemap.json' ).then(function(res, status){
					app.sitemap = res.body;
				});
			}
			return app._sitemapPromise;
		},
		fixMdImagesUrl: function(md){
			var app = this;
			return (md || '').replace(/(?:!\[(.*?)\]\((.*?)\))/g, function(md, alt, src){ 
				return '!['+alt+'](' + (src[0] === '/' ? app.imageBaseUrl + src : src) + ')';
			});
		},
		loadPage: function(pageId){
			var app = this;
      app.page.id = pageId;
      // app.page.index = app.sitemap.map(function(pageInfo){ return pageInfo.id; }).indexOf(pageId);
      app.page.content = '';
			app.page.title = 'Documentation';
			// scroll to top
			window.scrollTo(0,0);

			// reset route if page is not in sitemap
			// if(app.page.index === -1 && app.$route.path !== '/') return app.$router.push({ path:'/' });
			
			var pageUrl;
			if(isOnTestissimoWeb) pageUrl = app.baseUrl + app.page.id + '.md';
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
					app.loadPage(to.params[0]);
				});

				// for google analytics tracking purpose
				if(window.onVueRouteChange) window.onVueRouteChange(to, from);
			}
		}
	}
});
