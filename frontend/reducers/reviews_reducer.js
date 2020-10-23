
import { RECEIVE_REVIEW, 
         RECEIVE_REVIEWS, 
         REMOVE_REVIEW, 
         RETURN_SINGLE_REVIEW } 
from "../actions/review_actions"

const ReviewsReducer = (state = {}, action) => {
  Object.freeze(state)
  let newState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEWS:
      return action.reviews
    case RECEIVE_REVIEW:
      return Object.assign(newState, action.payload.reviews)
    case REMOVE_REVIEW:
      delete newState[action.reviewId]
      return newState
    case RETURN_SINGLE_REVIEW:
      return action.review
    default:
      return state
  }
}

export default ReviewsReducer