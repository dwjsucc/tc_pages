$(function(){
    $("#peopleregist").click(function(){
        $(this).css({"background":"#2BA6E1","border":"1px solid #2BA6E1"});
        $("#companyregist").css({"background":"#DDDDDD","border":"1px solid #DDDDDD"});
    });
    $("#companyregist").click(function(){
        $(this).css({"background":"#2BA6E1","border":"1px solid #2BA6E1"});
        $("#peopleregist").css({"background":"#DDDDDD","border":"1px solid #DDDDDD"});
    });
});