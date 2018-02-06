//定义全局变量
var token = "";
var cultureadvisorydetail = angular.module('cultureadvisorydetailapp',['CommonApp']);
cultureadvisorydetail.controller('cultureadvisorydetailcontroller',function($http,$scope,URLParam){
	//接收传递的新闻动态的id参数；
	var objid=URLParam.getParams();
	$http({
		url:wenhuaju+"news/"+objid.id,
		method:'POST',
		params:{}
	}).success(function(response){
//		alert(1);
		$scope.news_detail = response.data;
	});
	
	//右侧热门推荐读取接口
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
        	});
})
