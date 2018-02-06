var trainapp = angular.module('train',[]);
trainapp.controller('traincontroller', function($scope, $http) {
    //配置
    $scope.p_pernum=12;   //每一页显示的条目数
    //变量
    $scope.p_current=1;
    $scope.p_all_page=0;
    $scope.pages=[];
    $scope.search_content;
    var _get=function(page,size,callback){
        $(".museum_nomore").css('display','none');
        $(".businesscon-page").css('display','block');
        //首次加载显示页数及第一页内容
        $http({
            url:wenhuaju+'/activity/list/count',
            method:'POST',
            params:{
                'trainingType':1,
                'pageSize':12,
                'name':search_content
            }
        }).success(function(response_all_page){
            $scope.p_all_page = response_all_page.data;
        });

        $http({
            url:wenhuaju+"/activity/list",
            method:"POST",
            params:{
                'pageNumber':page,
                'pageSize':size,
                'trainingType':1,
                'name':search_content
            }
        }).success(function(response){
            $scope.trainlists = response.data;

            var length;
            if($scope.trainlists==""||$scope.trainlists==null)
            {
                length=0;
            }
            else
            {
                length = $scope.trainlists.length;
            }
            if(length==0)
            {
                $(".museum_nomore").css('display','block');
                $(".businesscon-page").css('display','none');
            }
//		alert($scope.museum_list.length);
            $scope.p_current=page;
            reloadPno();
            callback();
        });

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
    }
    $scope.fun=function(){
        search_content = $(".museum_search").val();
        _get($scope.p_current,$scope.p_pernum,function(){
            //alert("我是第一次加载");
        })
    }
    $scope.fun();
    $scope.museum_search = function()
    {
        $scope.p_pernum=12;   //每一页显示的条目数
        //变量
        $scope.p_current=1;
        $scope.p_all_page=0;
        $scope.pages=[];
        $scope.fun();
    }
    $http({
        url:wenhuaju+'/activity/list/cover',
        method:'POST',
        params:{
            'trainingType':1
        }
    }).success(function (response) {
        $scope.bigImg = response.data.big;
        $scope.bigName = response.data.big;
        $scope.smallImg = response.data.small;
        $scope.smallName = response.data.small;
    });
})