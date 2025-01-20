document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('.js-add-button')

    if (addButton) {
      const card = addButton.closest('.tariff-card')
      const counterForm = card.querySelector('.counter')

      addButton.classList.add('visually-hidden')
      counterForm.classList.remove('visually-hidden')
    }
  })

  document.addEventListener('click', (event) => {
    const increaseButton = event.target.closest('.js-increase')
    const decreaseButton = event.target.closest('.js-decrease')

    if (increaseButton || decreaseButton) {
      const card = event.target.closest('.tariff-card')
      const input = card.querySelector('.counter__value')
      const addButton = card.querySelector('.js-add-button')
      const counterForm = card.querySelector('.counter')
      let value = Number.parseInt(input.value, 10)

      if (increaseButton) {
        value = Math.min(value + 1, 24)
      } else if (decreaseButton) {
        value = Math.max(value - 1, 0)
      }

      input.value = value

      if (value === 0) {
        counterForm.classList.add('visually-hidden')
        addButton.classList.remove('visually-hidden')
      }
    }
  })
})
