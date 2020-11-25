$(document).ready(function(){
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.slider').slider({
        fullWidth: true
      });
    $('.carousel').carousel();
            
})

function toggleModal(){
    var instance=M.Modal.getInstance($('#modal3'))
    instance.open();
}
