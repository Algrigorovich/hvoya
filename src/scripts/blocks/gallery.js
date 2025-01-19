import Swiper, { Navigation } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  const swiper = document.querySelector('.js-gallery-swiper')

  if (swiper) {
    new Swiper(swiper, {
      modules: [Navigation],
      slidesPerView: 2,
      loop: true,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      },
    })
  }
})
