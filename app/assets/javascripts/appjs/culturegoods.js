
//文化商城详情页

var culdesapp = angular.module('culdes',['CommonApp']);
culdesapp.controller('culdescontroller', function ($scope,$http,URLParam) {
    var objid=URLParam.getParams();
    $http({
        url:wenhuaju+'/goods',
        method:"POST",
        params:{
            'id':objid.id //12
        }
    }).success(function (response_culdes) {
        $scope.goodsName = response_culdes.data;
        $scope.goodsIntro = response_culdes.data;
        $scope.minCurrentPrice = response_culdes.data;
        $scope.coverImgUrl = response_culdes.data;
        $scope.imageLists = response_culdes.data.imageList;
        $scope.specificationLists = response_culdes.data.specificationList;

//      $scope.buy = function (id) {
//          var buy_Id = id;
//
//          $('.testBuy').attr('href','ticketBuy.html#'+$scope.goodsName.id+'#'+buy_Id);
//      };
        $scope.Gobuy = function(obj)
        {
        	//获取商品的信息,个数
        	var num = $(".buyacot").find('span').eq(1).text();
        	//获取商品信息，名称
        	var name = $(".busdetail-right").find('span').eq(0).text();
        	//获取商品名称，单价
        	var price = $(".artprice").find("span").eq(1).text();
        	//判断是否选中样式列别
        	var len = $(".sltclrDiv1").find('span').length;
        	//获取选中商品列别的id
        	var spe_id;
        	var count=0;
        	for(var i=0;i<len;i++)
        	{
        		if($(".sltclrDiv1").find('span').eq(i).css("border")=="1px solid rgb(255, 0, 0)")
        		{
        			spe_id = $(".sltclrDiv1").find('span').eq(i).attr("id");
        			break;
        		}
        		else
        		{
        			count++;
        		}
        	}
        	if(count==len)
        	{
        		alert("您还没有选择商品类别")
        	}
        	else
        	{
        		window.location.href="ticketBuy.html?id="+obj+"&spe_id="+spe_id+"&num="+num+"&name="+name+"&price="+price;
        	}
        }
        //加载评论页数,后期需要修改
        $http({
            url:wenhuaju+'/goods/comment/list/count',
            method:"POST",
            params:{
                'id':objid.id,  //12
                'pageSize':5,
//              'pageNumber':1
            }
        }).success(function (response) {
            $scope.comments = response.data
        });
        //加载评论列表，后期需要修改
        $http({
            url:wenhuaju+'/goods/comment/list',
            method:"POST",
            params:{
                'id':objid.id, //12
                'pageSize':5,
                'pageNumber':1
            }
        }).success(function (response_comment) {
            $scope.comments = response_comment.data
        })
    })
});
culdesapp.directive('repeatFinish',function(){
	 return {
        link: function(scope,element,attr){
        	//如果执行完成
            if(scope.$last == true){
            	$(".sltclrDiv1").find("span").on("click",function(){
				$(this).css("border","1px solid red");
				$(this).siblings("span").css("border","1px solid black");
			});
			var mynumber = parseFloat($(".artNum").html());
			$(".minus").on("click",function(){
				if(mynumber > 1){
					mynumber --;
				}
				$(".artNum").html(mynumber);
			});
			$(".add").on("click",function(){
				mynumber ++;
				$(".artNum").html(mynumber);
			});
            }
           }
       }
});
//文化活动详情
var culactivedesapp = angular.module('culactivedes',['CommonApp']);
culactivedesapp.controller('culactivedescontroller', function ($scope, $http, URLParam) {
    var objid=URLParam.getParams();
    $http({
        url:wenhuaju+'/activity',
        method:"POST",
        params:{
            'id':objid.id //12
        }
    }).success(function (response_activedes) {
        $scope.name = response_activedes.data;
        $scope.intro = response_activedes.data;
        $scope.coverImgUrl = response_activedes.data;
        $scope.startTime = response_activedes.data;
        $scope.endTime = response_activedes.data;
        $scope.address = response_activedes.data;
        $scope.detail = response_activedes.data.detail;
        $scope.detailHtmlUrl = response_activedes.data;
        //$('.artconImg').after($scope.detail);
        //加载评论页数
        $http({
            url:wenhuaju+'/activity/comment/list/count',
            method:"POST",
            params:{
                'id':objid.id,  //12
                'pageSize':5,
                'pageNumber':1
            }
        }).success(function (response) {
            $scope.comments = response.data
        });
        //加载评论列表
        $http({
            url:wenhuaju+'/activity/comment/list',
            method:"POST",
            params:{
                'id':objid.id, //12
                'pageSize':5,
                'pageNumber':1
            }
        }).success(function (response_comment) {
            $scope.comments = response_comment.data
        })
        //购买点击函数
        $scope.Gobuy = function(obj)
        {
        	//获取商品的信息,个数
        	var num = $(".buyacot").find('span').eq(1).text();
        	//获取商品信息，名称
        	var name = $(".busdetail-right").find('span').eq(0).text();
        	//获取商品名称，单价
        	var price = $(".artprice").find("span").eq(1).text();
        	//判断是否选中样式列别
        	var len = $(".sltclrDiv1").find('span').length;
        	//获取选中商品列别的id
        	var spe_id;
        	var count=0;
        	for(var i=0;i<len;i++)
        	{
        		if($(".sltclrDiv1").find('span').eq(i).css("border")=="1px solid rgb(255, 0, 0)")
        		{
        			spe_id = $(".sltclrDiv1").find('span').eq(i).attr("id");
        			break;
        		}
        		else
        		{
        			count++;
        		}
        	}
        	if(count==len)
        	{
        		alert("您还没有选择商品类别")
        	}
        	else
        	{
        		window.location.href="ticketBuy.html?id="+obj+"&spe_id="+spe_id+"&num="+num+"&name="+name+"&price="+price;
        	}
        }
    })
});
//渲染完成执行的函数
culactivedesapp.directive('repeatFinish',function(){
	 return {
        link: function(scope,element,attr){
        	//如果执行完成
            if(scope.$last == true){
            	$(".sltclrDiv1").find("span").on("click",function(){
				$(this).css("border","1px solid red");
				$(this).siblings("span").css("border","1px solid black");
			});
			var mynumber = parseFloat($(".artNum").html());
			$(".minus").on("click",function(){
				if(mynumber > 1){
					mynumber --;
				}
				$(".artNum").html(mynumber);
			});
			$(".add").on("click",function(){
				mynumber ++;
				$(".artNum").html(mynumber);
			});
            }
           }
       }
});