import { connect } from "react-redux";
import { createReview, clearReviewErrors, deleteReview } from "../../actions/review_actions";
import { fetchProduct } from "../../actions/product_actions";
import CreateReviewForm from "./create_review_form";
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
  return ({
    // review: {
    //   body: "",
    //   rating: 0,
    //   formType: 'Create Review'
    // },
    userId: state.session.currentUser.id,
    errors: state.errors.reviewErrors,
    productId: Object.keys(state.entities.products)[0]

  })
}

const mDTP = dispatch => {
  return ({
    createReview: (productId, review) => dispatch(createReview(productId, review)),
    // fetchProduct: productId => dispatch(fetchProduct(productId)),
    deleteReview: (review) => dispatch(deleteReview(review)),
    closeModal: () => dispatch(closeModal()),
    clearReviewErrors: () => dispatch(clearReviewErrors())
  })
}

export default connect(mSTP, mDTP)(CreateReviewForm)