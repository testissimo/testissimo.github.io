var Home = {
	name: 'Home',
	template: " \
		<div>\
			<section class='main-banner banner-two' id='banner'> \
			<div  class='auto-container'> \
				<h1 id='siteHeading'>Documentation</h1> \
			</div> \
			</section> \
			<section id='sectionContent'> \
			<div class='auto-container' id='app'> \
				<div id='sitemap'> \
				<ul class='list-group'> \
				<li class='list-group-item' v-for='(section, index) in sectionList' :key='index'> \
					<router-link :to=\"'/documentation/' + section.md\">{{ section.name }} </router-link> \
				</li> \
				</ul> \
				<router-view></router-view> \
			</div> \
			</div> \
			</section>\
		</div> \
    ",
	data: function () {
		return {
			sectionList: {},
			sectionSelectedBoolean: true
		}
	},
	mounted: function () {
		this.loadContent();
	},
	watch: {
		$route: function () {
			this.sectionSelectedBoolean = typeof this.$route.params.id == 'undefined'
		}
	},
	methods: {
		sectionSelected: function () {
			return $route.params.length == 0;
		},
		loadContent: function () {
			var component = this;
			this.$http.get('./sitemap.json').then(function (data, status) {
				component.sectionList = data.body;
			});
		}
	}
};

var DocumentationComponent = {
	name: 'DocumentationComponent',
	template: " <div>\
      <section class='main-banner banner-two' id='banner'> \
        <div  class='auto-container'> \
          <h1 id='siteHeading'>{{title}}</h1> \
        </div> \
      </section> \
      <section id='sectionContent'> \
        <div class='auto-container' id='app'> \
          <div id='docContent'> \
            <div id='breadcrumbs'> \
              <router-link to='/'>Documentation ></router-link> {{ title }} \
            </div>  \
            <div id='showdownDiv'> \
              <vue-showdown :markdown='mdData'/> \
            </div> \
            <div> \
              <router-link to='/'> Previous chapter : prev {{prevChapter.name}} </router-link> \
              <router-link to='/'> Next chapter : next {{nextChapter.name}} </router-link>\
            </div> \
          </div> \
        </div> \
      </section>\
    </div>\
    ",

	data: function () {
		return {
			mdData: 'Loading content, please wait...',
			title: '',
			prevChapter: {},
			nextChapter: {},
			sectionList: {}
		}
	},
	methods: {
		loadFile: function (id) {
			var self = this;
			var path = "./documentation/" + id + ".md";
			this.$http.get(path)
				.then(function (data) {
					self.mdData = data.body;
					self.title = (self.mdData.split('\n')[0]).slice(2, (self.mdData.split('\n')[0]).length);
					this.onDataLoaded(self.title);
					this.getSiteMap(self.title);
				})
				.catch(function (error) {
					self.mdData = "The data you requested could not be found!";
				})
		},

		onDataLoaded: function (title) {
			this.$emit(title);
		},

		getSiteMap: function (title) {
			var self = this;
			this.$http.get("./sitemap.json")
				.then(function (data, status) {
					this.sectionList = data.body;
					console.log(title);
					this.sectionList.forEach(element => {
						if (element.name == title) {
							console.log(element.id)
						}
					});
				})
		},

	},
	watch: {
		$route: function () {
			this.loadFile(this.$route.params.id)
		}
	},
	beforeMount: function () {
		this.loadFile(this.$route.params.id);
	},
};


var router = new VueRouter({
	routes: [{
			path: '/documentation/:id',
			component: DocumentationComponent
		},
		{
			path: '/',
			component: Home
		},
	]
});

new Vue({
	router: router,
	el: '#documentation',
	components: {
		Home: Home,
		DocumentationContent: DocumentationComponent,
		VueShowdown: VueShowdown,
	},
	data: {
		sectionDisplayName: "Documentation"
	}
})