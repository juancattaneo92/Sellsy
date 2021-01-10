import { connect } from 'react-redux';
import ReviewIndex from "./review_index";
import { deleteReview} from "../../actions/review_actions";
import { openModal} from "../../actions/modal_actions";

const mSTP = (state) => {
  return ({
    currentUser: state.session.user,
  })
}


const mDTP = dispatch => {
  return ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    returnSingleReview: review => dispatch(returnSingleReview(review)),
    openModal: (payload) => {
      dispatch(openModal(payload))
    }
  })
}
export default connect(mSTP, mDTP)(ReviewIndex)