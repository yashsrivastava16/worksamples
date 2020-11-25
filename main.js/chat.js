$("document").ready(function(){
     $('.btnc').click(function(){
        $(".nev").toggle("slow");
    });

    $(".btn").click(function(){
        text = $(".txt").val();
        $(".msg").append('<div class="message">'+text+'<i class="material-icons" onclick="myclick(this);" id="del">cancel</i></div>');
        $(".txt").val('');
    });

    $('.btton').click(function(){
        $(".main").toggle("slow");
    });
    $('.btton').click(function(){
        $("#text").toggle("slow");
    });
    


    

});

window.addEventListener('load',()=>{

    const params = (new URL(document.location)).searchParams;
    const name = params.get('fname');


    document.getElementById('result').innerHTML=name;



})

function myclick(ele){
    $(ele).parent().remove();
}