import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';


class CartIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0,
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.updatedtotal = this.updatedtotal.bind(this);
    // this.handleModal = this.handleModal.bind(this);
  }

  updatedtotal() {
    let actualItemsArr = Object.values(this.props.userCartItems);
    let subtotal = [];
    actualItemsArr.forEach( item => {
      subtotal.push(item.quantity * item.price)
    })
    let allSubtotal = [];
    return (
      allSubtotal = subtotal.reduce((a, b) => a + b)
    )

  }

  componentDidMount() {
    this.props.fetchAllCartItems();
  }

  componentDidUpdate(prevProps) {
    const prev = Object.values(prevProps.userCartItems);
    const current = Object.values(this.props.userCartItems);

    if (prev.length !== current.length) {
      this.props.fetchAllCartItems();
    }
  }



  filledCart() {

 
    let cartItemsArr = Object.keys(this.props.userCartItems);
    let numberItems = [];
    let actualItemsArr = Object.values(this.props.userCartItems);
    actualItemsArr.map(item => {
        numberItems.push(item.quantity)
    })
    let totalAmountItems = numberItems.reduce( (a, b) => a + b)

    return (

      <div className='cart-wholePage'>
        <div className='cart-header'>
            <h1>Shopping Cart</h1>
          <div className='keep-shop-but'>
              <Link to="/" className="keep-link" >Keep Shopping</Link>
            </div>
            
        </div>

        <div className='cart-shoppingPage'>

          <ul className='cart-cont'>  
              {cartItemsArr.map(cartItemId => (
                <CartItem 
                  key = {cartItemId}
                  userCartItems = {this.props.userCartItems}
                  deleteCartItem = {this.props.deleteCartItem}
                  updateCartItem = {this.props.updateCartItem}
                  cartItemId = {cartItemId}/>
              
              ))}

          </ul>

        <div className='checkout-div'>
          <div className='checkout-style'>
            <div className="checkout-title">How you'll pay</div>
              <div className="checkout-payment">
                <div className="checkout-pay-radio">
                  <input type="radio" id="cart" className="checkout-each-ratio" name="payment"/>
                  <input type="radio" id="cart" className="checkout-each-ratio" name="payment"/>
                  <input type="radio" id="cart" className="checkout-each-ratio" name="payment"/>
                </div>
                <div className="checkout-pay-img">
                  <img src={window.visa} alt=""/>
                </div>
              </div>

            <div className='checkout-total'>
              <div className='checkout-subtotal'>
                  <div>Item(s) total</div>
                  <div>${this.updatedtotal()}</div>
              </div>
              <div className='checkout-shipping'>
                  <div>Shipping</div>
                  <div>FREE</div>
              </div>
             <div className="checkout-all-total">
                  <div>Total ({totalAmountItems} item(s)):</div>
                  <div>${this.updatedtotal()}</div>
             </div>
            </div>
              <div className='checkout-but'>
                <button className='checkout' onClick={() => this.props.openModal('popup-thanks')}>Proceed to checkout</button>
              </div>
              <div className="checkout-additional">Additional duties and taxes may apply</div>
                         
         
          </div>
        </div>

        </div>

      </div>
    )
  }

  emptyCart() {
    return (
      <div className="cart-wholePage">
        <div className="cart-shoppingPage">
          <div className='cart-header2'>
            <div>Shopping Cart</div>
        
            <div>Your Shopping Cart is empty.</div>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return Object.values(this.props.userCartItems).length === 0 ? this.emptyCart() : this.filledCart()
  }
}

export default CartIndex;

