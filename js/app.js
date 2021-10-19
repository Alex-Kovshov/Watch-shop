$(function() {
$('.owl-carousel').owlCarousel({
    autoplay: true,
    items: 1,
    loop: true,
    margin: 10,
    nav: true,
    
    
    responsive:{
        300:{
            items: 1
        },
        400:{
            items: 1
            
           
        },
        600:{
            items: 2
            
        },
        1000:{
            items:3
        }
    }
});
});

$(document).ready(function() {
    $('.header__toggle').click(function(event) {
        $('.header__toggle,.header__icon,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
});
});

$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    let scrollEl = $(this).data('scroll');
    let scrollElPos = $(scrollEl).offset().top;
    let scrollTop = $(window).scrollTop();
        
        $('.header__toggle,.header__icon,.header__nav').removeClass('active');
        $('body').removeClass('lock');
          
    $("html, body").animate({
          scrollTop: scrollElPos 
      
        }, 500)
      
        
      });
    
      let intro = $("#intro");
      let header = $("#header");
      let introH = intro.innerHeight();
      let headerH = header.innerHeight();
      let scrollTop = $(window).scrollTop();

      headerScroll();

$(window).on("scroll resize", function()  {
    headerScroll();
});

function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();

    let scrollTop = $(this).scrollTop();
    

    if ( scrollTop >= (introH - headerH + 40) ) {
        header.addClass("header--scroll");
    } else {
        header.removeClass("header--scroll");
    }

}
