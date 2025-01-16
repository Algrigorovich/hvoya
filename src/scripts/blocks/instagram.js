import Swiper from 'swiper'

document.addEventListener('DOMContentLoaded', () => {
  new Swiper(selector, {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 20,
  })
})
