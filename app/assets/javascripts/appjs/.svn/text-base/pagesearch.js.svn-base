
	//文化博物列表的搜索功能
museumapp.controller('museum_controller', function($scope, $http) {
	$scope.p_pernum=12;   //每一页显示的条目数
  //变量
 $scope.p_current=1;
 $scope.p_all_page=0;
 $scope.pages=[];
 $scope.search_content;
$scope.museum_search = function()
{
	alert(1);
//		page = 1;
		search_content = $(".museum_search").val();
		 var _get=function(page,size,callback){
			//如果搜索为空
			if(search_content==""||search_content==null)
			{
				$(".museum_nomore").css('display','none');
				//求页数
				$http({
		  		url:wenhuaju+"/news/list/count",
		  		method:'POST',
		  		params:{
		  			'pageSize':12, //每页12条数据
		  			'typeId':1,//文化博物ID
		  		}
		  	}).success(function(response_all_page){
		  		$scope.p_all_page = response_all_page.data;
		  	});
				//显示列表第一页内容
				$http({
					url:wenhuaju+"/news/list",
					method:'POST',
					params:{
		  			'pageNumber':page,
		  			'pageSize':size,
		  			'typeId':1,  //文化博物，后期需要改（4）
		  			'orderType':1
		  		}
				}).success(function(response_museum){
					$scope.museum_list = response_museum.data;
					$scope.p_current=page;
		  		reloadPno();
		      callback();
				});
			}
			//如果搜索不为空
			else
			{
					$http({
		  		url:wenhuaju+"/news/list/count",
		  		method:'POST',
		  		params:{
		  			'pageSize':12, //每页12条数据
		  			'typeId':1,//文化博物ID
		  			'title':search_content
		  		}
		  	}).success(function(response_all_page){
		  		$scope.p_all_page = response_all_page.data;
		  	});
				//按照关键字显示内容
				$http({
					url:wenhuaju+"/news/list",
					method:'POST',
					params:{
						'typeId':1, //文化博物
						'pageNumber':page,//页码
						'pageSize':size,
						'title':search_content,//搜索关键字
						'orderType':1  //按照时间降序排列
					}
					}).success(function(response_museum){
					  //如果没有匹配的内容
					  if(response_museum.data==null||response_museum.data=="")
					  {
					  	$(".picitem1").css('display','none');
					  	$(".museum_nomore").css('display','block');
					  }
					  //如果有匹配的内容及显示
					  else
					  {
					  	 $scope.museum_list = response_museum.data;
					  }
				});
			}
		}
	}
  _get($scope.p_current,$scope.p_pernum,function(){
    //alert("我是第一次加载");
  }) 
  //首页  
  $scope.p_index = function(){  
    $scope.load_page(1);  
  }  
  //尾页  
  $scope.p_last = function(){  
    $scope.load_page($scope.p_all_page);  
  }  
  //加载某一页  
  $scope.load_page = function(page){  
    _get(page,$scope.p_pernum,function(){ });  
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
})