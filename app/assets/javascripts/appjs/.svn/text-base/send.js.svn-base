var bindapp = angular.module('bind',[]);
bindapp.controller('bindcontroller', function ($scope, $http) {
    $scope.send = function () {
        var phone = $scope.phone;
        $http({
            url:wenhuaju+'/phoneCode/send',
            method:"POST",
            params:{
                'phone':phone,
                'operation':'user_reg'
            }
        }).success(function (response) {
            $scope.sends = response.message;
        });
    };
    $scope.queding = function () {
        var phone = $scope.phone;
        var code = $scope.codes;
        $http({
            url:wenhuaju+'/phoneCode/verify',
            method:"POST",
            params:{
                'phone':phone,
                'code':code,
                'operation':'user_reg'
            }
        }).success(function (response) {
            $scope.send = response.data;
        });
    }
});