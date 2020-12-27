import React from 'react';
import { Link } from 'react-router-dom';

class CartItems extends React.Component {
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
    let numItems = Object.values(this.props.userCartItems).length;
    let cartItemsArr = Object.keys(this.props.userCartItems);
    let actualItemsArr = Object.values(this.props.userCartItems);

    return (
      <div className='cart-wholePage'>
        <div className='cart-header'>
            <h1>Shopping Cart</h1>
            <button>Keep Shopping</button>
        </div>

        <div className='cart-shoppingPage'>

          <div className='cart-div'>
            <ul className=''>
              {cartItemsArr.map(cartItemId => (
                <li className='' key={cartItemId}>
                  <div className=''>
                    <div className=''>
                      <img className='' src={this.props.userCartItems[cartItemId].main_photoUrl}></img>
                    </div>
                    <div className=''>
                      <Link className='' to={`/products/${this.props.userCartItems[cartItemId].id}`}>
                        <span className=''>{this.props.userCartItems[cartItemId].title}</span>
                      </Link>

                      {/* <span className=''>In Stock</span>
                      <span className=''>FREE Shipping & FREE Returns</span> */}
                      {/* <label className=''>
                        <input type='checkbox' className='yes-gift' /><span className='gift-text'>This is a gift</span>
                      </label> */}
                      <div className='qty-delete-row'>
                        <select className='quantity-cart' value='Qty:'>
                                                  <option value='1'>Qty: 1</option>
                                                  <option value='2'>2</option>
                                                  <option value='3'>3</option>
                                                  <option value='4'>4</option>
                                                  <option value='5'>5</option>
                                                  <option value='6'>6</option>
                                                  <option value='7'>7</option>
                                                  <option value='8'>8</option>
                                                  <option value='9'>9</option>
                                                  <option value='10'>10</option>
                                              </select>
                        <button className='' onClick={() => this.props.deleteCartItem(cartItemId)}>Delete</button>
                      </div>
                    </div>
                  </div>


                  <div className=''>
                    <div className=''>
                      <span className=''>$</span><div className=''>{(Math.round(this.props.userCartItems[cartItemId].price * 100) / 100).toFixed(2)}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        <div className='checkout-div'>
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

export default CartItems;