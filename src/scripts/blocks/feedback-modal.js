import { lockScrollToggle } from '../utils/functions'

document.addEventListener('DOMContentLoaded', () => {
  const feedbackModal = document.getElementById('modal-feedback')
  const form = feedbackModal.querySelector('form')
  const content = feedbackModal.querySelector('.modal__form-content')
  const successMessage = feedbackModal.querySelector('.form-sucess')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    content.classList.add('visually-hidden')
    successMessage.classList.remove('visually-hidden')
  })

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-open-feedback-modal')) {
      feedbackModal.showModal()
      lockScrollToggle()
    }
  })

  feedbackModal.addEventListener('click', (event) => {
    if (
      event.target === feedbackModal ||
      event.target.classList.contains('js-modal-close')
    ) {
      feedbackModal.close()
      lockScrollToggle()
    }
  })
})
