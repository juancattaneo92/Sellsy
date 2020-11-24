import { connect } from "react-redux";
import { fetchCategory } from "../../actions/categories_actions";
import CategoryShow from "./category_show";
import { selectCategoryProducts } from "../../reducers/selector";
import { fetchProducts } from '../../actions/product_actions';


const mSTP = function (state, ownProps) {

  return ({
    category: state.entities.categories[ownProps.match.params.categoryId],
    products: selectCategoryProducts(state.entities.products, ownProps.match.params.categoryId)
  });
}

const mDTP = dispatch => ({
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
  fetchProducts: () => dispatch(fetchProducts())
});

export default connect(mSTP, mDTP)(CategoryShow);