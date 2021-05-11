//dropdown language
$(document).ready(function() {
    $(".header__language").click(function() {
        $(".header__language .header__option__list").toggleClass("active");
    });
    $(".header__language .header__option__list .header__option__item").click(function() {
        var text = $(this).html();
        $(".header__option__first").html(text);
    });
});

//dropdown search
$(document).ready(function() {
    $(".dropdown").click(function() {
        $(".dropdown ul").toggleClass("active");
    });
    $(".dropdown ul li").click(function() {
        var text = $(this).text();
        $(".default__category").text(text);
    });
});

$('.carousel__wapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrow: true
});

// countdown
$('#dountdown--active').countdown('2022/05/05', function(event) {
    $(this).html(event.strftime('<div class="countdown-day"><span class="num">%D</span><br/> days</div><div class="countdown-hou"><span class="num">%H</span><br/> hrs</div><div class="countdown-min"><span class="num">%M</span><br/> mins</div><div class="countdown-sec"><span class="num">%S</span><br/> sec</div> '));
});

// product item
$('.product__item').slick({
    dots: false,
    infinite: true,
    arrow: true,
    slidesPerRow: 4,
    rows: 2,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesPerRow: 3,
                rows: 2,
            }
        },
        {
            breakpoint: 478,
            settings: {
                slidesPerRow: 1,
                rows: 1,
            }
        }
        // 1135       
    ]
});


//Hot news
$('.news__items').slick({
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000
});