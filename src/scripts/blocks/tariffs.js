document.addEventListener('DOMContentLoaded', () => {
  const decreaseButton = document.querySelector('.counter__button--decrease')
  const increaseButton = document.querySelector('.counter__button--increase')
  const valueInput = document.querySelector('.counter__value')

  let value = 1

  const updateValue = () => {
    valueInput.value = value
  }

  decreaseButton.addEventListener('click', () => {
    if (value > 0) {
      value--
      updateValue()
    }
  })

  increaseButton.addEventListener('click', () => {
    value++
    updateValue()
  })

  valueInput.addEventListener('input', () => {
    const inputValue = Number.parseInt(valueInput.value.replace(/\D/g, ''), 10)
    value = Number.isNaN(inputValue) || inputValue < 0 ? 0 : inputValue
    updateValue()
  })
})
