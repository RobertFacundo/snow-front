const featuredProducts = document.querySelectorAll('.featured-product')

featuredProducts.forEach(product => {
  product.addEventListener('click', event => {
    event.preventDefault()

    console.log('Featured product clicked:', product.href)
  })
})
