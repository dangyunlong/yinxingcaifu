require.config({
	baseUrl: 'src/js/', //文件存放路径
    paths: { 
    	//paths节点的名称和加载路径
    	//如果common.js与使用的js在同一个目录 直接写名字即可 这里只定义公用的
        "jquery": "public/jquery", 
        "echarts": "public/echarts",
        "rem": "public/rem",
        "myfun": "public/myfun",
        "swiper": "public/swiper",
        "touchslide": "public/touchslide",
        "zepto": "public/zepto",
        "event": "public/event",
        "touch": "public/touch",
        "less": "public/less",
        "slider": "public/slider",
        "vue": "public/vue",
        "validate": "public/vee-validate",
        "cn": "public/zh_CN",
        "vue-i18n": "public/vue-i18n",
        "VueRouter":"public/vue-router",
        "flexslider": "public/flexslider"
    },
    shim: { //这里写明依赖关系
        "myfun": {
            exports: "$",
            deps: ['jquery']
        },
        "echarts": {
            exports: "$",
            deps: ['jquery']
        },
        "rem": {
            exports: "$",
            deps: ['jquery']
        },
        "swiper": {
            exports: "$",
            deps: ['jquery']
        },
        "touchslide": {
            exports: "$",
            deps: ['jquery']
        },
        "slider": {
            exports: "$",
            deps: ['jquery']
        },
        "vue": {
            exports: "$",
            deps: ['jquery']
        },
        "flexslider": {
            exports: "$",
            deps: ['jquery']
        }
    },
    waitSeconds: 0
});


define(function (require) {
    var $ = require('jquery');
    //vue
    require(["vue","jquery"],function(Vue, $){
    	
    	//公共顶部
    	var navs={
    		props:['datas'],
    		template:'<div class="top_box_nav warp"><div class="tbn_left"><div class="ft12">客服热线：<span class="ft14">{{datas.phone}}</span></div></div><nav><ul class="ft12"><li class="rg_box"><span v-if="datas.loginstate!=2">欢迎您的使用，请先登录!<span class="loginoff"></span></span><span v-else>欢迎{{username}}!<span class="loginoff"></span></span><a href="register.html">注册</a><span>|</span><a href="login.html">登陆</a></li><li v-for="item in datas.head" :class="item.class"><a :href="item.href">{{item.title}}</a></li></ul></nav></div>'
    	}
    	
    	var menus={
    		props:['datas'],
    		template:'<div class="menu_box warp"><h1 class="logo"><a :href="datas.href"><img :src="datas.logo"></a></h1><nav><ul><li v-for="item in datas.nav"><a :class="item.class" :href="item.href">{{item.title}}</a></li></ul></nav></div>'
    	}
    	
    	//顶部控制器
	    new Vue({
	        el:"#header",
	        template: '<header><div class="top_box"><navs v-bind:datas="nav"></navs></div><div class="menu"><menus v-bind:datas="menu"></menus></div></header>',
	        data:{
				"nav":{
					phone:"400-806-1886",
					loginstate:"",
					username:"党云龙",
					head:[],
					nav:[
			            {class:"",href:"index.html",title:"首页"},
			            {class:"",href:"list.html",title:"理财"},
			            {class:"",href:"#",title:"网贷"},
			            {class:"",href:"#",title:"基金"},
			            {class:"account",href:"#",title:"我的账户"},
		            ]
	        	},
				"menu":{
		        	href:"#",
		        	logo:"src/images/common/logo.png",
		            nav:[
			            {class:"",href:"index.html",title:"首页"},
			            {class:"",href:"list.html",title:"理财"},
			            {class:"",href:"#",title:"网贷"},
			            {class:"",href:"#",title:"基金"},
			            {class:"account",href:"#",title:"我的账户"},
		            ]
		        }
			},
	        components:{
	            "navs":navs,
	            "menus":menus,
	        },
	        mounted(){ //组件加载完毕后把填入数据
	        	var that = this;
	        	$.ajax({
			        type:"post",
			        url:"serve.php",
			        datatype:"json",
			        success:function(data){
			        	that.nav.loginstate=data[0].loginstate;
			            that.nav.head=data[1].data;
			        }
			    });
	        }
	    })
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	//公用底部
    	var footerlogo={
         	props:['datas'],
			template: '<div class="ft_log"><img :src="datas"></div>'
	    }
	    
	    var footertop={
         	props:['datas'],
			template: '<div class="ftr_top"><span v-for="iteam in datas"><a :href="iteam.link" :title="iteam.title"><img :src="iteam.src"></a></span></div>'
	    }
	    
	    var footerbottom={
         	props:['datas'],
			template: '<div class="ftr_bottom"><p v-for="iteam in datas">{{iteam.txt}}</p></div>'
	    }
	    //底部控制器
	    new Vue({
	        el:"#public-footer",
	        template: '<footer><div class="ft_box warp"><bottomlogo v-bind:datas="link"></bottomlogo><div class="ft_right"><footertop v-bind:datas="main"></footertop><footerbottom v-bind:datas="txts"></footerbottom></div></div></footer>',
	        data:{
				"link":"src/images/common/foot_logo.png",
				"main":[
	        		{link:"#",title:"微博",src:"src/images/common/weibo_icon.png"},
	        		{link:"#",title:"QQ",src:"src/images/common/qq_icon.png"},
	        		{link:"#",title:"邮件",src:"src/images/common/email_icon.png"},
	        		{link:"#",title:"微信",src:"src/images/common/weixin_icon.png"},
	        	],
	        	"txts":[
	        		{txt:"© 2014-2017 百合贷 All rights reserved | 中创晟业（北京）资本管理有限公司 | 京ICP备14012483号-2    未经许可不得复制转载或编辑，违者必究"},
	        		{txt:"页面中名称仅为不同出借模式的标示，非理财产品；历史年化收益率仅供参考，不代表未来实际收益。出借有风险，选择需谨慎。"}
	        	]
			},
	        components:{
	            "bottomlogo":footerlogo,
	            "footertop":footertop,
	            "footerbottom":footerbottom,
	        }
	    })
	    
	    
	    
	    
	    
	    
	});
});
