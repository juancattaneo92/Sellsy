import { connect } from "react-redux";
import { requestReview, editReview, clearReviewErrors } from "../../actions/review_actions";
import EditReview from "./edit_review";
import { closeModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => {
  return {
    // reviews: Object.values(state.entities.reviews)
  }
}

const mDTP = dispatch => {
  return ({
    requestReview: (reviewId) => dispatch(requestReview(reviewId)),
    editReview: (reviewId, review) => dispatch(editReview((reviewId, review))),
    closeModal: () => dispatch(closeModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  })
}

export default connect(mSTP, mDTP)(EditReview)