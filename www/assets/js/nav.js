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

    function scrollTo(target) {
        console.log("target", target);
        if ($(target).length >= 1) {
            height = $(target).offset().top;
            console.log("height", height);
        }
        $("html,body").animate({scrollTop: height}, 1000);
        return false;
    }

    $(".go-to-menu").click(function () {
        scrollTo("nav");
        return false;
    });

    const windowHeight = $(window).height();
    let elem = document.querySelectorAll("section");
    let ante = $(elem).length - 2;
    // notlast = $(elem).prevUntil($(elem).eq(ante));
    notlast = $("section:not(:last)");
    let id;
    console.log("notlast", notlast);

    $(window).bind("click scroll", function (eventer) {
        console.log("eventer", eventer.type);
        //     // $("#menu li a").click(function (event) {
        //     //     console.log("event click", event);
        //     // });
        //     if ($(elem).last().height() < windowHeight) {
        if (eventer.type != "click") {
            $(elem).each(function (i, val) {
                if (val.getBoundingClientRect().top <= 84 && val.getBoundingClientRect().bottom > 84) {
                    id = $(val).attr("id");
                    $("#menu li a[href='#" + id + "']").addClass("active");
                } else {
                    id = $(val).attr("id");
                    $("#menu li a[href='#" + id + "']").removeClass("active");
                }
            });
        }
        //     // } else {

        //     //     // console.log("hello");
        //     //     // $(notlast).each(function (i, val) {
        //     //     //     console.log("val href", val, $(val).attr("id"));
        //     //     //     if (val.getBoundingClientRect().top <= 84 && val.getBoundingClientRect().bottom > 84) {
        //     //     //         id = $(val).attr("id");
        //     //     //         $("#menu li a[href='#" + id + "']").addClass("active");
        //     //     //     } else {
        //     //     //         id = $(val).attr("id");
        //     //     //         $("#menu li a[href='#" + id + "']").removeClass("active");
        //     //     //     }
        //     //     // });
        //     // }
        stickyNav();
    });

    // $("#menu li a:last").click(function () {
    //     $(window).scroll(function () {
    //         if ($(elem).last().height() < windowHeight) {
    //             $("#menu li a[href='#" + id + "']").removeClass("active");
    //             // $(elem).each(function (i, val) {
    //             //     if (val.getBoundingClientRect().top <= 84 && val.getBoundingClientRect().bottom > 84) {
    //             //         id = $(val).attr("id");
    //             //         $("#menu li a[href='#" + id + "']").remove("active");
    //             //     } else {
    //             //         id = $(val).attr("id");
    //             //         $("#menu li a[href='#" + id + "']").removeClass("active");
    //             //     }
    //             // });
    //         }
    //     });
    // });

    // end of sticky menu
    $("#menu li a").click(function (event) {
        $("#menu li a").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("href");

        scrollTo(id);
        return false;
    });
});
