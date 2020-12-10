import React from 'react';
import { Link } from 'react-router-dom';
import ItemOrdered  from './item_ordered';

class CartItems extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      render: [false],
      // loading: true,
      grandTotal: 0
    }

    this.uniqueProducts = this.uniqueCartItems.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.total = this.total.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
    this.filledCart = this.filledCart.bind(this);
    this.purchase = this.purchase.bind(this);
  }


  componentDidMount() {
    this.props.fetchAllCartItems()
    // this.props.fetchProducts()
    // .then(
    //     this.setState({loading: false})
    // )
    // this.props.fetchProduct();

  }
  
  // componentWillUnmount(){
  //   this.props.fetchProducts();


  // }

  purchase() {
    this.props.userCartItems.forEach(cartItem => {
      this.props.createOrderItem({
        orderer_id: cartItem.user_id,
        order_item_id: cartItem.product.id,
        quantity: cartItem.quantity
      })
      this.props.deleteCartItem(cartItem.id)
    })
  }

  deleteItem(cartItem) {
    let newQuantity = cartItem.quantity - 1

    if (cartItem.quantity <= 1) {
      this.props.deleteCartItem(cartItemId)
    } else {
      this.props.updateCartItem({ quantity: newQuantity }, cartItemId)

    }
  }

  total(cartItem) {
    return cartItem[1].product.price * cartItem[1].quantity
  }

  uniqueCartItems() {
    let userCartItems = this.props.userCartItems

    let newCartItems = {}
    userCartItems.forEach(userCartItem => {
      if (newCartItems[userCartItem.product.id]) {
        newCartItems[userCartItem.product.id].quantity += userCartItem.quantity
      } else {
        newCartItems[userCartItem.product.id] = { product: userCartItem.product, quantity: userCartItem.quantity, deleteableId: userCartItem.id }
      }
    })

    return newCartItems
  }

  emptyCart() {
    return (
      <div>
        <h1 className="header">Your Cart</h1>
        <div className="buy-page">
          <div className="empty-cart-div">
            <div className="header">Thanks for shopping with us!</div>
          </div>
        </div>
      </div>
    )
  }

  filledCart(cartItemsObj) {
    let totalAmountMoney = 0;

    return (

      <div className="cart-wholePage">

        <div className="header">
            <h1>Your Cart</h1>
        </div>

      <div className="main-buy-div"> 
        <div className="buy-page-div">
          <div className="new-cart-div"> {cartItemsObj.map(cartItem => { 
            let product = cartItem[1].product
            totalAmountMoney += this.total(cartItem);

              return (
              <div key={product.id} className="cart-item-div" >
                <div className="cart-item-container">

                  <Link
                    className="public-product-links" to={`/products/${product.id}`} >
                    <img className="idx-images" src={product.photoUrl} alt="" /> {product.title}
                  </Link>

                  <div className="quantity">
                    <label className="quantity-word">Quantity:{" "} </label>
                    <div className="quantity-num"> {cartItem[1].quantity}</div>
                  </div>

                  <div className="quantity">
                    <div className="quantity-word"> Total:{" "} </div>
                    <div className="quantity-num">  ${this.total(cartItem)}.00 </div>
                  </div>

                </div>

                <button className="delete-item-in-cart" onClick={() => this.deleteItem(cartItem[1])} >Delete Item</button>
              </div>
            ); 
          })}
          </div>
        </div>

          <div className="checkout-div">
            <div className="checkout-title">How you'll pay</div>
            <div className="checkout-subtitle">Choose Your payment method:</div>
            <div id="all-total" className="quantity-word">Item(s) total: ${totalAmountMoney}.00 </div>
            <button onClick={() => this.purchase()} className="checkout" >Purchase</button>
          </div>


      </div>
      </div>
    )

  }

  render() {
    // if (this.state.loading){
    //   return (<div>REact Broken</div>)
    // }else{
      let cartItemsObj = Object.entries(this.uniqueCartItems());
      return (cartItemsObj.length === 0 ? this.emptyCart() : this.filledCart(cartItemsObj))
    // }
  }
}

export default CartItems

