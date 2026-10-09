document.addEventListener('DOMContentLoaded', () => {
  const productModal = document.querySelector('#ProductModal')
  const closeButton = productModal.querySelector('.product-modal__close')

  console.log('Modal:', productModal)
  console.log('Close button:', closeButton)

  closeButton.addEventListener('click', () => {
    console.log('Close button clicked')

    productModal.close()
  })
})

window.ProductModal = {
  render (product) {
    const modalBody = document.querySelector('.product-modal__body')

    const variant = product.variants[0]
    const variantId = variant.id

    const image = product.featured_image
      ? `https:${product.featured_image}`
      : ''

    const price = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(product.price / 100)

    const options = product.options
      .filter(option => option.values.length > 1)
      .map(
        option => `
        <div class="product-modal__option">
          <label for="product-option-${option.position}">
            ${option.name}
          </label>

          <select
            id="product-option-${option.position}"
            name="${option.name}"
          >
            ${option.values
              .map(
                value => `
              <option value="${value}">
                ${value}
              </option>
            `
              )
              .join('')}
          </select>
        </div>
      `
      )
      .join('')

    modalBody.innerHTML = `
      <div class="product-modal__product">

        <div class="product-modal__image-wrapper">
          ${
            image
              ? `<img
                  class="product-modal__image"
                  src="${image}"
                  alt="${product.title}"
                >`
              : ''
          }
        </div>

        <div class="product-modal__details">

          <h2 class="product-modal__title">
            ${product.title}
          </h2>

          <p class="product-modal__price">
            ${price}
          </p>

          ${
            product.description
              ? `<div class="product-modal__description">
                ${product.description}
                </div>`
              : `<div class="product-modal__description">
                    Explore the full product page for more details.
                 </div>`
          }

          <div class="product-modal__options">
            ${options}
          </div>

          <button
            type="button"
            class="product-modal__add"
            data-variant-id="${variantId}"
            ${product.available ? '' : 'disabled'}
          >
            ${product.available ? 'Add to cart' : 'Sold out'}
          </button>

        </div>

      </div>
    `
  }
}
