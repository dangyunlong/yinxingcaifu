define(function (require) {
    var $ = require('jquery');
    require('rem');
    require('touchslide');
    /*require('less');
    less.watch();//加载less*/
    require('flexslider');
    require('slider');
    //加载不符合amd规范的js
    require(["slider"],function(slider){});
    
    
    //vue
    require(["vue","jquery"],function(Vue, $){
    	//nav
	    var indexNav = new Vue({
	        el:"#index-nav",
	        data:{
	        	phone:"400-806-1886",
	        	loginstate:"",
	        	username:"admin",
	            head:[],
	            nav:[
		            {class:"",href:"index.html",title:"首页"},
		            {class:"",href:"list.html",title:"理财"},
		            {class:"",href:"#",title:"网贷"},
		            {class:"",href:"#",title:"基金"},
		            {class:"account",href:"#",title:"我的账户"},
	            ]
	        },
	        mounted(){ //组件加载完毕后把填入数据
	        	var that = this;
	        	$.ajax({
			        type:"post",
			        url:"serve.php",
			        datatype:"json",
			        success:function(data){
			        	that.loginstate=data[0].loginstate;
			            that.head=data[1].data;
			        }
			    });
	        }
	    })
	    
	    //menu
	    new Vue({
	        el:"#index-menu",
	        data:{
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
	    })
	    
	    
	    
	    
	    
	    //banner
	    new Vue({
	        el:"#index-banner",
	        data:{
	            imgs:[
		            {img:"src/images/index/banner.jpg",href:"#",title:"银杏财富正式上线"},
		            {img:"src/images/index/fxh.jpg",href:"#",title:"房享汇"},
		            {img:"src/images/index/wyb.jpg",href:"#",title:"稳盈宝"},
	            ]
	        },
	        created: function () {
			    //组建加载完毕后执行
			},
			mounted(){
			   //页面加载完毕后执行
			   $('.flexslider').flexslider({  
			        directionNav: true,  
			        pauseOnAction: false  
			    });
			}
	    })
	    //login
	    new Vue({
	        el:"#index-login",
	        data:{
	            loginname:"银杏财富",
	            minNum:"6",
	            maxNum:"15",
	            loginlink:"立即注册赚钱",
	        },
	    })
	    //notice
	    new Vue({
	        el:"#index-notice",
	        data:{
	            noticeLink:"#",
	            noticeTitle:"百合贷切换支付通道引入银行存管公告",
	            noticeTime:"2017-03-22"
	        },
	    })
	    //licai
	    new Vue({
	        el:"#index-licai-box",
	        data:{
	            licais:[
		            {class:"licai_posit",link:"#",name:"新手项目",txt:"保险保障 稳定增值",minNum:"8",maxNum:"15",btnTxt:"立即投资"},
		          	{class:"licai_posit lcps_1",link:"#",name:"直投项目",txt:"保险保障 稳定增值",minNum:"8",maxNum:"12",btnTxt:"立即投资"},
		          	{class:"licai_posit lcps_2",link:"#",name:"理财转让",txt:"保险保障 稳定增值",minNum:"6",maxNum:"10",btnTxt:"立即投资"}
	            ]
	        },
	    })
	    //wd
	    new Vue({
	        el:"#index-wd-table",
	        data:{
	            wdTable:[
		            {link:"#",title:"个人经营抵押贷  [DY-2017-0091]",num1:"11.50%+12.00%",num2:"70.00%",num3:"50.10%",time:"6个月"},
		            {link:"#",title:"个人经营抵押贷  [DY-2017-0091]",num1:"11.50%+12.00%",num2:"70.00%",num3:"50.10%",time:"6个月"},
		            {link:"#",title:"个人经营抵押贷  [DY-2017-0091]",num1:"11.50%+12.00%",num2:"70.00%",num3:"50.10%",time:"6个月"},
	            ]
	        },
	    })
	    //jjcp
	    new Vue({
	        el:"#index-jjcp",
	        data:{
	            jjcp:[
		            {link:"#",title:"容祥斋食品私募股权基金一期",txt:"深厚广泛的金融平台资源，汇聚大量优质项目资源",money:"100",num:"2+1",mode:"猪肉",span:["",""]},
		            {link:"#",title:"容祥斋食品私募股权基金二期",txt:"深厚广泛的金融平台资源，汇聚大量优质项目资源",money:"40",num:"3+2",mode:"粮油",span:["稳定收益","低风险"]},
		            {link:"#",title:"容祥斋食品私募股权基金三期",txt:"深厚广泛的金融平台资源，汇聚大量优质项目资源",money:"200",num:"1+1",mode:"猪肉",span:["稳定收益","低风险","短期资产"]},
	            ]
	        },
	    })
	    //news
	    new Vue({
	        el:"#index-news",
	        data:{
	        	img:"src/images/index/new_img.jpg",
	        	data:[
	        		{link:"#",class:"one_news",title:"中承第三届重走童年路1617一路一起向前进!",txt:"重走童年路 共享人生甜 是英雄就跟着我们一起去超越!导读：重走童年路，共享人生甜中承第三届..."},
	        		{link:"#",class:"",title:"爱心点亮希望—中承集团赴青海捐赠希望小学",txt:""},
	        		{link:"#",class:"",title:"暴雨无情人间有爱 中承集团心系邢台",txt:""},
	        		{link:"#",class:"",title:"暴雨无情人间有爱 中承集团心系邢台",txt:""}
	        	]
	        },
	    })
	    
	    //hb
	    new Vue({
	        el:"#index-hb",
	        data:{
	        	data:[
	        		{link:"#",class:"one_news",title:"中承第三届重走童年路1617一路一起向前进!",txt:"重走童年路 共享人生甜 是英雄就跟着我们一起去超越!导读：重走童年路，共享人生甜中承第三届..."},
	        		{link:"#",class:"",title:"爱心点亮希望—中承集团赴青海捐赠希望小学",txt:""},
	        		{link:"#",class:"",title:"暴雨无情人间有爱 中承集团心系邢台",txt:""},
	        		{link:"#",class:"",title:"暴雨无情人间有爱 中承集团心系邢台",txt:""}
	        	]
	        },
	    })
	    
	    //imgbox
	    new Vue({
	        el:"#monthlypic",
	        data:{
	        	data:[
	        		{class:"feature feat_active",img:"src/images/index/new_img.jpg",width:"306px",height:"200px",txt:"银杏财富战略升级消费金融场景全覆盖"},
	        		{class:"feature",img:"src/images/index/new_img.jpg",width:"256px",height:"150px",txt:"银杏财富战略升级消费金融场景全覆盖"},
	        		{class:"feature",img:"src/images/index/new_img.jpg",width:"256px",height:"150px",txt:"银杏财富战略升级消费金融场景全覆盖"}
	        	]
	        },
	        mounted(){
			   //页面加载完毕后执行
			   $("#monthlypic").monthlypic({});
			}
	    })
	    
	    //hz
	    new Vue({
	        el:"#index-hz",
	        data:{
	        	imgs:[
	        		{img:"src/images/index/bmp1.jpg"},
	        		{img:"src/images/index/bmp2.jpg"},
	        		{img:"src/images/index/bmp3.jpg"},
	        		{img:"src/images/index/bmp4.jpg"},
	        		{img:"src/images/index/bmp5.jpg"}
	        	]
	        },
	    })
	    
	    
	    //组件

		//全局注册
		/*Vue.component('bottomlogo', {
			props:['src'], //声明一个 用于接收父级或者同胞传输过来值 的名字
			template: '<div class="ft_log"><img :src="src"></div>',
		})
		
		new Vue({
			el:"#public-footer",
			//template:'<div class="ft_box warp"><bottomlogo></bottomlogo></div>',
			data:{
				"link":"src/images/common/foot_logo.png",
			}
		})*/
	    
	    
	    
	    
	});
   
    $(function(){
		$(".feature").click(function(){
		    $(this).siblings().removeClass("feat_active");
			$(this).addClass("feat_active");
		});
	})
});

