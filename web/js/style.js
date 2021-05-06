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
    arrow: true,
});

// countdown
$('#dountdown-active').countdown('2022/05/05', function(event) {
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
        breakpoint: 478,
        settings: {
            slidesPerRow: 1,
            rows: 1,
        }
    }]
});