var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    speed : 800
    
});

swiper.on('slideChange', function () {
    console.log('slide changed');
  });
