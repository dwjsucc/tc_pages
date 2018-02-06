//定义全局变量
var token = "";
var moviedes = angular.module('moviedes_app',['CommonApp']);
moviedes.controller("moviedes_controller",function($scope,$http,URLParam){
	//接收首页传递的参数
	var obj_id = URLParam.getParams();
	//读取电影详情的接口
	$http({  
		url:"http://localhost:8080/factory/MaoYan/movie_detail",
		method:'POST',
		params:{
			'id':obj_id.id  
		}
	}).success(function(response){
		$scope.movie_detail = response.detail.data.MovieDetailModel;
	}).error(function(){
		alert("访问错误");
	});
});
