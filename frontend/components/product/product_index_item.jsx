import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
let product = props.product
  return (
    <div className="grid-item">
    <li className="individual-item">
      <Link to={`/products/${product.id}`} />
      <div className="image-holder">Image</div>
      <div className="name-holder">{product.title}</div>
      <div className="price-holder">${product.price}.00</div>
    </li>
    </div>
  )
}

export default ProductIndexItem;

