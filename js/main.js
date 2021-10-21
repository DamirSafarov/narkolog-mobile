






$(function(){


  $('.doctor__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
    dots:true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

$('.certificate__slider').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});


$('.rewiews__slider').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});





$('.the-news__slider').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots:true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_left_optimized.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_right_optimized.png" alt=""></button>',
});




$("#phone").mask("+7(999) 999-9999");
$("#phone2").mask("+7(999) 999-9999");




$(window).scroll(function(){
    if($(this).scrollTop() > 1200) {
        $('.scroll-page_btn').fadeIn();
    } else {
        $('.scroll-page_btn').fadeOut();
    }
});


$("a[href^='#header']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});



  $(".dropbtn").on("click", function () {
    $(".dropdown-content").removeClass("show");
    $(this).next().toggleClass("show");
  
  });
  
  
  
     // Close the dropdown if the user clicks outside of it
     window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
  

});




