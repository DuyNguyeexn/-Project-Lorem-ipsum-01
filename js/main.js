$(document).ready(function() {

    // Scroll to top
    window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("scroll-top").style.display = "inline-block";
            $('.navbar').addClass('header-small');
        } else {
            document.getElementById("scroll-top").style.display = "none";
            $('.navbar').removeClass('header-small');
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    // end Scroll to top
    
    // Button menu humberger
    $('#nav-icon2').on('click', function(){
        $(this).toggleClass('open');
        $('.navbar-nav').slideToggle();
    });
    // end Button menu humberger

    // Active Language
    $('.header__language-item').on('click', function() {
        $('.header__languages').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    // end Active Language

    // Wow active
    new WOW().init();
    // end Wow active
});