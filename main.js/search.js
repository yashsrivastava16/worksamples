
function search(){
    query=$('.search').val();
    $.post("search.php",{element:query},function(data){
        $('.result').html(data);
    })
}