var culcompassDes = angular.module('culcompassDes',[]);
culcompassDes.controller('culcompassDesController', function ($scope,$http) {
        //获取首页轮播图
        $http({
            url:wenhuaju+'scenic?id='+window.location.hash.substring(1),
            method:'GET'
        }).success(function(response){
            console.log(response.data.id);
            $scope.culdetail = response.data;
        });
        
    }
);
culcompassDes.filter(  
    'to_trusted', ['$sce', function ($sce) {  
        return function (text) {  
            return $sce.trustAsHtml(text);  
        }  
    }]  
)  