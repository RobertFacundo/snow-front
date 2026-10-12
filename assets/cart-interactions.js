function getNewQuantity (action, currentQuantity) {
  if (action === 'increase') {
    return currentQuantity + 1
  }

  if (action === 'decrease') {
    return Math.max(0, currentQuantity - 1)
  }

  if (action === 'remove') {
    return 0
  }

  return null
}

async function updateCart (lineKey, quantity) {
  const response = await fetch(`${window.Shopify.routes.root}cart/change.js`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      id: lineKey,
      quantity
    })
  })

  if (!response.ok) {
    throw new Error('Could not update the cart')
  }

  return await response.json()
}

async function refreshCartUI () {
  const currentCart = document
    .querySelector('.cart-page')
    ?.closest('[id^="shopify-section-"]')

  if (!currentCart) {
    throw new Error('Could not find the cart section')
  }

  const cartSectionId = currentCart.id.replace('shopify-section-', '')

  const response = await fetch(
    `${window.location.pathname}?sections=${cartSectionId},header`
  )

  if (!response.ok) {
    throw new Error('Could not refresh cart sections')
  }

  const sections = await response.json()

  const cartHTML = sections[cartSectionId]
  const headerHTML = sections.header

  if (!cartHTML || !headerHTML) {
    throw new Error('Could not retrieve cart or header HTML')
  }

  const parser = new DOMParser()

  const newCartDocument = parser.parseFromString(cartHTML, 'text/html')

  const newHeaderDocument = parser.parseFromString(headerHTML, 'text/html')

  const newCart = newCartDocument.querySelector(
    `#shopify-section-${cartSectionId}`
  )

  const newHeader = newHeaderDocument.querySelector('#shopify-section-header')

  if (newCart) {
    currentCart.replaceWith(newCart)
  }

  const currentHeader = document.querySelector('#shopify-section-header')

  if (currentHeader && newHeader) {
    currentHeader.replaceWith(newHeader)
  }
}

document.addEventListener('click', async event => {
  const button = event.target.closest(
    '.cart-item__quantity-btn, .cart-item__remove'
  )

  if (!button) return

  const product = button.closest('.cart-item')
  const lineKey = product.dataset.lineKey
  const action = button.dataset.action

  const quantityInput = product.querySelector('.cart-item__quantity-input')

  const currentQuantity = Number(quantityInput.value)
  const newQuantity = getNewQuantity(action, currentQuantity)

  if (newQuantity === null) return

  try {
    await updateCart(lineKey, newQuantity)
    await refreshCartUI()
  } catch (error) {
    console.error('Error updating cart:', error)
  }
})
