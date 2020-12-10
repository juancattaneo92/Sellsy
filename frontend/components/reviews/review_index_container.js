import { connect } from 'react-redux';
import ReviewIndex from "./review_index";
import { deleteReview} from "../../actions/review_actions";
import {openModal} from "../modal/modal";


// const mSTP = (state) => {
//   return ({
//     reviews: Object.values(state.entities.reviews)
//   })
// }


const mDTP = dispatch => {
  return ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    returnSingleReview: review => dispatch(returnSingleReview(review))
    // openModal: () => dispatch(openModal("edit-review")),
  })
}
export default connect(null, mDTP)(ReviewIndex)