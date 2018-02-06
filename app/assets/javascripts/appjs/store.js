
var storeapp = angular.module('store',[]);
storeapp.controller('storecontroller', function ($scope,$http) {
        $http({
            url:wenhuaju+'/goods/type/listSecond',
            method:'POST',
            params:{
                'fatherId':5 //5
            }
        }).success(function(response){
            $scope.listSeconds = response.data;

        });

//分页
        $scope.p_pernum=12;
        $scope.p_current=1;
        $scope.p_all_page=0;
        $scope.pages=[];
        $scope.search_content;
        var _get=function(page,size,id_get,callback){
        	//获取输入框内容
        	search_content = $(".museum_search").val();
            $(".museum_nomore").css('display','none');
            $(".businesscon-page").css('display','block');
            //首次加载显示页数及第一页内容
            $http({
                url:wenhuaju+'/goods/list/count',
                method:'POST',
                params:{
//                  'pageNumber':1,
                    'pageSize':12,
                    'goodsTypeId':5, //5
                    'goodsTypeId2':id_get,
                    'goodsName':search_content
                }
            }).success(function(response_all_page){
                $scope.p_all_page = response_all_page.data;
            });

            $http({
                url:wenhuaju+"/goods/list",
                method:"POST",
                params:{
                    'pageNumber':page,
                    'pageSize':size,
                    'goodsTypeId':5, //5
                    'goodsTypeId2':id_get,
                    'orderType':2,//按照积分降序排列
                    'goodsName':search_content
                }
            }).success(function(response){
                $scope.goods = response.data;
                var length;
                if($scope.goods==""||$scope.goods==null) {
                    length=0;
                } else {
                    length = $scope.goods.length;
                }
                if(length==0) {
                    $(".museum_nomore").css('display','block');
                    $(".businesscon-page").css('display','none');
                }
                $scope.p_current=page;
                reloadPno();
                callback();
                var a2=true;
                $("#jifen").click(function(){
                	//获取输入框内容
        	         search_content = $(".museum_search").val();
        	         var id_imgs = $(".businesscon-search").find('img').attr("id");
        	        if(id_imgs==undefined||id_img==null||id_img=="")
		        	{
		        		id_imgs =0;
		        	}
                    if(a2===true){
                        $("#jifen").attr("class","glyphicon glyphicon-arrow-up");
                        a2 = false;
                        $http({
                            url:wenhuaju+"/goods/list",
                            method:"POST",
                            params:{
                                'pageNumber':page,
                                'pageSize':size,
                                'goodsTypeId':5, //5
                                'goodsTypeId2':id_imgs,
                                'orderType':1,//按照升序排列
                                'goodsName':search_content
                            }
                        }).success(function (response) {
                            $scope.goods = response.data;
                        })
                    }else{
                        $("#jifen").attr("class","glyphicon glyphicon-arrow-down");
                        a2 = true;
                        $http({
                            url:wenhuaju+"/goods/list",
                            method:"POST",
                            params:{
                                'pageNumber':page,
                                'pageSize':size,
                                'goodsTypeId':5, //5
                                'goodsTypeId2':id_imgs,
                                'orderType':2,//按照升序排列
                                'goodsName':search_content
                            }
                        }).success(function (response) {
                            $scope.goods = response.data;
                        })
                    }
                });
            });
            //首页
            $scope.p_index = function(){
                $scope.load_page(1);
            };
            //尾页
            $scope.p_last = function(){
                $scope.load_page($scope.p_all_page);
            };
            //加载某一页
            $scope.load_page = function(page){
                _get(page,$scope.p_pernum,id_get,function(){ });
            };
            //初始化页码
            var reloadPno = function(){
                $scope.pages=calculateIndexes($scope.p_current,$scope.p_all_page,8);
            };
            //分页算法
            var calculateIndexes = function (current, length, displayLength) {
                var indexes = [];
                var start = Math.round(current - displayLength / 2);
                var end = Math.round(current + displayLength / 2);
                if (start <= 1) {
                    start = 1;
                    end = start + displayLength - 1;
                    if (end > length - 1) {
                        end = length;
                        start=end-displayLength+1;
                    }
                }
                if (end > length - 1) {
                    end = length;
                    start = end - displayLength + 1;
                    if (start <= 1) {
                        start = 1;
                    }
                }
                for (var i = start; i <= end; i++) {
                    indexes.push(i);
                }
                return indexes;
            };

            $scope.listS = function (id) {
            	//id赋值
            	$(".businesscon-search").find('img').attr("id",id);
            	//输入框清空
            	$(".businesscon-search").find('input').val("");
                $http({
                    url:wenhuaju+'/goods/list/count',
                    method:'POST',
                    params:{
//                      'pageNumber':1,
                        'pageSize':12,
                        'goodsTypeId':5, //5
                        'goodsTypeId2':id,
//                      'goodsName':search_content
                    }
                }).success(function(response_all_page){
                    $scope.p_all_page = response_all_page.data;
                });
                $http({
                    url:wenhuaju+"/goods/list",
                    method:"POST",
                    params:{
                        'pageNumber':page,
                        'pageSize':size,
                        'goodsTypeId':5, //5
                        'goodsTypeId2':id,
                        'orderType':2,//2商品所需积分降序
//                      'goodsName':search_content
                    }
                }).success(function(response) {
                    $scope.goods = response.data;
                    var length;
                    if($scope.goods==""||$scope.goods==null)
                    {
                        length = 0;
                    }
                    else
                    {
                        length = $scope.goods.length;
                    }
                    if(length == 0){
                        $(".museum_nomore").css('display','block');
                        $(".businesscon-page").css('display','none');
                    }else{
                        $(".museum_nomore").css('display','none');
                        $(".businesscon-page").css('display','block');
                    }
                    $scope.p_current=page;
                    reloadPno();
                    callback();
//                  var a2=true;
//                  $("#jifen").click(function(){
//                  	//获取输入框内容
//      	            search_content = $(".museum_search").val();
//      	            var id_imgs = $(".businesscon-search").find('img').attr("id");
//                      if(a2===true){
//                          $("#jifen").attr("class","glyphicon glyphicon-arrow-up");
//                          a2 = false;
//                          $http({
//                              url:wenhuaju+"/goods/list",
//                              method:"POST",
//                              params:{
//                                  'pageNumber':page,
//                                  'pageSize':size,
//                                  'goodsTypeId':5, //5
//                                  'orderType':1,
//                                  'goodsTypeId2':id_imgs,
//                                  'goodsName':search_content
//                              }
//                          }).success(function (response) {
//                              $scope.goods = response.data;
//                          })
//                      }else{
//                          $("#jifen").attr("class","glyphicon glyphicon-arrow-down");
//                          a2 = true;
//                          $http({
//                              url:wenhuaju+"/goods/list",
//                              method:"POST",
//                              params:{
//                                  'pageNumber':page,
//                                  'pageSize':size,
//                                  'goodsTypeId':5, //5
//                                  'goodsTypeId2':id_imgs,
//                                  'orderType':2,
//                                  'goodsName':search_content
//                              }
//                          }).success(function (response) {
//                              $scope.goods = response.data;
//                          })
//                      }
//                  });
                });
                //上一页
                $scope.p_index = function(){
                    $scope.load_page(page-1);
                };
                //下一页
                $scope.p_last = function(){
                    $scope.load_page(page+1);
                };
                //加载某一页
                $scope.load_page = function(page){
                    _get(page,$scope.p_pernum,id,function(){ });
                };
                //初始化页码
                var reloadPno = function(){
                    $scope.pages=calculateIndexes($scope.p_current,$scope.p_all_page,8);
                };
                //分页算法
                var calculateIndexes = function (current, length, displayLength) {
                    var indexes = [];
                    var start = Math.round(current - displayLength / 2);
                    var end = Math.round(current + displayLength / 2);
                    if (start <= 1) {
                        start = 1;
                        end = start + displayLength - 1;
                        if (end > length - 1) {
                            end = length;
                            start=end-displayLength+1;
                        }
                    }
                    if (end > length - 1) {
                        end = length;
                        start = end - displayLength + 1;
                        if (start <= 1) {
                            start = 1;
                        }
                    }
                    for (var i = start; i <= end; i++) {
                        indexes.push(i);
                    }
                    return indexes;
                };
            };

            $('.all').click(function () {
                $http({
                    url:wenhuaju+"/goods/list",
                    method:"POST",
                    params:{
                        'pageNumber':page,
                        'pageSize':size,
                        'goodsTypeId':5, //5
                        'orderType':2,
                        'goodsName':search_content
                    }
                }).success(function(response) {
                    $scope.goods = response.data;
                    $scope.listS("");
                })
            })

        };
        $scope.fun=function(id_fun){
            search_content = $(".museum_search").val();
            _get($scope.p_current,$scope.p_pernum,id_fun,function(){
            })

        };
        //首次加载，默认为全部“”；
        $scope.fun("");
        $scope.museum_search = function()
        {
        	//获取id
        	var id_img = $(".businesscon-search").find('img').attr("id");
        	if(id_img==undefined||id_img==null||id_img=="")
        	{
        		id_img ="";
        	}
            $scope.p_pernum=12;
            //变量
            $scope.p_current=1;
            $scope.p_all_page=0;
            $scope.pages=[];
            $scope.fun(id_img);
        }
});