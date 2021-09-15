


$(document).ready(function(){
  $(window).scroll(function(){
      if (this.scrollY > 100){
        $('.navbar').addClass("sticky");
      }else{
        $('.navbar').removeClass("sticky"); 
      }
      if (this.scrollY > 300){
        $('.scroll-btn').addClass("show");
    }else{
    $('.scroll-btn').removeClass("show");
}
     
  });
//   toggle class script 

$('.menu-btn').click(function(){
  $('.navbar').toggleClass("hit");
  $('.menu').toggleClass("active");
  
});
  //slid up script
  $('.scroll-btn').click(function(){
    $('html').animate({scrollTop:0});
  });
    
    });
  $('.slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayHoverPause: true,
    autoplaySpeed:1000,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
 $('.gallery').owlCarousel({
     loop:true,
     margin: 40,
     autoplay:true,
    autoplaySpeed:1000,
    autoplayHoverPause: true,
     nav:false,
     dots:false,
     responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
    }
 });
 
 $(".list").click(function(){
     const value = $(this).attr('data-list');
     if (value == 'all'){
         $(".itemBox").show('1000')
     }
     else{
         $(".itemBox").not('.' + value).hide('1000');
         $(".itemBox").filter('.' + value).show('1000');
     }
 });
 $(".list").click(function(){
     $(this).addClass('active').siblings().removeClass('active');
 });
const sr = ScrollReveal({
  origin :'left',
  distance : '40px',
  duration : '800',
  reset  :'true',

});

sr.reveal('.left-content,.heading,.list,.welcome,.propiter,.quick-link',{
  interval:200
});
 
