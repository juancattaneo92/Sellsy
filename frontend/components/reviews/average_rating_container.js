import { connect } from 'react-redux';
import AverageRating from "./average_rating"
import { requestReviews } from "../../actions/review_actions"

const mSTP = (state, ownProps) => {
  return ({
    reviews: ownProps.reviews,
    productId: ownProps.productId,

  })
}

const mDTP = dispatch => {
  return ({
    requestReviews: productId => dispatch(requestReviews(productId))

  })
}


export default connect(mSTP, mDTP)(AverageRating)
