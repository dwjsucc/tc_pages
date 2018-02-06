//定义全局变量
var token;
var name;
var excel = angular.module('excel_app',[]);
excel.controller("excel_controller",function($scope,$http){
	token = $.cookie('token');
	$(".submit").css("display",'block');
	$(".update").css("display",'none');
	$(".buzhou").css('display','block');
	if(token==undefined||token=='undefined')
	{
		alert("请先登录");
		window.top.cullogin();
		window.location.href="login.html";
		
	}
	else
	{
	name = $.cookie('name_1');
	
/************************删除对应的步骤数据*******************************/
$scope.delete_buzhou = function(number1)
{
	$http({
		url:rsc+"excel_buzhou/delete_buzhou",
		method:'POST',
		params:{
			'id_ReportNo':number1
		}
	}).success(function(response_buzhou1){
		$scope.message_buzhou_delete = response_buzhou1.message;
		if($scope.message_buzhou_delete=="success")
		{
			console.log("删除成功");
		}
		else
		{
			console.log($scope.message_buzhou_delete);
		}
	});
}
//*************************步骤中description的获取*******************/
$scope.descriptions = function()
{
	$scope.des="";
	for(var i=0;i<10;i++)
	{
		var standard = $(".excel_buzhou").eq(i).find('td').eq(0).text();
		var description = $(".excel_buzhou").eq(i).find('td').eq(1).text();
		var sample_inspected = $(".excel_buzhou").eq(i).find('td').eq(2).text();
		var count = $(".excel_buzhou").eq(i).find('td').eq(3).text();
		var defect_class = $(".excel_buzhou").eq(i).find('td').eq(4).text();
		//如果步骤没有了
		if(standard==""&&description==""&&sample_inspected==""&&count==""&&defect_class=="")
		{
			break;
		}
		else
		{
			if(description=="No Record"||description=="No record")
			{
				$scope.des = $scope.des+"";
			}
			else
			{
				$scope.des=$scope.des+"  "+description;
			}
		}
	}
	console.log($scope.des);
}

//***************************步骤中description更新事件******************/
$scope.description_update = function()
{
	$scope.des1="";
	for(var i=0;i<$scope.num;i++)
	{
		var standard = $(".excel_buzhou").eq(i).find('td').eq(0).text();
		var description = $(".excel_buzhou").eq(i).find('td').eq(1).text();
		var sample_inspected = $(".excel_buzhou").eq(i).find('td').eq(2).text();
		var count = $(".excel_buzhou").eq(i).find('td').eq(3).text();
		var defect_class = $(".excel_buzhou").eq(i).find('td').eq(4).text();
			if(description=="No Record"||description=="No record")
			{
				$scope.des1 = $scope.des1+"";
			}
			else
			{
				$scope.des1=$scope.des1+"  "+description;
			}
	}
	console.log($scope.des1);
}
/**************************步骤的获取事件**************************/
$scope.getbuzhou = function()
{
	var count=0;
	var count1=0;
	//获取ReportNo,name
	var reportno1 = $(".reportno1").text();
	//循环得到步骤数据
	for(var i=0;i<10;i++)
	{
		var standard = $(".excel_buzhou").eq(i).find('td').eq(0).text();
		var description = $(".excel_buzhou").eq(i).find('td').eq(1).text();
		var sample_inspected = $(".excel_buzhou").eq(i).find('td').eq(2).text();
		var count = $(".excel_buzhou").eq(i).find('td').eq(3).text();
		var defect_class = $(".excel_buzhou").eq(i).find('td').eq(4).text();
		//如果步骤没有了
		if(standard==""&&description==""&&sample_inspected==""&&count==""&&defect_class=="")
		{
			break;
		}
		else
		{
			count++;
			//读取插入接口
			$http({
				url:rsc+"excel_buzhou/insert_buzhou1",
				method:'POST',
				params:{
					'Standard':standard,
					'Description':description,
					'Sample_Inspected':sample_inspected,
					'Defect_count':count,
					'Defect_class':defect_class,
					'id_ReportNo':reportno1,
					'name':name
				}
			}).success(function(response_buzhou_update){
				count1++;
				$scope.message_buzhou_update = response_buzhou_update.message;
			});
		}
		
	}
	//如果插入全部成功
	if(count==count1)
	{
		alert("数据填写成功");
	}
	else
	{
		//删除插入的部分步骤数据
		$scope.delete_buzhou(reportno1);
		alert("数据填写失败，可以选择Excel表格解析形式");
	}
}

/****************************步骤的更新事件***********************/
$scope.update_buzhou = function(num)
{
	var count3=0;
	//先删除再添加
	$http({
		url:rsc+"excel_buzhou/delete_buzhou",
		method:'POST',
		params:{
			'id_ReportNo':num
		}
	}).success(function(response_buzhou1){
		$scope.message_buzhou_delete = response_buzhou1.message;
		if($scope.message_buzhou_delete=="success")
		{
			//首先获取步骤
			for(var j=0;j<$scope.num;j++)
			{
				var standard = $(".excel_buzhou").eq(j).find('td').eq(0).text();
				var description = $(".excel_buzhou").eq(j).find('td').eq(1).text();
				var sample_inspected = $(".excel_buzhou").eq(j).find('td').eq(2).text();
				var count = $(".excel_buzhou").eq(j).find('td').eq(3).text();
				var defect_class = $(".excel_buzhou").eq(j).find('td').eq(4).text();
				console.log(standard);
				console.log(description);
				console.log(sample_inspected);
				console.log(count);
				console.log(defect_class);
				//读取插入接口
					$http({
						url:rsc+"excel_buzhou/insert_buzhou1",
						method:'POST',
						params:{
							'Standard':standard,
							'Description':description,
							'Sample_Inspected':sample_inspected,
							'Defect_count':count,
							'Defect_class':defect_class,
							'id_ReportNo':num,
							'name':name
						}
					}).success(function(response_buzhou_update){
						count3++;
						if(count3==$scope.num)
						{
							alert("数据更新成功");
						}
					}).error(function(res){
						alert("步骤更新失败");
					});
			}
		}
		else
		{
			console.log($scope.message_buzhou_delete);
		}
	});
	
}

//*************************日期格式校验****************************/
$scope.datetime = function(date)
{
	var a = /^(\d{4})-(\d{2})-(\d{2})$/
	if (!a.test(date)) { 
	  alert("日期格式不正确!") 
	  $scope.type = 0;
	} 
	else {
		$scope.type=1;
	}
}

//*************************报表提交事件**************************/
	$scope.submits = function(objtype)
	{
		//获取要提交的内容
		var reportno1 = $(".reportno1").text();
		console.log(reportno1);
		var inspector1 = $(".inspector1").text();
		console.log(inspector1);
		var conclusion1 = $(".conclusion1").text();
		console.log(conclusion1);
		var date1 = $(".date1").text();
		console.log(date1);
		var reviewer1 = $(".reviewer1").text();
		console.log(reviewer1);
		var modelno1 = $(".modelno1").text();
		console.log(modelno1);
		var supplier1 = $(".supplier1").text();
		console.log(supplier1);
//		var mil1 = $(".mil1").text();
//		console.log(mil1);
		var revision1 = $(".revision1").text();
		console.log(revision1);
		var po1 = $(".po1").text();
		console.log(po1);
		var lotsize1 = $(".lotsize1").text();
		console.log(lotsize1);
		var samplesize1 = $(".samplesize1").text();
		console.log(samplesize1);
		var category1 = $('.category1').text();
		console.log(category1);
		var lotattribute1 = $(".lotattribute1").text();
		console.log(lotattribute1);
		var firmware1 = $(".firmware1").text();
		console.log(firmware1);
		var sampling1 = $(".sampling1").text();
		console.log(sampling1);
		var cri_AQL = $(".cri_AQL").text();
		console.log(cri_AQL);
		var cri_ACC = $(".cri_ACC").text();
		console.log(cri_ACC);
		var cri_Rej = $(".cri_Rej").text();
		console.log(cri_Rej);
		var unit = $(".unit").text();
		console.log(unit);
//		var unit1 = $(".unit1").text();
//		console.log(unit1);
		var maj_AQL = $(".maj_AQL").text();
		console.log(maj_AQL);
		var maj_ACC = $(".maj_ACC").text();
		console.log(maj_ACC);
		var maj_Rej = $(".maj_Rej").text();
		console.log(maj_Rej)
		var pack = $(".pack").text();
		console.log(pack);
//		var pack1 = $(".pack1").text();
//		console.log(pack1);
		var min_AQL = $(".min_AQL").text();
		console.log(min_AQL);
		var min_ACC = $(".min_ACC").text();
		console.log(min_ACC);
		var min_Rej = $(".min_Rej").text();
		console.log(min_Rej);
		var applicable = $(".applicable").text();
		console.log(applicable);
		var cri = $(".cri").text();
		console.log(cri);
		var maj = $(".maj").text();
		console.log(maj);
		var min = $(".min").text();
		console.log(min);
		var bom1 = $(".bom1").text();
		console.log(bom1);
		var eco1 = $(".eco1").text();
		console.log(eco1);
		var document1 = $(".document1").text();
		console.log(document1);
		console.log(name);
		//调用接口
		if(reportno1==""||reportno1==null||inspector1==""||inspector1==null||conclusion1==""||conclusion1==null||date1==""||date1==null||
		modelno1==""||modelno1==null||supplier1==""||supplier1==null||revision1==""||revision1==null||
		po1==""||po1==null||lotsize1==""||lotsize1==null||samplesize1==""||samplesize1==null||category1==""||category1==null||lotattribute1==""||lotattribute1==null||
		firmware1==""||firmware1==null||sampling1==""||sampling1==null||cri_AQL==""||cri_AQL==null||cri_ACC==""||cri_ACC==null||cri_Rej==""||cri_Rej==null||maj_AQL==""||maj_AQL==null||
		maj_ACC==""||maj_ACC==null||maj_Rej==""||maj_Rej==null||min_AQL==""||min_AQL==null||min_ACC==""||min_ACC==null||min_Rej==""||min_Rej==null||cri==""||cri==null||maj==""||maj==null||min==""||min==null)
		{
			alert("请完整填写信息");
		}
		else
		{
			alert(date1);
			var result= date1.match(
				/((^((1[8-9]\d{2})|([2-9]\d{3}))(-)(10|12|0?[13578])(-)(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(11|0?[469])(-)(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\d{2})|([2-9]\d{3}))(-)(0?2)(-)(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)(-)(0?2)(-)(29)$)|(^([3579][26]00)(-)(0?2)(-)(29)$)|(^([1][89][0][48])(-)(0?2)(-)(29)$)|(^([2-9][0-9][0][48])(-)(0?2)(-)(29)$)|(^([1][89][2468][048])(-)(0?2)(-)(29)$)|(^([2-9][0-9][2468][048])(-)(0?2)(-)(29)$)|(^([1][89][13579][26])(-)(0?2)(-)(29)$)|(^([2-9][0-9][13579][26])(-)(0?2)(-)(29)$))/
			);
			if(result==null)
			{
			  alert("日期格式不正确!应为yyyy-MM-dd,请重新输入一遍") ;
			} 
			else {
			if(objtype==1)
			{
				$scope.descriptions();
				//调用接口
				$http({
					url:rsc+"excel/insert_excel1",
					method:'POST',
					params:{
						'ReportNo':reportno1,
						'Inspector':inspector1,
						'Conclusion':conclusion1,
						'Date':date1,
						'Reviewer':reviewer1,
						'ModelNo':modelno1,
						'Supplier':supplier1,
						'Revision':revision1,
						'Po':po1,
						'Lot_size':lotsize1,
						'Samples':samplesize1,
						'Category':category1,
						'Lot_Attribute':lotattribute1,
						'Firmware':firmware1,
						'Sampling_Attribute':sampling1,
						'Critical_AQL':cri_AQL,
						'Critical_Acc':cri_ACC,  
						'Critical_Rej':cri_Rej,
						'Unit':unit,
						'Major_AQL':maj_AQL,
						'Major_Acc':maj_ACC,
						'Major_Rej':maj_Rej,
						'Pack':pack,
						'Minor_AQL':min_AQL,
						'Minor_Acc':min_ACC,
						'Minor_Rej':min_Rej,
						'Applicable':applicable,
						'Cri':cri,
						'Maj':maj,
						'Min':min,
						'BOM':bom1,
						'ECO':eco1,
						'Document':document1,
						'name':name,
						'description':$scope.des
					}
				}).success(function(response_insert){
					$scope.data = response_insert.data;
					$scope.message = response_insert.message;
					if($scope.message=="success")
					{
						//提交步骤
						 $scope.getbuzhou();
					}
					else
					{
						if($scope.message=="fail")
						{
							alert("提交失败，请检查数据和提交的日期的格式（yyyy-MM-dd）");
						}
						else
						{
							alert($scope.message);
						}
					}
				});
			}
			else
			{
				$scope.description_update();
				//调用接口
				$http({
					url:rsc+"excel/update_excel",
					method:'POST',
					params:{
						'ReportNo':reportno1,
						'Inspector':inspector1,
						'Conclusion':conclusion1,
						'Date':date1,
						'Reviewer':reviewer1,
						'ModelNo':modelno1,
						'Supplier':supplier1,
						'Revision':revision1,
						'Po':po1,
						'Lot_size':lotsize1,
						'Samples':samplesize1,
						'Category':category1,
						'Lot_Attribute':lotattribute1,
						'Firmware':firmware1,
						'Sampling_Attribute':sampling1,
						'Critical_AQL':cri_AQL,
						'Critical_Acc':cri_ACC,  
						'Critical_Rej':cri_Rej,
						'Unit':unit,
						'Major_AQL':maj_AQL,
						'Major_Acc':maj_ACC,
						'Major_Rej':maj_Rej,
						'Pack':pack,
						'Minor_AQL':min_AQL,
						'Minor_Acc':min_ACC,
						'Minor_Rej':min_Rej,
						'Applicable':applicable,
						'Cri':cri,
						'Maj':maj,
						'Min':min,
						'BOM':bom1,
						'ECO':eco1,
						'Document':document1,
						'name':name,
						'description':$scope.des1
					}
				}).success(function(response_update){
					$scope.message = response_update.message;
					if($scope.message=="success")
					{
						//更新步骤
						$scope.update_buzhou(reportno1);
					}
					else
					{
						if($scope.message=="fail")
						{
							alert("提交失败,请稍后再试");
						}
						else
						{
							alert($scope.message);
						}
					}
				}).error(function(respon){
					alert("提交失败,请稍后再试");
				});
			}
		}
		}
		
	}
	
	/****************************读取步骤的接口**********************/
		$scope.buzhou = function(number)
	{
		//读取步骤接口
		$http({
			url:rsc+"excel_buzhou/search_buzhou",
			method:'POST',
			params:{
				'id_ReportNo':number
			}
		}).success(function(response_buzhou){
			$scope.message_buzhou = response_buzhou.message;
			if($scope.message_buzhou=="success")
			{
				$scope.data_buzhou = response_buzhou.data;
				//记录对应步骤的数量
				$scope.num = response_buzhou.size;
				for(var s=0;s<$scope.num;s++)
				{
					if($scope.data_buzhou[s].defect_class=="null_1")
					{
						$scope.data_buzhou[s].defect_class="";
					}
				}
				$(".excel_buzhou").css("display",'none');
				//改变cell的最小宽度
				$(".table td").css('min-width','0');
			}
		});
	}
	
	
//*******************************数据修改事件*********************************/
	$scope.xiugai = function()
	{
		//获取要修改的ReportNo
		var reportno = $(".sousuo").val();
		//读取接口
		$http({
			url:rsc+"excel/sousuo_excel_reportno",
			mathod:'POST',
			params:{
				'ReportNo':reportno
			}
		}).success(function(response_xiugai){
			$scope.message_xiugai = response_xiugai.message;
			if($scope.message_xiugai=="success")
			{
				$scope.data_xiugai = response_xiugai.data[0];
				if($scope.data_xiugai.reviewer=="null_1")
				{
					$scope.data_xiugai.reviewer="";
				}
				if($scope.data_xiugai.major_AQL=="null_1")
				{
					$scope.data_xiugai.major_AQL="";
				}
				if($scope.data_xiugai.major_Acc=="null_1")
				{
					$scope.data_xiugai.major_Acc="";
				}
				if($scope.data_xiugai.major_Rej=="null_1")
				{
					$scope.data_xiugai.major_Rej="";
				}
				if($scope.data_xiugai.minor_AQL=="null_1")
				{
					$scope.data_xiugai.minor_AQL="";
				}
				if($scope.data_xiugai.minor_Acc=="null_1")
				{
					$scope.data_xiugai.minor_Acc="";
				}
				if($scope.data_xiugai.minor_Rej=="null_1")
				{
					$scope.data_xiugai.minor_Rej="";
				}
				if($scope.data_xiugai.eco=="null_1")
				{
					$scope.data_xiugai.eco=""
				}
				if($scope.data_xiugai.bom=="null_1")
				{
					$scope.data_xiugai.bom=""
				}
				//读取步骤数据接口
				$scope.buzhou(reportno);
				//隐藏提交按钮
				$(".submit").css("display","none");
				$(".update").css("display",'block');
				$('#iframepage', window.parent.document).css("height",1700+"px");
			}
			else
			{
				alert($scope.message_xiugai);
			}
		});
	}
	

	
	
//*********************************删除事件*********************************/
	$scope.delete_1 = function()
	{
		//获取要修改的ReportNo
		var reportno = $(".sousuo1").val();
		//读取接口
		$http({
			url:rsc+"excel/delete_excel",
			mathod:'POST',
			params:{
				'ReportNo':reportno
			}
		}).success(function(response_delete){
			$scope.message_delete = response_delete.message;
			if($scope.message_delete=="success")
			{
				//删除对应的步骤数据
				$scope.delete_buzhou(reportno);
				$(".sousuo1").val("");
				alert("删除数据成功");
			}
			else
			{
				alert($scope.message_delete);
			}
		});
	}
}
});
