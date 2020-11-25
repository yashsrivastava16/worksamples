$(document).ready(function(){
    $(".msg1").hide();
    $(".msg2").hide();
    $(".pop").click(function(){
       alert("Sorry We are working on this :(");
    });
    $("#user").hover(function(){
        $(".msg1").show();

     });
     $("#admin").hover(function(){
        $(".msg2").show();

     });
     $("#body").hover(function(){
        $(".msg1").hide();
        $(".msg2").hide();

     });
   

});