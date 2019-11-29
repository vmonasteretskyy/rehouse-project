$(document).ready(function () {
    // main big slider
    $('.bigslider').slick({
        // slidesToShow: 1,
        // slidesToScroll: 1,
        arrows: true,
        // vertical: true,
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
});


