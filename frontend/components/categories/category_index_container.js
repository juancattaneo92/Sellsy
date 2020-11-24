import { connect } from 'react-redux'
import { fetchCategories } from "../../actions/categories_actions";
import CategoryIndex from "./category_index";



const mSTP = (state) => {
  return {
    allCategories: Object.values(state.entities.categories)
  }
};

const mDTP = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default connect(mSTP, mDTP)(CategoryIndex);