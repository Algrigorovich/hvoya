import { lockScrollToggle } from '../utils/functions'

document.addEventListener('DOMContentLoaded', () => {
  const player = new Plyr('#player')

  const videoModal = document.getElementById('modal-video')

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('js-play-button')) {
      videoModal.showModal()
      lockScrollToggle()
    }
  })

  videoModal.addEventListener('click', (event) => {
    if (
      event.target === videoModal ||
      event.target.classList.contains('js-modal-close')
    ) {
      player.pause()
      videoModal.close()
      lockScrollToggle()
    }
  })
})
