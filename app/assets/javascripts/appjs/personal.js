
var personalapp = angular.module('personal',[]);
personalapp.controller('personalcontroller', function ($scope, $http) {
    $http({
        url:wenhuaju+'/user/checkToken',
        method:'POST',
        params:{
            'token':'40b7ff2395dc70c6491d83bcb1cbc57512f0e1dd'
        }
    }).success(function (response) {
        $scope.itmes = response.data;
        $scope.token = response.data.token;
        $scope.nickName = response.data.nickName;
        $scope.phone = response.data.phone;
        $scope.email = response.data.email;
        $scope.gender = response.data.gender;
        $scope.education = response.data.education;
        if($scope.gender==1){
            $('.male').attr('checked','checked');
        }else if($scope.gender==2){
            $('.fmale').attr('checked','checked')
        }

        //$scope.$watch('nickName', function () {
            var nickName = $scope.nickName;
            var phone = $scope.phone;
            var email = $scope.email;
            $scope.Yes = function () {
                $http({
                    url:wenhuaju+'/user/update',
                    method:'POST',
                    params:{
                        'token':$scope.token,
                        'nickName':nickName,
                        'phone':phone,
                        'email':email
                    }
                }).success(function (response) {
                    $scope.yes = response.data;
                    $scope.nickName = response.data.nickName;
                    $scope.phone = response.data.phone;
                    $scope.email = response.data.email;
                });
            };
            $scope.No = function () {
                $http({
                    url:wenhuaju+'/user/checkToken',
                    method:'POST',
                    params:{
                        'token':$scope.token
                    }
                }).success(function (response) {
                    $scope.itmes = response.data;
                    $scope.nickName = response.data.nickName;
                    $scope.phone = response.data.phone;
                    $scope.email = response.data.email;
                    $scope.gender = response.data.gender;
                    $scope.education = response.data.education;
                });
            }


        $scope.confirm = function () {
            var oldpassword = $scope.oldpassword;
            var newpassword = $scope.newpassword;
            var confirmpassword = $scope.confirmpassword;
            if(newpassword==confirmpassword){
                $http({
                    url:wenhuaju+'/user/changePassword',
                    method:'POST',
                    params:{
                        'token':$scope.token,
                        'oldPassword':oldpassword,
                        'password':newpassword
                    }
                }).success(function (response) {
                    $scope.itmes = response.data;
                });
            }else{
                alert('请确认密码');
            }
        };
        $scope.cancel = function () {
            $('.input').val('');
        }
    });

    //$http({
    //    url:wenhuaju+'/uploadFile',
    //    method:'POST',
    //    params:{
    //        'token':'612933c5583b9356e2f68a483243be2785d8bc5d',
    //        'file':''
    //    }
    //}).success(function (response) {
    //    $scope.itmes = response.data;
    //});
});