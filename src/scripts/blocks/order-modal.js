import { lockScrollToggle } from '../utils/functions'

document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('modal-order')
  const form = orderModal.querySelector('form')
  const content = orderModal.querySelector('.modal__form-content')
  const successMessage = orderModal.querySelector('.form-sucess')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    content.classList.add('visually-hidden')
    successMessage.classList.remove('visually-hidden')
  })

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-open-order-modal')) {
      orderModal.showModal()
      content.classList.remove('visually-hidden')
      successMessage.classList.add('visually-hidden')
      lockScrollToggle()
    }
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
