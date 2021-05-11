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

// WORK CARD HOVER 
$('.card').hover(function(){
    if($(this).hasClass('active')){
        $('.card .bottom').slideUp(function(){
            $('.card').removeClass('active');
        });
    } else {
        $('.card').addClass('active');
        $('.card .bottom').stop().slideDown();
    }
});

// GALLERY LIGHTBOX EFFECT
