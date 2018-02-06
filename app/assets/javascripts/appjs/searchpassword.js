//定义全局变量
var token="";
var resetphone;
var message;
var resetpassword;
var resetpassword_ok;
var searchpassword = angular.module('searchpassword_app',[]);
searchpassword.controller('searchpassword_controller',function($scope,$http){
	$scope.resetpassword = function(){
		resetphone = $(".reset_phone").val();
		message = $(".reset_message").val();
		resetpassword = $(".reset_password").val();
		resetpassword_ok = $(".reset_password_ok").val();
		if(resetpassword!=resetpassword_ok) 
		{
			alert("密码不一致");
		}
		else
		{
			$http({ 
			url:wenhuaju+"/user/forgetPassword",
			method:'POST',
			params:{
				'phone':resetphone,
				'code':message,
				'password':resetpassword
			}
			}).success(function(response){
				$scope.resetpas = response.message;
				alert($scope.resetpas);
				if($scope.resetpas=="success")
				{
					window.location.href="login.html";
				}
//				else
//				{
//					alert("找回密码失败");
//				}
			});
		}
		
	}
	//验证码点击事件
	$scope.message = function()
	{
		resetphone = $(".reset_phone").val();
		$http({
			url:wenhuaju+"/phoneCode/send",
			method:'POST',
			params:{
				'phone':resetphone,
				'operation':"user_forget_pwd"
			}
		}).success(function(response_yzm){
			$scope.reset_yzm = response_yzm.code;
			if($scope.reset_yzm==1)
			{
				alert("验证码发送成功");
			}
			else if($scope.reset_yzm==2)
			{
				alert("请勿在60秒内重复发送");
			}
			else
			{
				alert("系统繁忙");
			}
		});
	}
	
});
