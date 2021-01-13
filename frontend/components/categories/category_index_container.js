import { connect } from 'react-redux'
import { receiveCategory } from "../../actions/category_actions";
import CategoryIndex from "./category_index";



const mSTP = (state) => {
  return {
    category: state.entities.category
  }
};

const mDTP = (dispatch) => ({
  receiveCategory: (category) => dispatch(receiveCategory(category))
});

export default connect(mSTP, mDTP)(CategoryIndex);