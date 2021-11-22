

// FOR PROMOTION BANNER SLIDER
$('.banner-slider').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    speed: 800,
    prevArrow: '<i class="material-icons dandik"></i>',
    nextArrow: '<i class="material-icons bamdik"></i>',
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                variableWidth: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});

// FOR CATEGORY SLIDER
$('.product-category-slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: false,
    speed: 800,
    prevArrow: '<i class="material-icons dandik"></i>',
    nextArrow: '<i class="material-icons bamdik"></i>',
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                variableWidth: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
            }
        }
    ]
});

