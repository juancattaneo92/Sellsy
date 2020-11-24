
import { connect } from 'react-redux'
import SearchBar from './search_bar'
import { getSearchProducts } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom'

const mDTP = dispatch => ({
  getSearchProducts: searchQuery => dispatch(getSearchProducts(searchQuery)),
});

export default withRouter(connect(null, mDTP)(SearchBar));