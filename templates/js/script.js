   $(window).scroll(function() {

    if ($(this).scrollTop()>530)
     {
        $('.navbar').fadeOut();
     }
     else
     {
        $('.navbar').fadeIn();
     }

 });

var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        loop:true,
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        }
    });


$('#slide0h3').hide(); 
$('#slide0h1').click(function () {
    $('#slide0h1').hide();
    $('#slide0h3').show();
});

$('#slide0h3').click(function () {
    $('#slide0h3').hide();
    $('#slide0h1').show();
});

$('#slide1h3').hide(); 
$('#slide1h1').click(function () {
    $('#slide1h1').hide();
    $('#slide1h3').show();
});

$('#slide1h3').click(function () {
    $('#slide1h3').hide();
    $('#slide1h1').show();
});


$('#slide2h3').hide(); 
$('#slide2h1').click(function () {
    $('#slide2h1').hide();
    $('#slide2h3').show();
});

$('#slide2h3').click(function () {
    $('#slide2h3').hide();
    $('#slide2h1').show();
});

$('#slide3h3').hide(); 
$('#slide3h1').click(function () {
    $('#slide3h1').hide();
    $('#slide3h3').show();
});

$('#slide3h3').click(function () {
    $('#slide3h3').hide();
    $('#slide3h1').show();
});

$('#slide4h3').hide(); 
$('#slide4h1').click(function () {
    $('#slide4h1').hide();
    $('#slide4h3').show();
});

$('#slide4h3').click(function () {
    $('#slide4h3').hide();
    $('#slide4h1').show();
});

$('#slide5h3').hide(); 
$('#slide5h1').click(function () {
    $('#slide5h1').hide();
    $('#slide5h3').show();
});

$('#slide5h3').click(function () {
    $('#slide5h3').hide();
    $('#slide5h1').show();
});

$('#slide6h3').hide(); 
$('#slide6h1').click(function () {
    $('#slide6h1').hide();
    $('#slide6h3').show();
});

$('#slide6h3').click(function () {
    $('#slide6h3').hide();
    $('#slide6h1').show();
});

$('#slide7h3').hide(); 
$('#slide7h1').click(function () {
    $('#slide7h1').hide();
    $('#slide7h3').show();
});

$('#slide7h3').click(function () {
    $('#slide7h3').hide();
    $('#slide7h1').show();
});

$('#slide8h3').hide(); 
$('#slide8h1').click(function () {
    $('#slide8h1').hide();
    $('#slide8h3').show();
});

$('#slide8h3').click(function () {
    $('#slide8h3').hide();
    $('#slide8h1').show();
});





