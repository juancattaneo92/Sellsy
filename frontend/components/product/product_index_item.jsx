import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
let product = props.product

  return (
    <div className="grid-main">
      <Link to={`/products/${product.id}`} className="grid-item-link">
        <li className="grid-item">
          <div className="image-holder">
            <img src={product.main_photoUrl}/> 
          </div>
          <div className="name-holder">{product.title}</div>
          <div className="price-holder">${product.price}.00</div>
        </li>
      </Link>
    </div>
      
  )
}

export default ProductIndexItem;
