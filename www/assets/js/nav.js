$(document).ready(function () {
    var stickyNavTop = $("nav").offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
    // end of sticky menu
    $("#menu li a").click(function () {
        $("#menu li a").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("href");
        scrollTo(id);
        return false;
    });
    function scrollTo(target) {
        if ($(target).length >= 1) {
            height = $(target).offset().top;
        }
        $("html,body").animate({scrollTop: height}, 1200);
        return false;
    }
    $(".go-to-menu").click(function () {
        scrollTo("nav");
        return false;
    });
});
