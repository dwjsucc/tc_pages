
var traindetailapp = angular.module('traindetail',['CommonApp']);
traindetailapp.controller('traindetailcontroller', function ($scope, $http ,URLParam) {
    var objid=URLParam.getParams();
    $http({
        url:wenhuaju+'/activity',
        method:"POST",
        params:{
            'id':objid.id
        }
    }).success(function (response) {
        $scope.items = response.data;
        $scope.name = response.data.name;
        $scope.startTime = response.data.startTime;
        $scope.endTime = response.data.endTime;
        $scope.address = response.data.address;
        $scope.detail = response.data.detail;
        $scope.coverImgUrl = response.data.coverImgUrl;
        $('.traindetail').after($scope.detail);
    });
});