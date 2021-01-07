import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';
// import image from '../../../app/assets/images/payments.png';

class CartIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtotal: 0
    };

    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.updatedSubtotal = this.updatedSubtotal.bind(this);
  }

  updatedSubtotal(arr) {
    let newArr = [];
    arr.forEach(item => newArr.push(item.price));
    let total = newArr.reduce((a, b) => a + b, 0);
    return (
      (Math.round(total * 100) / 100).toFixed(2)
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
    // debugger
    let numItems = Object.values(this.props.userCartItems).length;
    let cartItemsArr = Object.keys(this.props.userCartItems);
    let actualItemsArr = Object.values(this.props.userCartItems);
    
    let arr = [];
    let idArr = actualItemsArr.forEach( item => {
      arr.push(item.id)

    })
    console.log(arr)
    const reducer = (acc, e) => acc.set(e, (acc.get(e) || 0) + 1);
    let counterHash = arr.reduce(reducer, new Map())
    // console.log(arr.reduce(reducer, new Map()))
    // console.log(counterHash) // 1: 2, 2: 1, 3: 1


    return (

      <div className='cart-wholePage'>
        {/* <div>{cartItemsArr2[0].main_photoUrl}</div> */}
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
                  id = {cartItemId}
                  counterHash = {counterHash}/>
                // <li className='' key={cartItemId}> // now is id
              
              ))}

          </ul>

        <div className='checkout-div'>
          <div className='checkout-style'>
            <div className="checkout-title">How you'll pay</div>
              <div className="checkout-payment">
                <div className="checkout-pay-radio">
                  <input type="radio" className="checkout-each-ratio" />
                  <input type="radio" className="checkout-each-ratio" />
                  <input type="radio" className="checkout-each-ratio" />
                </div>
                <div className="checkout-pay-img">
                  <img src={window.visa} alt=""/>
                </div>
              </div>

            <div className='checkout-total'>
              <div className='checkout-subtotal'>
                  <div>Item(s) total</div>
                  <div>${this.updatedSubtotal(actualItemsArr)}</div>
              </div>
              <div className='checkout-shipping'>
                  <div>Shipping</div>
                  <div>FREE</div>
              </div>
             <div className="checkout-all-total">
                  <div>Total ({numItems} item(s)):</div>
                  <div>${this.updatedSubtotal(actualItemsArr)}</div>
             </div>
            </div>
              <div className='checkout-but'>
                <button className='checkout'>Proceed to checkout</button>
              </div>
              <div className="checkout-additional">Additional duties and taxes may apply</div>
                          {/* <div className=''>
                Thank you! Your order has been received.
                          </div> */}
            {/* <div className='checkout'>Thank you! Your order has been received.</div> */}
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

//

// this.props.userCartItems[cartItemId].id = [1, 2, 3, 4]