import { connect } from "react-redux";
import { requestReview, editReview, clearReviewErrors } from "../../actions/review_actions";
import EditReview from "./edit_review";
import { closeModal } from "../../actions/modal_actions";
import {withRouter} from "react-router-dom";

const mSTP = (state, ownProps) => {
  return {
    reviews: Object.values(state.entities.reviews),
  }
}

const mDTP = dispatch => {
  return ({
    requestReview: (reviewId) => dispatch(requestReview(reviewId)),
    editReview: (review) => dispatch(editReview((review))),
    closeModal: () => dispatch(closeModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  })
}

export default withRouter(connect(mSTP, mDTP)(EditReview))