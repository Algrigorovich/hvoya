import { lockScrollToggle } from '../utils/functions'

document.addEventListener('DOMContentLoaded', () => {
  const feedbackModal = document.getElementById('modal-feedback')

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
