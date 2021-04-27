// scrollspy
$('body').scrollspy({ target: '#navbarNavAltMarkup', offset: 10 });

// $(window).scroll(function(){
//     $('nav').toggleClass('scrolled',$(this).scrollTop()>80);
// });

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
        $('.smarts').addClass('smarts-small');
        $('.nav-logo').removeClass('nav-logo-small');
        $('.nav-item').removeClass('nav-item-small');
    }
})

