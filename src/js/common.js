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
        "validate": "public/vue-validator",
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
