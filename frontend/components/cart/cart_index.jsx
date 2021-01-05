import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cart_item';

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
    let idArr = actualItemsArr.map( item => {
      arr.push(item.id)

    })
    // console.log(actualItemsArr)
    const reducer = (acc, e) => acc.set(e, (acc.get(e) || 0) + 1);
    let counterHash = arr.reduce(reducer, new Map())
    // console.log(arr.reduce(reducer, new Map()))


    return (

      <div className='cart-wholePage'>
        {/* <div>{cartItemsArr2[0].main_photoUrl}</div> */}
        <div className='cart-header'>
            <h1>Shopping Cart</h1>
            <button className='keep-shop-but'>Keep Shopping</button>
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
            <div className="checkout-title">

            </div>
            <div className='checkout-total'>
              <span>Item(s) total <span className=''>${this.updatedSubtotal(actualItemsArr)}</span></span>
              <div> Shipping </div> <div>Free</div>
              <div> Total ({numItems} item(s)):</div><div className=''> ${this.updatedSubtotal(actualItemsArr)}</div>
  
            </div>
            <button className='checkout'>Proceed to checkout
                          {/* <div className=''>
                Thank you! Your order has been received.
                          </div> */}
            </button>
            {/* <div className='checkout'>Thank you! Your order has been received.</div> */}
          </div>
        </div>

        </div>




      </div>
    )
  }

  emptyCart() {
    return (
      <div className=''>
        <span className=''>Shopping Cart</span>
        <br></br>
        <span className=''>Your Shopping Cart is empty.</span>
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
