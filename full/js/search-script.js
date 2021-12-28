$(function(){
    $("#search-box").focus(function(){
        $(this).animate({"width":"250px"}),
        $(this).css({"background":"#fff"});
    });
    
    $("#search-box").blur(function(){
        $(this).animate({"width":"150px"}),
        $(this).css({"background":"url(images/search-bg.png) no-repeat"});
    });
});