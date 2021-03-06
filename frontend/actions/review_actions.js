import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_REVIEW_ERRORS = "CLEAR_REVIEW_ERRORS";
export const RETURN_SINGLE_REVIEW = "RETURN_SINGLE_REVIEW";

const receiveReviews = reviews => {
  return ({
    type: RECEIVE_REVIEWS,
    reviews
  })
}

const receiveReview = payload => {
  return ({
    type: RECEIVE_REVIEW,
    payload
  })
}

// const receiveErrors = errors => {
//   return ({
//     type: RECEIVE_ERRORS,
//     errors
//   })
// }

const removeReview = reviewId => {
  return ({
    type: REMOVE_REVIEW,
    reviewId: reviewId
  })
}

export const clearReviewErrors = () => {
  return ({
    type: CLEAR_REVIEW_ERRORS
  })
}

export const returnSingleReview = review => {
  return ({
    type: RETURN_SINGLE_REVIEW,
    review
  })
}

export const requestReviews = productId => dispatch => {
  return ReviewAPIUtil.fetchReviews(productId)
    .then(
      (reviews) => dispatch(receiveReviews(reviews)))
      // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const requestReview = reviewId => dispatch => {
  return ReviewAPIUtil.fetchReview(reviewId)
    .then(
      (review) => dispatch(receiveReview(review)))
      // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const createReview = (productId, review) => dispatch => {
  return ReviewAPIUtil.createReview(productId, review)
    .then(
      (reviews) => dispatch(receiveReview(reviews)))
      // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const editReview = (review) => dispatch => {
  // debugger
  return ReviewAPIUtil.updateReview(review)
    .then(
      (review) => dispatch(receiveReview(review)))
      // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(
      () => dispatch(removeReview(reviewId)))
      // (errors) => dispatch(receiveErrors(errors.responseJSON)))
}
