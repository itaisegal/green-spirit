$(document).ready(function(){
    
    /** Mobile Menu Button **/
    $(".nav__button").click(function(){
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        } else {
            $(this).parent().addClass('open');
        }
    })
})