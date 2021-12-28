$(function(){
    $("#email").keydown(function(){
        $(this).css({"background":"#fff"});
    });
    
    $("#email").blur(function(){
        $(this).css({"background":"url(images/email.png) no-repeat"});
    });
    
    $("#password").keydown(function(){
        $(this).css({"background":"#fff"});
    });
    
    $("#password").blur(function(){
        $(this).css({"background":"url(images/password.png) no-repeat"});
    });
});