define(function (require) {
    var VueRouter=require('VueRouter');
    
    //vue
    require(["vue","jquery"],function(Vue, $){
    	
Vue.use(VueRouter)

var goods = {template:'<p>goods</p>'};
var ratings = {template:'<p>ratings</p>'};
var seller = {template:'<p>seller</p>'};

var routes = [
  	{path:'/goods',component:goods},
  	{path:'/ratings',component:ratings},
  	{path:'/seller',component:seller}
];

var router = new VueRouter({
  	routes:routes
});

new Vue({
	el:"#app",
	router
})
	});
});

