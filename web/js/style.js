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