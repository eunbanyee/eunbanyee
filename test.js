$(document).ready(function() {

    $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
    $('#ul').fadeIn();
    } else {
    $('#ul').fadeOut();
    }
    });
