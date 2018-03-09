define(function (require) {
    var $ = require('jquery');
    /*require('less');
    less.watch();*/
   
    //vue
    require(["vue","jquery"],function(Vue, $){
	    
	    
	});
	
	$("#yqm").on("click",function(){
		$(this).toggleClass("select");
		$("#yqmbox").toggle();
	})
	
});

