document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal-feedback')
  const closeModalButton = modal.querySelector('.modal__close')

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-open-feedback-modal')) {
      modal.showModal()
    }
  })

  closeModalButton.addEventListener('click', () => {
    modal.close()
  })

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.close()
    }
  })
})
