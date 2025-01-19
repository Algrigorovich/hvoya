import Swiper, { Autoplay } from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.js-instagram-swiper', {
    modules: [Autoplay],
    loop: true,
    slidesPerView: 'auto',
    slidesPerGroupAuto: true,
    spaceBetween: 30,
    autoplay: true,
  })
})
