const Home = {
  name : 'Home',
  template : 
    "<div id='sitemap'> \
      <ul class='list-group'> \
        <li class='list-group-item' v-for='(section, index) in sectionList' :key='index'> \
          <router-link :to=\"'/documentation/' + section.md\">{{ section.name }} </router-link> \
        </li> \
      </ul> \
      <router-view></router-view> \
    </div> ",
  
  data : function() {
    return {
      sectionList : {},
      sectionSelectedBoolean : true
    }
  },
  mounted : function() {
    this.getMDfromServer();
  },
  watch : {
    $route : function() {
      this.sectionSelectedBoolean = typeof this.$route.params.id == 'undefined'
    }
  },
  methods:{
    sectionSelected : function(){
      return $route.params.length == 0;
    },
    getMDfromServer : function(){
      var self = this;
      this.$http.get("./sitemap.json")
      .then( function (data, status){
        self.loadSections(data.body,status)
      })

    },
    loadSections : function(data, status){
      this.sectionList = data;
    }
  }
};

const DocumentationContent = {
  name : 'DocumentationContent',
  template : 
  " \
    <div id='docContent'> \
      <li id='breadcrumbs' class='list-group-item' style='margin-bottom : 50px; width : fit-content'> \
        <router-link to='/'>Documentation ></router-link> \
        {{ title }}  \
        </li> \
      <div id='showdownDiv'> \
        <vue-showdown :markdown='mdData'/> \
      </div> \
    </div> ",
  data : function() {
    return {
        mdData : "Loading MDdata",
        title : ""
    }
  },
  methods : {
    loadFile : function(id){
        var self = this;
        var path = "./documentation/" + id + ".md";
      console.log(path)
        this.$http.get(path)
        .then(function (data) {
          console.log(data.body)
            self.mdData = data.body;
            self.title = (self.mdData.split('\n')[0]).slice(2, (self.mdData.split('\n')[0]).length);
        })
        .catch(function (error){
            console.log(error.message, error);
            self.mdData = "The data you requested could not be found!";
        })
    }
  },
  watch: {
    $route : function(){
        this.loadFile(this.$route.params.id)
    }
  },
  beforeMount : function() {
    this.loadFile(this.$route.params.id)
  },
};

// const Section = {
//   template : `
//     <div>
//       <!-- breadcrumb-->
//       breadcrumbs
//       <router-view></router-view> 
//     </div>
//   `,
//   name : "Section"
// };


const router = new VueRouter({
  routes : [
    { 
      path : "/documentation/:id",
      component : DocumentationContent 
    },
    { 
      path : "/",
      component : Home
    },
  ]
});

var app = new Vue({
    router : router,
    el: '#app',
    components : {
      Home : Home,
      DocumentationContent : DocumentationContent,
      VueShowdown : VueShowdown
    },
    data: {
      message : "Vue loaded!"
    }
  }
)

