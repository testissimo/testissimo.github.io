
const router = new VueRouter({
    mode:'history',
    routes : sitemap,
})

new Vue({
    router,
    el : '#app',
    data : {
        mdData : "tu budu mddata",
    },
    beforeRouteLeave (to, from, next){
        console.log(to, from, next);
    }
})


