const fixedHeader = (header) => {
  const HEADER_SCROLL_CLASS = 'header_scrolling'

  if (!header) return

  window.addEventListener(
    'scroll',
    () => {
      if (window?.scrollY > 0) {
        header.classList.add(HEADER_SCROLL_CLASS)
      } else {
        header.classList.remove(HEADER_SCROLL_CLASS)
      }
    },
    { passive: true }
  )
}

document.addEventListener('DOMContentLoaded', () => {
  const headerElement = document.querySelector('.js-header')
  const menuToggle = document.querySelector('.js-menu-toggle')
  const menuClose = document.querySelector('.js-menu-close')
  const mobileMenu = document.querySelector('.mobile-menu')
  const menuLinks = mobileMenu.querySelectorAll('a, button')

  const closeMenu = () => {
    mobileMenu.classList.remove('open')
    mobileMenu.setAttribute('aria-hidden', 'true')
  }

  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('open')
    mobileMenu.setAttribute('aria-hidden', 'false')
  })

  menuClose.addEventListener('click', closeMenu)

  menuLinks.forEach((link) => {
    link.addEventListener('click', closeMenu)
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

  fixedHeader(headerElement)
})
