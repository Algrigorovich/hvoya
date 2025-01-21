$(document).ready(() => {
  const $owl = $('.js-gallery-slider .owl-carousel')
  const $nextButton = $('.slider-button-next')
  const $prevButton = $('.slider-button-prev')

  $owl.owlCarousel({
    loop: false,
    margin: 30,
    autoplay: false,
    dots: false,
    responsive: {
      0: {
        items: 1.2,
        margin: 12,
        slideBy: 1,
      },
      575: {
        items: 2.2,
      },
    },
  })

  const updatePrevButtonState = () => {
    const $firstActiveItem = $owl.find('.owl-item.active').first()
    const isFirstItem = $firstActiveItem.index() === 0

    $prevButton
      .prop('disabled', isFirstItem)
      .toggleClass('disabled', isFirstItem)
  }

  const goToNextSlide = () => {
    const $lastActiveItem = $owl.find('.owl-item.active').last()
    const totalItems = $owl.find('.owl-item').length
    const lastItemIndex = $lastActiveItem.index()

    if (lastItemIndex === totalItems - 1) {
      $owl.trigger('to.owl.carousel', [0, 300])
    } else {
      $owl.trigger('next.owl.carousel')
    }

    updatePrevButtonState()
  }

  const goToPrevSlide = () => {
    $owl.trigger('prev.owl.carousel')
    updatePrevButtonState()
  }

  $owl.on(
    'initialized.owl.carousel changed.owl.carousel',
    updatePrevButtonState
  )

  $nextButton.on('click', goToNextSlide)

  $prevButton.on('click', goToPrevSlide)

  $owl.on('dragged.owl.carousel', (event) => {
    const direction = event.relatedTarget._drag.direction

    if (direction === 'left') {
      goToNextSlide()
    } else if (direction === 'right') {
      goToPrevSlide()
    }
  })
})
