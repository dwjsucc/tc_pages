
var trainapp = angular.module('train',[]);
trainapp.controller('traincontroller', function ($scope,$http) {

        $http({
            url:wenhuaju+'/activity/list',
            method:"POST",
            params:{
                'trainingType':1,
                'pageSize':12,
                'pageNumber':2
            }
        }).success(function(response){
            $scope.trainlists = response.data;
        });

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

    }
);