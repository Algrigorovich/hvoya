import Inputmask from 'inputmask'

const SCROLL_TOGGLE_CLASS = 'lock-scroll'

const initPhoneMask = () => {
  const inputs = document.querySelectorAll('input[type=tel]')
  const im = new Inputmask('+7 999 999-99-99')
  inputs.forEach((input) => {
    im.mask(input)
  })
}

const lockScrollToggle = () => {
  const bodyElement = document.body
  const htmlElement = document.documentElement

  bodyElement.classList.toggle(SCROLL_TOGGLE_CLASS)
  htmlElement.classList.toggle(SCROLL_TOGGLE_CLASS)
}

export { initPhoneMask, lockScrollToggle }
