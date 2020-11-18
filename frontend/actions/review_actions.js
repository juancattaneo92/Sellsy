import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "DELETE_REVIEW";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
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

const receiveErrors = errors => {
  return ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
  })
}

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

export const requestReviews = ProductId => dispatch => {
  return ReviewAPIUtil.fetchReviews(ProductId)
    .then(
      (reviews) => dispatch(receiveReviews(reviews)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const requestReview = reviewId => dispatch => {
  return ReviewAPIUtil.fetchReview(reviewId)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const createReview = (productId, review) => dispatch => {
  return ReviewAPIUtil.createReview(productId, review)
    .then(
      (reviews) => dispatch(receiveReview(reviews)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const updateReview = review => dispatch => {
  return ReviewAPIUtil.updateReview(review)
    .then(
      (review) => dispatch(receiveReview(review)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
}

export const deleteReview = reviewId => dispatch => {
  return ReviewAPIUtil.deleteReview(reviewId)
    .then(
      () => dispatch(removeReview(reviewId)),
      (errors) => dispatch(receiveErrors(errors.responseJSON)))
}
