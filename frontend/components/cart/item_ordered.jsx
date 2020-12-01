// import React from 'react'

// class ItemOrdered extends React.Component {

//   render() {

//      return (
//       <div key={product.id} className="cart-item-div" >
//         <Link
//           className="public-product-links" to={`/products/${product.id}`} >
//           <img className="idx-images" src={product.photoUrl} alt="" /> {product.title}
//         </Link>
//         <br />

//         <div className="quantity">
//           <label className="quantity-word">Quantity:{" "} </label>
//           <div className="quantity-num"> {cartItem[1].quantity}</div>
//         </div>

//         <div className="quantity">
//           <div className="quantity-word"> Total:{" "} </div>
//           <div className="quantity-num">  ${this.total(cartItem)}.00 </div>
//         </div>

//         <button
//           className="delete-item-in-cart" onClick={() => this.deleteItem(cartItem[1])} >Delete Item</button>
//       </div>
//     ); 


//   }
// }

// export default ItemOrdered;