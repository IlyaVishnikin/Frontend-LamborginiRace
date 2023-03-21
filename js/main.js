const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,

  navigation: {
    nextEl: '.swiper-button-next-article',
    prevEl: '.swiper-button-prev-article',
  },
});
