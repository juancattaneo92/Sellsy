import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal } from '../../actions/modal_actions';
import { Link } from 'react-router-dom';
import SearchBarContainer from './search_bar_container';
import CategoryIndexContainer from '../categories/category_index_container';
import { fetchAllCartItems } from '../../actions/shopping_cart_actions';


const Header = ({ user, logout, openModal}) => {


  const logginIn = () => (
    <div className="header-button">
      <button className="header-button1" onClick={() => openModal('login')}>Sign in</button>
    </div>
  );
  const loggingOut = (user, logout) => (
    <div className="parent-welcome">
      <div className="header-button"> 
        <button className="header-button1" onClick={logout}>Sign out</button>


      </div>
    </div>
  );
  // let cartLink = <Link to="/cart"><i className="fa fa-shopping-cart shoppingCartIcon"></i></Link>
  // const [ currentUser, setCurrentUser] = useState( false )


  return (
    <div className="header-main">
      <div className="header-box1">
        <Link to="/" className="header-link"><div className="logo">Sellsy</div></Link>

        <div className="search-div">
          <SearchBarContainer />
        </div>
        <div className="session-but">
        {user ? loggingOut(user, logout) : logginIn()}
        </div>
        
        <div className="shopping-div">
          {/* {cartLink} */}
          {user ? <Link to="/cart"><i className="fa fa-shopping-cart shoppingCartIcon"></i></Link> : <div></div> }
            {/* <Link to="/cart"><i className="fa fa-shopping-cart shoppingCartIcon"></i></Link> */}
        </div>
      </div>
      <div className="header-box2">
        {/* <div className="header-categories"> */}
          <CategoryIndexContainer />
          {/* <div className="catergory1">Holiday Shop</div>
          <div className="catergory2">Jewelry & Accessories</div>
          <div className="catergory3">Clothing & Shoes</div>
          <div className="catergory4">Home & Living</div>
          <div className="catergory5">Wedding & Party</div>
          <div className="catergory6">Toys & Entertainment</div>
          <div className="catergory7">Art & Collectibles</div>
          <div className="catergory8">Craft Supplies</div>
          <div className="catergory9"><i className="fa fa-gift"></i>Gifts</div> */}
        {/* </div> */}
      </div>
    </div>
  );
};


const mSTP = (state) => {
  return {
    user: state.session.currentUser,
    cartItems: Object.values(state.entities.cartItems),
  };
};

const mDTP = dispatch => {
  return{
  logout: () => dispatch(logout()),
  openModal: (modal) => {
  dispatch(openModal(modal))
},
fetchAllCartItems: () => dispatch(fetchAllCartItems()),
}
};

export default connect(mSTP, mDTP)(Header);
