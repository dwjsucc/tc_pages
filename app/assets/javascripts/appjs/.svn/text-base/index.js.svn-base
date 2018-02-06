var indexapp = angular.module('index',[]);
indexapp.controller('indexcontroller', function ($scope,$http) {
        //获取首页轮播图
        $http({
            url:wenhuaju+'/slideShow/list',
            method:'POST'
        }).success(function(response){
            $scope.items = response.data;
            $scope.imgUrl = response.data[0].imgUrl;
            $scope.imgUrl1 = response.data[1].imgUrl;
            $scope.imgUrl2 = response.data[2].imgUrl;
        });
        //获取首页天气信息
        $http({
            url:wenhuaju+'/weather',
            method:'POST'
        }).success(function (response_weather) {
            $scope.weather = response_weather.data.weather;
            $scope.fengXiang = response_weather.data.fengXiang;
            $scope.quality = response_weather.data.quality;
            $scope.wendu = response_weather.data.wendu;
            $scope.high = response_weather.data.high;
            $scope.low = response_weather.data.low;
        });

        $http({
            url:wenhuaju+'/news/type/list',
            method:'POST'
        }).success(function (response) {
            $scope.typeid = response.data[2];
            $(".chuangyi").click(function(){
                $("iframe").attr("src","museum.html");
            });
        });
    }
);



