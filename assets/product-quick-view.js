const quickViewProducts = document.querySelectorAll('.product-quick-view')

quickViewProducts.forEach(product => {
  product.addEventListener('click', async event => {
    event.preventDefault()

    const handle = product.dataset.productHandle

    const response = await fetch(`/products/${handle}.js`)
    const productData = await response.json()

    window.ProductModal.render(productData)

    document.querySelector('#ProductModal').showModal()
  })
})
