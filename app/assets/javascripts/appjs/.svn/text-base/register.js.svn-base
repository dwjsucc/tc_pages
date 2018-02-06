//定义全局变量
var token = "";
var register_name;
var register_sex;
var register_education;
var register_address;
var register_phone;
var register_message;
var register_loginpassword;
var register_passwordok;
var register_message1;
//企业信息变量定义
var register_company_name;
var register_company_first;
var register_company_second;
var register_company_address;
var registera = angular.module('register_app',[]);
registera.controller("register_controller",function($scope,$http){
	//注册点击事件
	$scope.register = function()
	{
	    if($("#companyregist").css("background-color")=="rgb(221, 221, 221)")
	    {
	    	register_name = $(".register_name").val();
			register_sex = $("input[name=sex]:checked").parent().text();
			register_education = $(".registinfoedu").find('select option:selected').text();
			register_address = $(".registinfocity").eq(0).find('select option:selected').text();
			register_phone = $(".registinfogray").eq(0).find('input').val();
			register_message = $(".registinfogray").eq(1).find('input').val();
			register_loginpassword = $(".registinfogray").eq(2).find('input').val();
			register_passwordok = $(".registinfogray").eq(3).find('input').val();
			if(register_sex == "女")
			{
				register_sex = 2;
			}
			else if(register_sex == "男")
			{
				register_sex = 1;
			}
			else
			{
				alert("请选择性别");
			}
			if(register_loginpassword!=register_passwordok)
			{
				alert("密码不一致");
			}
	        $http({
	        	url:wenhuaju+"/user/register",
	        	method:'POST',
	        	params:{
	        		'phone':register_phone,
	        		'code':register_message,
	        		'password':register_loginpassword,
	        		'realName':register_name,
	        		'gender':register_sex,
	        		'education':register_education,
	        		'location':register_address,
	        		'userType':0 //表示用户
	        	}
	        }).success(function(response){
	        	$scope.register = response.message;
	        	alert($scope.register);
	        	if($scope.register=="登录成功")
	        	{
	        	   window.location.href="index.html";
	        	}
	        	else if($scope.register=="验证码已过期")
	        	{
	        		alert("验证码已过期");
	        	}
	        	else if($scope.register=="该手机号已被注册")
	        	{
	        		alert("该手机号已被注册");
	        	}
	        	else if($scope.register =="验证码不正确")
	        	{
	        		alert("验证码不正确");
	        	}
	        	else
	        	{
	        		alert("注册失败");
	        	}
	        });
	    }
	     else
	     {
	     	//企业用户注册
		    	register_company_name = $(".register_company_name").val();
		    	register_company_first = $(".registinfocity").eq(1).find('select option:selected').text();
		    	register_company_second = $(".registinfocity").eq(2).find('select option:selected').text();
		    	register_company_address = $(".registinfocity").eq(3).find('select option:selected').text();
		    	register_phone = $(".registinfogray").eq(0).find('input').val();
				register_message = $(".registinfogray").eq(1).find('input').val();
				register_loginpassword = $(".registinfogray").eq(2).find('input').val();
				register_passwordok = $(".registinfogray").eq(3).find('input').val();
				register_company_first = $scope.selectedCompany.id;
				register_company_second = $scope.selectedSecond.id;
				$http({
					url:wenhuaju+"/user/register",
					method:'POST',
					params:{
						'phone':register_phone,
		        		'code':register_message,
		        		'password':register_loginpassword,
		        		'location':register_company_address,
		        		'userType':1,
		                'companyName':register_company_name,
		                'firstTypeId':register_company_first,
		                'secondTypeId':register_company_second,
		//              'registrationCode':
					}
				}).success(function(response_company){
					$scope.register_company = response_company.message;
					alert($scope.register_company);
					if($scope.register_company=="登录成功")
					{
						window.location.href="index.html";
					}
					else
					{
						alert("企业注册失败");
					}
				});
	     }
	}
	

    
    
    //获取验证码
	$scope.message = function()
	{
	    register_phone = $(".registinfogray").eq(0).find('input').val();
	    //如果手机号为空
//	    	alert(1);
	    	$http({
	    		url:wenhuaju+"/phoneCode/send",
	    		method:'POST',
	    		params:{
	    			'phone':register_phone,
	    			'operation':'user_reg'
	    		}
	    	}).success(function(response){
//	    		alert(1);
	    		$scope.message = response.message;
	    		alert($scope,message);
//	    		if($scope.message == "请勿在60秒内重复发送")
//	    		{
//	    		    alert("请勿在60秒内重复发送");
//	    		}
	    	});
	}
    
    //获取企业类别
    $http({ 
    	url:wenhuaju+"/user/type",
    	method:'POST',
    	params:{}
    }).success(function(response_ComType){
    	$scope.Company_type = response_ComType.data;
      	$scope.selectedCompany=response_ComType.data[0];
      	$scope.selectedSecond = response_ComType.data[0].secondType[0];
    })
});
