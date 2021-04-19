$(document).ready(function () {
    $('#up').on('click', function () {
        $('html, body').animate(  {
            scrollTop:0
        },  2000);
    });
})

$("#btn_mobile").click(function(){
    $("#css3menu, #menu_vertical").stop(true,false).slideToggle(400);
});