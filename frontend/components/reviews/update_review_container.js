import { connect } from "react-redux";
import { updateReview, clearReviewErrors } from "../../actions/review_actions";
import ReviewFrom from "./review_form";
import { closeModal } from "../../actions/modal_actions";


const mSTP = (state) => {
  return ({
    userId: state.session.id,
    errors: state.errors.reviewErrors,
    productId: Object.keys(state.entities.products)[0],
    review: Object.keys(state.entities.reviews)[0]

  })
}

const mDTP = dispatch => {
  return ({
    updateReview: formReview => dispatch(updateReview(formReview)),
    closeModal: () => dispatch(closeModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  })
}

export default connect(mSTP, mDTP)(ReviewFrom)