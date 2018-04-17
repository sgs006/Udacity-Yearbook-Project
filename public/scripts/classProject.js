//Put your JavaScript code in this file
//master

$(document).ready(function () {

    //*************************************************************
    //	Navigation related
    //*************************************************************
    $('.navbar-nav li').removeClass('active');
    $('.navbar-nav li a').remove('span.sr-only');

    if (window.location.href.indexOf("index") > -1) {
        $('a[href^=index]').addClass('active').append('<span class="sr-only">(current)</span>');
    }

    if (window.location.href.indexOf("yearbook") > -1) {
        $('a[href^=yearbook]').addClass('active').append('<span class="sr-only">(current)</span>');
    }

    if (window.location.href.indexOf("resources") > -1) {
        $('a[href^=resources]').addClass('active').append('<span class="sr-only">(current)</span>');
    }

    if (window.location.href.indexOf("cssart") > -1) {
        $('a[href^=cssart]').addClass('active').append('<span class="sr-only">(current)</span>');
    }

    if (window.location.href.indexOf("about") > -1) {
        $('a[href^=about]').addClass('active').append('<span class="sr-only">(current)</span>');
    }

    //*************************************************************
    //	Return to top feature
    // @see: https://codepen.io/rdallaire/pen/apoyx
    //*************************************************************
    // ===== Scroll to Top ==== 
    $(window).scroll(function (e) {
        e.preventDefault();
        if ($(this).scrollTop() >= 25) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });

    $('#return-to-top').on('click', function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});
//master