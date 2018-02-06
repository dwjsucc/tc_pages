//定义全局变量
var token= "";
var index = angular.module('indexmid_app',[]);
index.directive('repeatFinish',function(){
	 return {
        link: function(scope,element,attr){
        	//如果执行完成
            if(scope.$last == true){
            	var imgheight=$("#imgheight").height()+'px';
		//      alert(imgheight);
		        $("#ulheight").css({"height":imgheight,"overflow":"hidden"});
		        var contentheight=$("#contentheight").height();
		        var prevtop=(contentheight-123)/2+'px';
		        $("#prev").css({"top":prevtop});
		        $("#next").css({"top":prevtop});
		        
		         var piccovers=$(".piccover");
		        var showposter3=$(".show-poster-3");
		        showposter3.hover(function(){
		            var index = showposter3.index(this);
		            $(piccovers[index]).animate({
		                height:"100%"
		            },500);
		        },function(){
		            piccovers.animate({
		                height:"0"
		            },100);
		        });
		        var piccoverdivs=$(".piccoverdiv");
		        var showposter3height=showposter3.height();
		        var showposter3width=showposter3.width();
		        var piccoverdivheight=piccoverdivs.height();
		        var piccoverdivwidth=piccoverdivs.width();
		        var piccoverdivleft=(showposter3width-piccoverdivwidth)/2+'px';
		        var piccoverdivtop=(showposter3height-piccoverdivheight)/2+'px';
		        piccoverdivs.css({"marginTop":piccoverdivtop,"marginLeft":piccoverdivleft});
            }
           }
       }
});
index.controller("indexmid_controller",function($scope,$http){
	//读取猫眼API电影接口  
	$http({
		url:"http://localhost:8080/factory/MaoYan/movie",
		method:'POST',
		params:{
			'num':6
		}
	}).success(function(response){
		$scope.content = response.content.data.movies; 
		var length;
		var movie = [];
		if($scope.content==""||$scope.content==null)
		{
			length=0;
		}
		else
		{
			length = $scope.content.length;
		}
		if(length>=1)
		{
			for(var i=0;i<length-1;i++)
			{
				movie[i] = $scope.content[i+1]
			}
			$scope.movie = movie;
		}
		
	}).error(function(){
		alert("访问错误");
	});
});
