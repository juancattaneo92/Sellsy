import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = (props) => {
let product = props.product

  return (
    <div className="grid-item">
      <Link to={`/products/${product.id}`} className="grid-item-link">
        <li className="individual-item">
          <div className="image-holder">Image</div>
          <div className="name-holder">{product.title}</div>
          <div className="price-holder">${product.price}.00</div>
        </li>
      </Link>
    </div>
      
  )
}

export default ProductIndexItem;

// class ProductIndexItem extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.history.push(`/products/${product.id}`);
//   }

//   render() {
    
//     return (
//       < div className="grid-item" onClick={this.handleClick}>
//         <li className="individual-item">
//           <div className="image-holder">Image</div>
//           <div className="name-holder">{this.props.product.title}</div>
//           <div className="price-holder">${this.props.product.price}.00</div>
//         </li>
//     </div > 
//     );
//   }
// }

// export default ProductIndexItem;