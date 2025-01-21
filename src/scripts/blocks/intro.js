document.addEventListener('DOMContentLoaded', () => {
  const introRoot = document.querySelector('.js-intro')
  const video = introRoot.querySelector('.js-intro-video')
  const muteButton = introRoot.querySelector('.js-mute-button')

  muteButton.addEventListener('click', () => {
    video.muted = !video.muted
    muteButton.classList.toggle('muted', video.muted)
  })
})
