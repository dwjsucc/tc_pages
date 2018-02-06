//定义全局变量
var token = "";
var page = 1;
var museumapp = angular.module('museumdetail_app',['CommonApp']);
museumapp.controller('museumdetail_controller',function($scope,$http,URLParam){
	//接收参数
	var objid=URLParam.getParams();
	//读取文化博物详情接口
	$http({
	   url:wenhuaju+"/news",
	   method:'POST',
	   params:{
	   	'id':objid.id
	   }
	}).success(function(response_detail){
		$scope.museum_details = response_detail.data;
		$scope.content = response_detail.data.content;
		$('.test').after($scope.content);
	});
	//读取热门列表
	$http({
		url:wenhuaju+"/news/list/top",
		method:'POST',
		params:{
			'typeId':4,
			'count':9,
			'orderType':2 //按照热度进行排行
		}
	}).success(function(response_top){
		$scope.museum_detail_tops = response_top.data;
	});
});
