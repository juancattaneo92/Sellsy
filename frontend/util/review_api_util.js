
export const fetchReviews = (productId) => {
  return $.ajax({
    url: `/api/products/${productId}/reviews`,
    method: "GET",
  })
}
export const fetchReview = (reviewId) => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "GET",
  })
}
export const createReview = (productId, review) => {
  return $.ajax({
    url: `/api/products/${productId}/reviews`,
    method: "POST",
    data: {
      review: review,
      productId: productId,
    }
  })
}
export const updateReview = (review) => {
  return $.ajax({
    url: `/api/reviews/${review.id}`,
    method: "PATCH",
    data: { review },
  })
}
export const deleteReview = reviewId => {
  return $.ajax({
    url: `/api/reviews/${reviewId}`,
    method: "DELETE"
  })
}