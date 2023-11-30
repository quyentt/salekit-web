$(document).ready(function() {
    var lastScrollTop = 0;
    $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $('.sk-head').addClass('is-fixed');
        } else {
            $('.sk-head').removeClass('is-fixed');
        }
        // lastScrollTop = st;
    });
    $('.menu-icon').click(function() {
        $('.sk-head-nav').addClass('show');
    });
    $('.menu-close').click(function() {
        $('.sk-head-nav').removeClass('show');
    });
});