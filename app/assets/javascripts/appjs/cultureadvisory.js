//定义全局变量
var token = ""
var page = 1;
var searchcontent = "";
var cultureadvisoryapp = angular.module('cultureadvisory',[]);
cultureadvisoryapp.controller('cultureadvisorycontroller',function($scope,$http){
    //读取新闻资讯的接口
	$http({
			url:wenhuaju+'news/list/'+page,
			method:'POST',
			params:{
				    'typeId':1,//1：新闻动态
			        'orderType':1 //2:按照热度展示
			       }
		}).success(function(response){
			$scope.newscontent = response.data;
		});
	//新闻快讯的搜索功能
	$scope.search = function()
	{
		page = 1;
		//显示的是第一页的内容
	    searchcontent = $(".searchcontent").val();
	    //如果搜索为空，读取接口，全部读取。页数为1
		if(searchcontent=="")
		{
			$http({
			url:wenhuaju+'news/list/'+page,
			method:'POST',
			params:{
				    'typeId':1,//1：新闻动态
			        'orderType':2 //2:按照热度展示
			       }
			}).success(function(response){
				$scope.newscontent = response.data;
			});
		}
//		不为空,按照搜索内容显示
		else
		{
			$http({
			url:wenhuaju+'news/list/'+page,
			method:'POST',
			params:{
				    'typeId':1,//1：新闻动态
			        'title':searchcontent,
			        'orderType':1 //2:按照热度展示
			       }
			}).success(function(response){
				$scope.newscontent = response.data;
			});
		}
	}
		//加载更多的点击事件
		$scope.addmore = function(){
			page++;
			$http({
			url:wenhuaju+'news/list/'+page,
			method:'POST',
			params:{
				    'typeId':1,//1：新闻动态
			        'title':searchcontent,
			        'orderType':1 //2:按照热度展示
			       }
		    }).success(function(response_more){
		    	var newslength ;
		    	if(response_more.data==null||response_more.data=="")
		    	{
		    		newslength = 0;
		    	}
		    	else
		    	{
		    		newslength = $scope.newscontent.length ;
		    	}
		    	if(newslength<15)
		    	{
		    		$(".more").css('display','none');
		    		$(".ad-nomore").css('display','block');
		    	}
		    	//追加元素
		    	for(var i=0;i<newslength;i++)
		    	{
		    		$scope.newscontenta = response_more.data[i];
		    		$(".news").append('<li class="newshover"><b ng-bind="newscontenta.title"></b><p ng-bind="newscontenta.intro"></p><div>评论：<span ng-bind="newscontenta.viewNumber"></span><span ng-bind="newscontenta.createTime"></span></div></li>');
		    	}
		    	//追加之后添加的鼠标效果
		    	$(".newshover").hover(function(){
		//	    	alert(1);
			    	var self  = this;
			    	$(".newshover").removeClass("ad-con-leftbg");
			    	$(self).addClass("ad-con-leftbg");
			    },function(){
			    	$(self).removeClass("ad-con-leftbg");
			    })
		    });
		}

		//文化快讯页面读取消息通知接口
		$http({
			url:wenhuaju+'news/list/'+page,
			method:'POST',
			params:{
				    'typeId':2,//1：消息通知
			        'orderType':2 //2:按照热度展示
			       }
		   }).success(function(response_message){
		   	$scope.message = response_message.data;
		   	//选取第一张图片
		   	$scope.img = response_message.data[0].coverImgUrl;
		   })
//		文化快讯右侧资讯排行接口读取,左侧图片选取读取接口前三个
        $http({
        	url:wenhuaju+'news/list/top',
        	method:'POST',
        	params:{
        		   'typeId':1,//1：消息通知
			       'orderType':1, //2:按照热度展示
			       'count':8
			      }
        	}).success(function(response_top){
        		$scope.news_top = response_top.data;
//      		var img = [];
//      		var news_top_length;
//      		if($scope.news_top==null||$scope.news_top=="")
//      		{
//      			news_top_length = 0;
//      		}
//      		else
//      		{
//      			news_top_length = $scope.news_top.length;
//      		}
////      		alert(news_top_length);
//      		if(news_top_length>3)
//      		{
//      			for(var i=0;i<3;i++)
//	        		{
//	        		    img[i] = response_top.data[i].coverImgUrl;  
//	        		}
//	        		$scope.imgthree = img;
//      		}
//      		else
//      		{
//      			for(var i=0;i<news_top_length;i++)
//      			{
//      				 img[i] = response_top.data[i].coverImgUrl;  
//      			}
//      			for(var i=news_top_length;i<3;i++)
//      			{
//      				img[i] = "images/3.png";
//      			}
//      			$scope.imgthree = img;
//      		}
                //文化资讯首页顶部图片的读取
		        	$http({
					url:wenhuaju+'/news/list/cover',
					method:'POST',
					params:{
						    'typeId':1  //1：消息通知
					       }
				   }).success(function(response_img){
				   	$scope.img = response_img.data;
				   })

        	})

})
cultureadvisoryapp.directive('repeatFinish',function(){
	return{
		link: function(scope,element,attr){
			if(scope.$last == true){
//				alert(1);
				//鼠标经过图片展示效果
				$(".newshover").hover(function(){
		//	    	alert(1);
			    	var self  = this;
			    	$(".newshover").removeClass("ad-con-leftbg");
			    	$(self).addClass("ad-con-leftbg");
			    },function(){
			    	$(self).removeClass("ad-con-leftbg");
			    })
			}
		}
	}
})