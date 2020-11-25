$(document).ready(function(){
    $(".sh").hide();
    $(".notibar").hide();


    $(".desktop").dblclick(function(){
       $(".sh").show();
    });
    $(".searchf").click(function(){
        $(".notibar").show();
    });
    $(".close").click(function(){
        $(".notibar").hide();
    });
    $("#bd").click(function(){
        $(".sh").hide();
    });
   

});