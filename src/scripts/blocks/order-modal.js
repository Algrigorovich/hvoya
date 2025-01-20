import { lockScrollToggle } from '../utils/functions'

document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('modal-order')

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-open-order-modal')) {
      orderModal.showModal()
      lockScrollToggle()
    }
  })

  orderModal.addEventListener('click', (event) => {
    if (
      event.target === orderModal ||
      event.target.classList.contains('js-modal-close')
    ) {
      orderModal.close()
      lockScrollToggle()
    }
  })
})
