$(document).ready(OnReady);

function OnReady(){
	$('.header .linker').click(LinksAnimation);
  $(".effects").mouseenter(function(){
                $(this).addClass("hover");
            }).mouseleave(function(){
                $(this).removeClass("hover");
            });
   $('.fade').slick({
      infinite: true,
      dots:true,
      fade: true,
      arrows: false,
      slide: 'div',
      cssEase: 'linear',
      asNavFor: '.preview'
  })
  $('.preview').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.fade'
});
}
//Animación de los links
function LinksAnimation(e){
	e.preventDefault();
	$('html, body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 800,"swing");
}
/*
    $('.fade').slick({
      infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        slide: 'div',
        cssEase: 'linear'
  })
     $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    infinite: true,
    focusOnSelect: true
});

*/