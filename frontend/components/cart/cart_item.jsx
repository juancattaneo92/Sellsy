import React from 'react';
import { Link } from 'react-router-dom';

class CartItem extends React.Component{
  constructor(props){
    super(props);
      this.state = {
        quantity: this.props.quantity
        // quantity: this.props.counterHash[0][0]
      } 
  }



render() {

    return (

      <div className='cart-product'>
          {/* {console.log(this.props.userCartItems[cartItemId].id)} */}

          {/* IMAGE - GIFT COLUMN*/}
          <div className='cart-image-gift'>
          <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.id].id}`}>
              <img className='cart-image' src={this.props.userCartItems[this.props.id].main_photoUrl}></img>
            </Link>
            <label className=''>
              <input type='checkbox' className='yes-gift' /><span className='gift-text'>This order is a gift</span>
            </label> 
          </div>
          {/* TITLE - DELETE COLUMN */}
          <div className='cart-title-delete'>
            <div className='cart-title-div'>
            <div className='prod-title'>
              <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.id].id}`}>
                  <div className=''>{this.props.userCartItems[this.props.id].title}</div>
                </Link>
              </div>
              <Link className='grid-item-link' to={`/products/${this.props.userCartItems[this.props.id].id}`}>
                <div className='product-des'>{this.props.userCartItems[this.props.id].description}</div>
              </Link>
            </div>
            <div className=''> 
              <button className='cart-delete-but' onClick={() => this.props.deleteCartItem(this.props.id)}>Delete</button>
            </div>
          </div>
          {/* QUANTITY COLUMN*/}
          <div className='cart-qty'>
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
          </div>
          {/* PRICE COLUMN*/}
          <div className='cart-price'>
            <div className=''>${(Math.round(this.props.userCartItems[this.props.id].price * 100) / 100).toFixed(2)}</div>
            {/* <br/> */}
            <div className=''>Shipping: FREE</div>
          </div>
    
      </div>
      
    )

}
}

export default CartItem;