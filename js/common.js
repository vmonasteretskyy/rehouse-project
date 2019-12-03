$(document).ready(function () {
    // main big slider
    $('.bigslider').slick({
        arrows: false,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        dots: true,
        infinite: true,
        fade: true,
        speed: 1400,
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    // main big slider end
    // see more button (tablet)
    $('.showmore-work').click(function () {
        $('.work-row .work-col:nth-child(n + 5)').toggle();
    });

    // scroll to form
    $(".slide__text").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    // modals
    $('.openmodal').click(function () {
        event.preventDefault();
        $('.modal-section').fadeIn();
    });

    $('.close-modal').click(function () {
        $('.modal-section').fadeOut();
    });

    $('.modalform-wrap').on('click', function (e) {
        if (e.target !== this)
            return;

        $('.modal-section').fadeOut();
    });
    // modal project
    $('.openmodal-project').click(function () {
        event.preventDefault();
        $('.modal-section-proj').fadeIn();
        let titleText = $(this).parent().children(".cost__title").html();
        $('.modal-section-proj .modalform-wrap form .title').html(titleText);
    });

    $('.close-modal').click(function () {
        $('.modal-section-proj').fadeOut();
    });

    $('.modalform-wrap').on('click', function (e) {
        if (e.target !== this)
            return;

        $('.modal-section-proj').fadeOut();
    });
    // gallery modal
    $('.whoverbox__seemore').click(function () {
        $('.modal-section-gallery').fadeIn();
    });

    $('.modal-section-gallery .close-modal').click(function () {
        $('.modal-section-gallery').fadeOut();
    });

    $('.modalform-wrap').on('click', function (e) {
        if (e.target !== this)
            return;

        $('.modal-section-gallery').fadeOut();
    });

    // menu
    $('.burger').click(function () {
        $('.menu-section').fadeIn();
        $('.header__nav >img').toggle();
    });
    $('.burger-close').click(function () {
        $('.menu-section').fadeOut();
        $('.header__nav >img').toggle();
    });

    // scroll menu
    $(".menu-section ul li").on("click", "a", function (event) {
        $('.menu-section').fadeOut();
        $('.header__nav >img').toggle();

        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 40;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
    // $(".header__logo, .footer__logo").on("click", function (event) {
    //     event.preventDefault();
    //     var id = $(this).attr('href'),
    //         top = $(id).offset().top - 140;
    //     $('body,html').animate({ scrollTop: top }, 1000);
    // });


    // label animation
    (function ($) {
        function floatLabel(inputType) {
            $(inputType).each(function () {
                var $this = $(this);
                // on focus add cladd active to label
                $this.focus(function () {
                    $this.next().addClass("active");
                });
                //on blur check field and remove class if needed

                $this.blur(function () {
                    if ($this.val() === '') {
                        $this.next().removeClass();
                    }
                });
            });
        }
        // just add a class of "floatLabel to the input field!"
        floatLabel(".floatLabel");
    })(jQuery);

    // shadow header
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll > 0) {
            $('.header').addClass('headshadow');
        } else {
            $(".header").removeClass("headshadow");
        }
    });

});


