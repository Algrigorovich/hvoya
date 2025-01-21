document.addEventListener('DOMContentLoaded', () => {
  const mapLink = document.querySelector('.js-map-link')

  if (!mapLink) return

  const isMobile = () => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)

  const mobileLink = 'geo:56.033449,40.474428'
  const desktopLink = 'https://yandex.ru/maps/?rtext=~56.033449,40.474428&z=16'
  mapLink.setAttribute('href', isMobile() ? mobileLink : desktopLink)
  mapLink.setAttribute('target', isMobile() ? '_self' : '_blank')
})
