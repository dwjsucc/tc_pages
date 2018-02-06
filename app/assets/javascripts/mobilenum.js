$(function(){
    var mobilenum=$("#mobilenum");
    var obtainnum=$("#obtainnum");
    obtainnum.click(function(){
        var mobile = mobilenum.val();
        if(isNaN(mobile)||(mobile.length!=11)){
            alert("手机号码为11位数字！请正确填写！");
            return false;
        }
        var reg =/^1[3|4|5|7|8]\d{9}$/;
        if(!reg.test(mobile)){
            alert("您的手机号码不正确，请重新输入");
            return false;
        }
//      alert("ok");
        return true;
    });
});
