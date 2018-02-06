//定义全局变量
var token = "";
var user_name = "";
var user_password = "";
var loginapp = angular.module('login_app',[]);
loginapp.controller('login_controller',function($scope,$http){
	$scope.login_click = function()
	{
		user_name = $(".user_name").val();
		user_password = $(".user_password").val();
		$http({
			url:wenhuaju+"/user/login",
			method:'POST',
			params:{
				'phone':user_name,
				'password':user_password
			}
		}).success(function(response_login){
			$scope.login = response_login.message;
			alert($scope.login);
			if($scope.login=="登录成功")
			{
				window.location.href="index.html";
				
			}
//			else if($scope.login=="账号或密码不正确")
//			{
//				alert("账号或密码不正确");
//			}
//			else
//			{
//				alert("系统繁忙");
//			}
		});
	}
});
