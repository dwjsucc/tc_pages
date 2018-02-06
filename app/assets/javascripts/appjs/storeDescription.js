
var storeDescriptionapp = angular.module('storeDescription',['CommonApp']);
storeDescriptionapp.controller('storeDescriptioncontroller', function ($scope,$http,URLParam) {
    var objid=URLParam.getParams();
    $http({
        url: wenhuaju + '/goods' ,
        method: 'POST',
        params: {
            'id':objid.id
        }
    }).success(function (response) {
        $scope.goodsName = response.data;
        $scope.coverImgUrl = response.data.coverImgUrl;
        $scope.minOriginalPrice = response.data.minOriginalPrice;
        $scope.minUsePoint = response.data.minUsePoint;
        $scope.minGoodsPoint = response.data.minGoodsPoint;
        $scope.pointCanBuy = response.data.pointCanBuy;
        $scope.minCurrentPrice = response.data.minCurrentPrice;
        $scope.goodsDetail = response.data.goodsDetail;
        $scope.goodsIntro = response.data.goodsIntro;
        $scope.specificationList = response.data.specificationList;

        $('.testBuy').attr('href','buygoods.html#'+$scope.goodsName.id);

        $scope.buy = function (id) {
            var buy_Id = id;
            $('.testBuy').attr('href','buygoods.html#'+$scope.goodsName.id+buy_Id);
        };
      //点击立即购买事件
       $scope.Gobuy = function(obj)
        {
        	//获取商品的信息,个数
        	var num = $(".buyacotDiv").find('span').eq(1).text();
        	//获取商品信息，名称
        	var name = $(".rightGroup1").text();
        	//获取商品名称，单价
        	var price = $(".price").text();
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
    });
});
//渲染完后执行的函数
storeDescriptionapp.directive('repeatFinish',function(){
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