$(function(){
    $("#register-btn").click(function(){
        $("div#register").slideDown(2000);
    });
    
    $("#close").click(function(){
        $("div#register").hide();
    });
});