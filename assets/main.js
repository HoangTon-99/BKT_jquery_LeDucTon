$(document).ready(function () {
    var sectionIds = $('a.nav-link');
    $(document).scroll(function () {
        sectionIds.each(function () {

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }


        });
    });
    // back button
    let mybutton = document.getElementById("btn-back-to-top");
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
});