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

    // Close menu
    $(window).click(function() {
        var width = $(window).width();
        if (width < 991){
            $(window).on('click', function() {
                $('#nav-icon2').removeClass('open');
                $('.navbar-nav').slideUp();
            });
            $('#nav-icon2').click(function(event){
                event.stopPropagation();
            });
        }
    });
    // end Close menu

    // Active Language
    $('.header__language-item').on('click', function() {
        $('.header__languages').find('.active').removeClass('active');
        $(this).addClass('active');
    });
    // end Active Language

    // Wow active
    new WOW().init();
    // end Wow active

    // MP Mansory
    $("#my-gallery-container").mpmansory(
        {
            childrenClass: 'js-project-detail-wrap-img', // default is a div
            columnClasses: 'padding', //add classes to items
            breakpoints:{
                lg: 4, 
                md: 4, 
                sm: 12,
                xs: 12
            },
            distributeBy: { order: true, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
            onload: function (items) {
                return true;
            } 
        }
    );
});
