define(function (require) {
    var $ = require('jquery');
    var validate=require('validate');
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
	    Vue.use(validate, {
		  	i18n,
		  	i18nRootKey: 'validation',
	  		dictionary: {
	    		zh_CN
	  		}
		});
		
		//这真是我见过的最扯淡的写法      自定义规则 手机
		validate.Validator.extend('mobile', {
		  	getMessage: field =>  field + '必须是11位手机号', //这个都不需要
		  	validate: value => value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
		});
		
		
	    new Vue({
	        el: '#artbox',
	        methods: {  
                submit: function() {  
	                //验证所有表单并且提交
	                this.$validator.validateAll().then((result) => {
				        if (result) {
				          // eslint-disable-next-line
				          alert('Form Submitted!');
				          return;
				        }
				        alert('Correct them errors!');
				    });
                }  
            },
	        mounted(){
	        	
	        	//如果你的元素在控制器里面的话，你就需要写在这里面了
	        	$("#yqm").on("click",function(){
					$(this).toggleClass("select");
					$("#yqmbox").toggle();
				})
	        }
	    })
	    
	});
	
	
});

