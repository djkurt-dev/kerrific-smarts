// scrollspy
$('body').scrollspy({ target: '#navbarNavAltMarkup', offset: 30 });

$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('bgcolor');
        $('.kerrific').addClass('kerrific-small');
        $('.smarts').addClass('smarts-small');
        $('.nav-logo').addClass('nav-logo-small');
        $('.nav-item').addClass('nav-item-small');
    }

    else{
        $('nav').removeClass('bgcolor');
        $('.kerrific').removeClass('kerrific-small');
        $('.smarts').removeClass('smarts-small');
        $('.nav-logo').removeClass('nav-logo-small');
        $('.nav-item').removeClass('nav-item-small');
    }
});

// NAVBAR COLLAPSE
$('.navbar-collapse').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
$(document).on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Hamburger
$('#wrapper').click(function(){
    $('.icon').toggleClass('close');
});

//Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});