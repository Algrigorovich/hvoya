import { lockScrollToggle } from '../utils/functions'

const handlePhoneInput = (event) => {
  event.target.value = event.target.value.replace(/[^+\d]|(?<=\+.*)\+/g, '')
}

document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('modal-order')
  const form = orderModal.querySelector('form')
  const content = orderModal.querySelector('.modal__form-content')
  const successMessage = orderModal.querySelector('.form-sucess')
  const phoneInput = orderModal.querySelector('input[name="phone"]')
  const orderModalBtn = document.querySelector('.js-open-order-modal')

  if (phoneInput) {
    phoneInput.addEventListener('input', handlePhoneInput)
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    content.classList.add('visually-hidden')
    successMessage.classList.remove('visually-hidden')
  })

  orderModalBtn.addEventListener('click', () => {
   
      orderModal.showModal()
      content.classList.remove('visually-hidden')
      successMessage.classList.add('visually-hidden')
      lockScrollToggle()
    
  })

  orderModal.addEventListener('click', (event) => {
    if (
      event.target === orderModal ||
      event.target.classList.contains('js-modal-close')
    ) {
      orderModal.close()
      content.classList.remove('visually-hidden')
      successMessage.classList.add('visually-hidden')
      lockScrollToggle()
    }
  })
})
