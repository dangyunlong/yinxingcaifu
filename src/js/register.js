define(function (require) {
    var $ = require('jquery');
    require('validate');
    //手册 https://segmentfault.com/a/1190000006706226
    /*require('less');
    less.watch();*/
   
    //vue
    require(["vue","jquery"],function(Vue, $){
	    
	    
	    
	    new Vue({
		    el: '#artbox',
		    data: {
			    length: {
			      minlength: 3,
			      maxlength: 16
			    }
		    }
		})
	    
	});
	
	$("#yqm").on("click",function(){
		$(this).toggleClass("select");
		$("#yqmbox").toggle();
	})
	
});

