export const fetchAllCartItems = () => {
  return $.ajax ({
    method: "GET",
    url: `/api/cart_ite`
  })
}

export const fetchCartItem = (cartItemId) => {
  return $.ajax({
    method: "GET",
    url: `/api/cart_items/${cartItemId}`,
  })
}

export const createCartItem = (cartItem) => {
  return $.ajax({
    url: `api/cart_items`,
    method: "POST",
    data: { cartItem },
  })
}

export const deleteCartItem = (cartItemId) => {
  return $.ajax({
    url: `api/cart_items/${cartItemId}`,
    method: "DELETE",
  })
}

export const updateCartItem = (cartItem, id) => {
  return (
    $.ajax({
      method: "PATCH",
      url: `/api/cart_items/${id}`,
      data: { cartItem },
    })
  )
}