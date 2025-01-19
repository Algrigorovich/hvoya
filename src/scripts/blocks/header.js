document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.js-menu-toggle')
  const menuClose = document.querySelector('.js-menu-close')
  const mobileMenu = document.querySelector('.mobile-menu')

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open')
    mobileMenu.setAttribute('aria-hidden', 'false')
  })

  menuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
    mobileMenu.setAttribute('aria-hidden', 'true')
  })

  document.addEventListener('click', (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      mobileMenu.classList.contains('open')
    ) {
      mobileMenu.classList.remove('open')
      mobileMenu.setAttribute('aria-hidden', 'true')
    }
  })
})
