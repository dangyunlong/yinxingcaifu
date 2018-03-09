define(function (require) {
    var $ = require('jquery');
    var VeeValidate=require('vee');
    var zh_CN=require('cn');
    var VueI18n=require('vue-i18n'); 
    /*require('less');
    less.watch();*/

    //vue
    require(["vue","jquery"],function(Vue, $){
    	//配置18国语言
	    Vue.use(VueI18n);
	    var i18n = new VueI18n({
		  	locale: 'zh_CN',
		})
	    Vue.use(VeeValidate, {
		  	i18n,
		  	i18nRootKey: 'validation',
	  		dictionary: {
	    		zh_CN
	  		}
		});
		
		//自定义验证规则
		VeeValidate.extend('mobile', {
		    validate: value => {
		      return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
		    }
		})

	    new Vue({
	        el: '#artbox',
	    })
	    
	    
	});
	
	$("#yqm").on("click",function(){
		$(this).toggleClass("select");
		$("#yqmbox").toggle();
	})
	
});

