// toto sa tiez zmenilo
var isOnTestissimoWeb = window.location.host === 'localhost:8000';

new Vue({
    el: '#documentation',
    router: new VueRouter({
        routes: [{
            path: '/:id'
        }, {
            path: '*'
        }]
    }),
    data: {
        sitemap: null,
        articles: null,
        tutorials: null,
        references: null,
        page: {
            index: -1,
            id: '',
            title: '',
            category: '',
            content: ''
        },
        baseUrl: isOnTestissimoWeb ? '' : 'https://testissimo.github.io',
        imageBaseUrl: 'https://testissimo.github.io'
    },
    methods: {
        closeCategories: function () {
            var app = this;
            Object.keys(app.sitemap).forEach(element => {
                app.sitemap[element].open = false;
            })
        },
        getSitemapPromise: function () {
            var app = this;
            if (!app._sitemapPromise) {
                // tu sa rozhodovalo medzi sitemap.json alebo len sitemap
                app._sitemapPromise = app.$http.get(app.baseUrl + '/sitemap.json').then(function (res, status) {

                    // pozor ! toto bolo predtym normalne res.body bez JSON.parse
                    app.sitemap = JSON.parse(res.bodyText);

                    app.articles = app.sitemap.articles;
                    app.tutorials = app.sitemap.tutorials;
                    app.references = app.sitemap.references;
                });
            }
            return app._sitemapPromise;
        },
        fixMdImagesUrl: function (md) {
            var app = this;
            return (md || '').replace(/(?:!\[(.*?)\]\((.*?)\))/g, function (md, alt, src) {
                return '![' + alt + '](' + (src[0] === '/' ? app.imageBaseUrl + src : src) + ')';
            });
        },
        fillArray: function (categoryId) {
            var retVal = [],
                app = this;

            app.sitemap[categoryId].children.forEach(element => {
                retVal.push(element)
                if (element.children) element.children.forEach(child => retVal.push(child))
            })
            
            return retVal
        },
        loadPage: function (pageId) {
            var app = this;
            app.page.id = pageId;
            var
                splitPageId = pageId.split("/"),
                categoryId = splitPageId[splitPageId.length - 2],
                articleId = splitPageId[splitPageId.length - 1],
                categoryPossibleChildren = app[categoryId].children.filter(element => element.children).map(element => element.children)["0"]
            indexHelper = this.fillArray(categoryId);

            app.page.category = app[categoryId].title
            app.page.categoryPath = app[categoryId].path

            // tato monstroznost sa asi da este prepisat na krajsie nieco
            app.page.title = categoryPossibleChildren ? app[categoryId].children.concat(categoryPossibleChildren).filter(element => element.id == articleId)["0"].title : app[categoryId].children.filter(element => element.id == articleId)["0"].title

            // index - bude navigovat na dalsie casti v kategorii, t.z. posledny clanok nikam dalej neukazuje a analogicky prvy neodkazuje na posledny clanok z predchadzajucej kategorie

            app.page.index = indexHelper.map(element => element.id).indexOf(articleId)
            app.page.previous = indexHelper[app.page.index - 1]
            app.page.next = indexHelper[app.page.index + 1]
            app.page.content = '';
            window.scrollTo(0, 0);

            app.closeCategories();

            // reset route if page is not in sitemap
            // if(app.page.index === -1 && app.$route.path !== '/') return app.$router.push({ path:'/' });

            var pageUrl;
            if (isOnTestissimoWeb) pageUrl = app.baseUrl + app.page.id + '.md';
            else pageUrl = app.baseUrl + '/documentation/' + app.page.id + '.md';

            if (pageId) app.$http.get(pageUrl).then(function (res, status) {
                app.page.content = app.fixMdImagesUrl(res.body);
            });
        }
    },
    watch: {
        $route: {
            immediate: true,
            handler: function (to, from) {
                var app = this;
                app.getSitemapPromise().then(function () {
                    app.loadPage(to.params[0]);
                });

                // for google analytics tracking purpose
                if (window.onVueRouteChange) window.onVueRouteChange(to, from);
            }
        }
    }
});