define(function (require) {
    var $ = require('jquery');
    require('rem');
    require('touchslide');
    /*require('less');
    less.watch();//加载less*/
    require('flexslider');
    require('slider');
    
    //vue
    require(["vue","jquery"],function(Vue, $){
	    
	  
	    new Vue({
	        el:"#listbody",
	        data:{
	        	content:[
	        		{link:"#",title:"房管宝 [DY-2017-0091]",min:"9.80",max:"12.80",time:"3",money1:"500,000.00",money2:"180,000.00",speed:"20%"},
	        		{link:"#",title:"房管宝 [DY-2018-0322]",min:"7.80",max:"10.80",time:"3",money1:"630,000.00",money2:"90,000.00",speed:"80%"},
	        	]
	        },
	        methods:{
	        	post:function(event,index){
	        		//想要获取下标，需要在for中传入index参数，然后再点击事件中传入即可
	        		alert(index)
	        		//获取当前点击的元素
	        		var that = event.target;
	        		
	        	},
	        }
	    })
	    
	    
	});
	
});

