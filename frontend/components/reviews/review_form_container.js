import { connect } from "react-redux";
import { createReview, updateReview, clearReviewErrors } from "../../actions/review_actions";
import { fetchProduct } from "../../actions/product_actions";
import ReviewForm from "./review_form";
import { closeModal } from "../../actions/modal_actions";


const mSTP = (state) => {
  return ({
    userId: state.session.id,
    errors: state.errors.reviewErrors,
    productId: Object.keys(state.entities.products)[0]

  })
}

const mDTP = dispatch => {
  return ({
    createReview: (productId, formReview) => dispatch(createReview(productId, formReview)),
    updateReview: formReview => dispatch(updateReview(formReview)),
    fetchProduct: productId => dispatch(fetchProduct(productId)),
    closeModal: () => dispatch(closeModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  })
}

export default connect(mSTP, mDTP)(ReviewForm)