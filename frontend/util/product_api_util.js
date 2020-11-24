export const fetchProducts = () => {
  return $.ajax({
    url: 'api/products',
    method: 'GET',
  })
}
export const fetchProduct = (productId) => {
  return $.ajax({
    url: `api/products/${productId}`,
    method: 'GET',
  })
}

export const getSearchProducts = (query) => (
  $.ajax({
    method: "GET",
    url: "/api/products/search",
    data: { query: query }

  })
)
