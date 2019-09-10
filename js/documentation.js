var useProxy = window.location.host !== 'testissimo.github.io';
var useFileSuffix = (useProxy && window.location.host.indexOf('localhost') === -1) ? '' : '.md';

Vue.component('t-documentation-menu', {
    template:   '<div>'+
                    '<div class="documentation-menu-item" :class="{ active:activePath === item.path, \'root\':item.treeLevel === 0 }">'+
                        '<a  v-if="item.children" '+
                            '@click="toggleOpened(item.path)" '+
                            ':class="{\'documentation-menu-item-expander-closed\':!item.opened, \'documentation-menu-item-expander-opened\':item.opened}" '+
                            'class="documentation-menu-item-expander">'+
                            '&nbsp;'+
                        '</a>'+
                        '<a @click="linkActivate" :href="item.href" class="documentation-menu-item-link">'+
                            '<i v-if="item.treeLevel === 0" :class="item.iconCss" style="margin-right:4px"></i>'+
                            '{{item.title}}'+
                        '</a>'+
                    '</div>'+
                    '<div v-if="item.children && item.opened" style="padding-left:30px">'+
                        '<t-documentation-menu v-for="child in item.children" :key="child.id" :item="child" :active-path="activePath" @navigate="navigate" @toggle-opened="toggleOpened"></t-documentation-menu>'+
                    '</div>'+
                '</div>',
    props:{
        item:{},
        activePath:{}
    },
    data: function(){
        return {};
    },
    methods:{
        navigate: function(path){
            this.$emit('navigate', path);
        },
        toggleOpened: function(path){
            this.$emit('toggle-opened', path);
        },
        linkActivate: function(e){
            e.preventDefault();
            this.toggleOpened(this.item.path);
            if(this.item.treeLevel > 0) this.navigate(this.item.path);
        }
    }
});

new Vue({
    el: '#documentation',
    router: new VueRouter({
        routes: [{ path: '*' }]
    }),
    data: {
        menu: null,
        menuItemsByPath: null,
        menuActivePath: null,
        menuBackPath: null,

        baseUrl: useProxy ? '' : 'https://testissimo.github.io',
        imageBaseUrl: 'https://testissimo.github.io'
    },
    methods: {
        loadMenu: function(cb){
            var app = this;
            if(app.menu) return cb ? cb() : null;
            
            var menuItemsByPath = {}, prevItem;

            function createMenuItems(menu, parent){
                menu.forEach(function(menuItem){
                    menuItem.treeLevel = parent ? parent.treeLevel+1 : 0;
                    menuItem.path = parent ? parent.path + '/' + menuItem.id : menuItem.id;
                    menuItem.parentPath = parent ? parent.path : '';
                    menuItem.prevPath = prevItem ? prevItem.path : '';
                    menuItem.content = '';
                    menuItem.href = app.getFullLocationForPath(menuItem.path);
                    // menuItem.iconCss = app.getItemIconCss(menuItem);
                    if(prevItem) prevItem.nextPath = menuItem.path;
                    menuItem.opened = false;
                    menuItemsByPath[ menuItem.path ] = menuItem;
                    if(menuItem.treeLevel) prevItem = menuItem;
                    if(menuItem.children) createMenuItems(menuItem.children, menuItem);
                });

                if(!parent) {
                    app.menu = menu;
                    app.menuItemsByPath = menuItemsByPath;
                }
            }

            app.$http.get(app.baseUrl + '/documentation/menu.json').then(function(res, status){
                createMenuItems(res.body);
                if(cb) cb();
            });
        },

        iterateMenuItems: function(iterFnc){
            for(var path in this.menuItemsByPath){
                if(iterFnc(this.menuItemsByPath[ path ])) return;
            }
        },

        iterateMenuParents: function(menuItem, iterFnc){
            var parent = this.menuItemsByPath[ menuItem.parentPath ];
            while(parent){
                iterFnc(parent);
                parent = this.menuItemsByPath[ parent.parentPath ];
            }
        },

        toggleOpened: function(path){
            var item = this.menuItemsByPath[ path ];
            if(item) item.opened = !item.opened;
        },

        navigate: function(pathOrTags){
            var app = this, path, tags;

            // if no tags or path specified, select default tag
            if(!pathOrTags) {
                path = null;
                tags = ['default'];
            }
            else if(Array.isArray(pathOrTags)){
                path = null;
                tags = pathOrTags;
            }
            else {
                path = pathOrTags;
                tags = [pathOrTags];
            }

            app.loadMenu(function(){
                var toItem = toItem || app.menuItemsByPath[ path ];

                // try find by tags
                if(tags) app.iterateMenuItems(function(item){
                    if(item.tags) for(var i=0;i<item.tags.length;i++){
                        if(tags.indexOf(item.tags[i]) > -1) {
                            toItem = item;
                            return true;
                        }
                    }
                });

                if(!toItem) return;
                
                // check location hash if it needs to be updated
                if(window.location.hash !== toItem.href) {
                    window.location.hash = toItem.href;
                    return true;
                }

                if(app.menuActivePath) app.menuBackPath = app.menuActivePath;
                app.menuActivePath = toItem.path;
                app.iterateMenuParents(toItem, function(parentItem){
                    parentItem.opened = true;
                });
                app.loadItemContent(toItem);
            });
        },

        fixMdImagesUrl: function(md){
			var app = this;
			return (md || '').replace(/(?:!\[(.*?)\]\((.*?)\))/g, function(md, alt, src){
                if(src[0] === '/') src = app.imageBaseUrl + src;
                if(alt.indexOf('VIDEO') === 0) {
                    var autoplay = alt.indexOf('VIDEO-AUTOPLAY') === 0;
                    alt = alt.replace('VIDEO-AUTOPLAY', '');
                    var dimensions = alt.split('-');
                    var style = '';
                    if(dimensions[1]) style += 'height:'+dimensions[1]+'px;';
                    if(dimensions[2]) style += 'width:'+dimensions[2]+'px;';
                    return '<video controls '+(autoplay ? 'autoplay' : '')+' mute loop style="'+style+'"><source src="'+src+'" type="video/mp4"></video>';
                }
                else return '!['+alt+'](' + src + ')';
			});
        },
        fixEscapedHtml: function(html){
            return html.replace(/&amp;nbsp;/g, '&nbsp;');
        },
        loadItemContent: function(item, cb){
            var app = this;
            if(item.content) return cb ? cb() : null;

            app.$http.get(app.baseUrl + '/documentation/' + item.path + useFileSuffix).then(function(res, status){
                var converter = new showdown.Converter();
                item.content = app.fixEscapedHtml( converter.makeHtml( app.fixMdImagesUrl(res.body) ));
                if(cb) cb();
            });
        },

        getFullLocationForPath: function(docItemPath){
            return '#/documentation/'+ docItemPath;
        }
    },

    computed:{
        activeItem: function(){
            if(this.menuActivePath) return this.menuItemsByPath[ this.menuActivePath ];
        },
    },

    watch: {
        $route: {
            immediate: true,
            handler: function (to, from) {
                var app = this;

                var docPath = to.params[0].slice(1).replace('documentation/','');
                app.navigate(docPath || 'default');

                // scroll to top
                window.scrollTo(0,0);

                // for google analytics tracking purpose
                if(window.onVueRouteChange) window.onVueRouteChange(to, from);
            }
        }
    }
});