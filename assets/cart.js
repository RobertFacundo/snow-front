document.addEventListener('click', async event => {
  const addButton = event.target.closest('.product-modal__add')

  if (!addButton) return

  const variantId = Number(addButton.dataset.variantId)

  const response = await fetch(`${window.Shopify.routes.root}cart/add.js`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      id: variantId,
      quantity: 1
    })
  })

  const result = await response.json()

  console.log('added to cart', result)

  await updateCartCounter()
})

async function updateCartCounter () {
  const response = await fetch(`${window.Shopify.routes.root}?sections=header`)
  const sections = await response.json()
  const headerHTML = sections.header

  const parser = new DOMParser()
  const documentFromResponse = parser.parseFromString(headerHTML, 'text/html')

  const newCounter = documentFromResponse.querySelector('#cart-counter-wrapper')
  const currentCounter = document.querySelector('#cart-counter-wrapper')

  if (newCounter && currentCounter) {
    currentCounter.replaceWith(newCounter)
  }
}
