$(function(){
    var navtitle2=$("#navtitle2");
    var navtitle5=$("#navtitle5");
    var culmark=$("#culmark");
    var culart=$("#culart");
    var t1=true,t2=true;
    navtitle2.click(function(){
        if(t1===true){
            culmark.css({"display":"block"});
            culart.css({"display":"none"});
            t1=false;
            t2=true;
        }else{
            culmark.css({"display":"none"});
            t1=true;
        }
    });
    navtitle5.click(function(){
        if(t2===true){
            culart.css({"display":"block"});
            culmark.css({"display":"none"});
            t2=false;
            t1=true;
        }else{
            culart.css({"display":"none"});
            t2=true;
        }
    });

    $(".markitem").click(function(){
        culmark.css({"display":"none"});
    });
    $(".artitem").click(function(){
        culart.css({"display":"none"});
    });

    var navlis=$("li",$(".navtitle"));
    navlis.click(function(){
        navlis.removeClass("navbg");
        $(this).addClass("navbg");
        var i=navlis.index(this);
        if(i !== 1 && i !== 4 ){
            culmark.css({"display":"none"});
            culart.css({"display":"none"});
            t1=true;
            t2=true;
        }
    });


    var aggnavitems=$(".aggnavitem");
    aggnavitems.click(function(){
        aggnavitems.removeClass("navbg1");
        $(this).addClass("navbg1");
    })





});