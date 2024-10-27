var swiper = new Swiper('.swiper-products', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  /*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});

var mainswiper = new Swiper('.swiper-main', {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-main-pagination',
    // type: "progressbar",
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-main-next',
    prevEl: '.swiper-main-prev',
  },
});
