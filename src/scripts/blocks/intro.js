document.addEventListener('DOMContentLoaded', () => {
  const introRoot = document.querySelector('.js-intro')
  const video = introRoot.querySelector('.js-intro-video')
  const playButton = introRoot.querySelector('.js-play-button')
  const muteButton = introRoot.querySelector('.js-mute-button')

  playButton.addEventListener('click', () => {
    if (video.paused) {
      video.play()
      playButton.style.display = 'none'
    } else {
      video.pause()
      playButton.style.display = 'block'
    }
  })

  video.addEventListener('click', () => {
    if (!video.paused) {
      video.pause()
      playButton.style.display = 'block'
    }
  })

  muteButton.addEventListener('click', () => {
    video.muted = !video.muted
    muteButton.classList.toggle('muted', video.muted)
  })
})
