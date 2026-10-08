function getSectionId () {
  const section = document.querySelector('.collection')

  return section.dataset.sectionId
}

function updatePriceFilters () {
  const url = new URL(window.location.href)

  const min = url.searchParams.get('filter.v.price.gte') || ''
  const max = url.searchParams.get('filter.v.price.lte') || ''

  const priceCheckboxes = document.querySelectorAll(
    '.collection-filters input[data-min][data-max]'
  )

  priceCheckboxes.forEach(checkbox => {
    checkbox.checked =
      checkbox.dataset.min === min && checkbox.dataset.max === max
  })
}

function updateCollection (url) {
  const sectionId = getSectionId()

  url.searchParams.set('section_id', sectionId)

  return fetch(url)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(html, 'text/html')

      const newFilters = doc.querySelector('.collection-filters')
      const newProducts = doc.querySelector('.collection-products')

      const currentFilters = document.querySelector('.collection-filters')
      const currentProducts = document.querySelector('.collection-products')

      currentFilters.replaceWith(newFilters)
      currentProducts.replaceWith(newProducts)

      const browserUrl = new URL(url)

      browserUrl.searchParams.delete('section_id')

      history.pushState({}, '', browserUrl)

      updatePriceFilters()
    })
}

document.addEventListener('change', event => {
  const checkbox = event.target.closest(
    '.collection-filters input[type="checkbox"]'
  )

  if (!checkbox) return

  const url = new URL(window.location.href)

  url.searchParams.delete('page')

  if (checkbox.name) {
    if (checkbox.checked) {
      url.searchParams.append(checkbox.name, checkbox.value)
    } else {
      url.searchParams.delete(checkbox.name)
    }
  } else {
    url.searchParams.delete('filter.v.price.gte')
    url.searchParams.delete('filter.v.price.lte')

    if (checkbox.checked) {
      if (checkbox.dataset.min) {
        url.searchParams.set('filter.v.price.gte', checkbox.dataset.min)
      }

      if (checkbox.dataset.max) {
        url.searchParams.set('filter.v.price.lte', checkbox.dataset.max)
      }
    }
  }

  updateCollection(url)
})
