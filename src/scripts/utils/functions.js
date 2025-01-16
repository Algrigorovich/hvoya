import Inputmask from 'inputmask'

const initPhoneMask = () => {
  const inputs = document.querySelectorAll('input[type=tel]')
  const im = new Inputmask('+7 999 999-99-99')
  inputs.forEach((input) => {
    im.mask(input)
  })
}

export { initPhoneMask }
