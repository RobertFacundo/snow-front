const featuredProducts = document.querySelectorAll('.featured-product')
const productModal = document.querySelector('#ProductModal')

featuredProducts.forEach(product => {
  product.addEventListener('click', async event => {
    event.preventDefault()

    const handle = product.dataset.productHandle

    console.log('Featured product clicked:', handle)

    const response = await fetch(`/products/${handle}.js`)
    const productData = await response.json()

    console.log(productData)

    window.ProductModal.render(productData)

    productModal.showModal()
  })
})
