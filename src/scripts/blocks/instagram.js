// import Swiper, { Autoplay } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  // new Swiper('.js-instagram-swiper', {
  //   modules: [Autoplay],
  //   loop: true,
  //   slidesPerView: 'auto',
  //   slidesPerGroupAuto: true,
  //   spaceBetween: 30,
  //   autoplay: true,
  // })
  $('.js-instagram-slider')
    .find('.owl-carousel')
    .owlCarousel({
      loop: true,
      autoWidth: true,
      dots: false,
      margin: 30,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: {
        0: { items: 2, margin: 12 },
        768: { autoWidth: true },
      },
    })
})
