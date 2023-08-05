$(function () {
    $('#main_navbar').bootnavbar();
})

$(function () {
    var scroll = $(document).scrollTop();
    var navHeight = $('.main-menu').outerHeight();
    $(window).scroll(function () {
        var scrolled = $(document).scrollTop();
        if (scrolled > navHeight) {
            $('.main-menu').addClass('animate');
        } else {
            $('.main-menu').removeClass('animate');
        }
        if (scrolled > scroll) {
            $('.main-menu').removeClass('sticky');
        } else {
            $('.main-menu').addClass('sticky');
        }
        scroll = $(document).scrollTop();
    });
});

//For All Plug - in Activation & Others
$('.srabone').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});

$('.tushar').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    dots: true,
    nav: false,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

//$(function () {
//    $('#main_navbar').bootnavbar();
//})

$(document).ready(function () {
    $('.image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

//AOS.init({
//    offset: 300,
//    duration: 1000,
//});




