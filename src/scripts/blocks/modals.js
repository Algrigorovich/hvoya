import { lockScrollToggle } from '../utils/functions'

const handlePhoneInput = (event) => {
  event.target.value = event.target.value.replace(/[^+\d]|(?<=\+.*)\+/g, '')
}

const submitForm = async (form, content, successMessage) => {
  const formData = new FormData(form)
  const action = form.getAttribute('action')

  if (!action) {
    // Если нет атрибута action, просто показываем сообщение об успехе
    content.classList.add('visually-hidden')
    successMessage.classList.remove('visually-hidden')
    form.reset()

    return
  }

  try {
    const response = await fetch(action, {
      method: 'POST',
      body: formData,
    })

    if (response.ok) {
      content.classList.add('visually-hidden')
      successMessage.classList.remove('visually-hidden')
      form.reset()
    } else {
      console.error('Error submitting form:', response.statusText)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}

const initModal = (modalId, openButtonClass) => {
  const modal = document.getElementById(modalId)
  if (!modal) return

  const form = modal.querySelector('form')
  const content = modal.querySelector('.modal__form-content')
  const successMessage = modal.querySelector('.form-sucess')
  const phoneInput = modal.querySelector('input[name="phone"]')

  if (phoneInput) {
    phoneInput.addEventListener('input', handlePhoneInput)
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      submitForm(form, content, successMessage)
    })
  }

  document.body.addEventListener('click', (event) => {
    if (event.target.closest(`.${openButtonClass}`)) {
      modal.showModal()
      lockScrollToggle()

      if (content && successMessage) {
        content.classList.remove('visually-hidden')
        successMessage.classList.add('visually-hidden')
      }
    }
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.js-modal-close')) {
      modal.close()
      lockScrollToggle()

      if (content && successMessage) {
        content.classList.remove('visually-hidden')
        successMessage.classList.add('visually-hidden')
      }
    }
  })
}

document.addEventListener('DOMContentLoaded', () => {
  initModal('modal-feedback', 'js-open-feedback-modal')
  initModal('modal-order', 'js-open-order-modal')
})
