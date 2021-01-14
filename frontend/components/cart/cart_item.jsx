import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component{
  constructor(props){
    super(props);
    this.product = this.props.userCartItems[this.props.cartItemId];
    this.state = {
              id: this.props.cartItemId,
              user_id: this.product.user_id,
              product_id: this.product.product_id,
              quantity: this.product.quantity, 
    }
    this.handleUpdateQuantity = this.handleUpdateQuantity.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdateQuantity(e){
    e.preventDefault()
    this.setState({ quantity: e.target.value })
    let updatedItem = Object.assign({}, this.state)
    updatedItem.quantity = e.target.value
    this.props.updateCartItem(updatedItem)
  }

  handleDelete(e){
    // debugger
    // e.preventDefault();
    this.props.deleteCartItem(this.props.cartItemId)
  }

render() {
  // debugger
  let subtotal = (Math.round(this.props.userCartItems[this.props.cartItemId].price * 100) / 100).toFixed(2) * (this.props.userCartItems[this.props.cartItemId].quantity)
    return (
      <div className='cart-product'>
          {/* IMAGE - GIFT COLUMN*/}
          <div className='cart-image-gift'>
          <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.cartItemId].id}`}>
              <img className='cart-image' src={this.props.userCartItems[this.props.cartItemId].main_photoUrl}></img>
            </Link>
            <label className=''>
              <input type='checkbox' className='yes-gift' /><span className='gift-text'>This order is a gift</span>
            </label> 
          </div>
          {/* TITLE - DELETE COLUMN */}
          <div className='cart-title-delete'>
            <div className='cart-title-div'>
            <div className='prod-title'>
              <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.cartItemId].id}`}>
                  <div className=''>{this.props.userCartItems[this.props.cartItemId].title}</div>
                </Link>
              </div>
              <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.cartItemId].id}`}>
                <div className='product-des'>{this.props.userCartItems[this.props.cartItemId].description}</div>
              </Link>
            </div>
            <div className=''> 
            <button className='cart-delete-but' onClick={() => this.handleDelete() }>Delete</button>
            </div>
          </div>
          {/* QUANTITY COLUMN*/}
          <div className='cart-qty'>
            {/* <select className='quantity-cart' value='Qty:'> */}
          <select className='quantity-cart' value={this.state.quantity} onChange={this.handleUpdateQuantity}>
              <option value='1'>Qty: 1</option>
              <option value='2'>Qty: 2</option>
              <option value='3'>Qty: 3</option>
              <option value='4'>Qty: 4</option>
              <option value='5'>Qty: 5</option>
              <option value='6'>Qty: 6</option>
              <option value='7'>Qty: 7</option>
              <option value='8'>Qty: 8</option>
              <option value='9'>Qty: 9</option>
              <option value='10'>Qty: 10</option>
            </select>
          </div>
          {/* PRICE COLUMN*/}
          <div className='cart-price'>
          <div className=''>${subtotal}</div>
            {/* <br/> */}
            <div className=''>Shipping: FREE</div>
          </div>
    
      </div>
      
    )

}
}

export default CartItem;