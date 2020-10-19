import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component{

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId);
  }

  render(){
    return(
      <div>
        {this.props.product.title}
        {this.props.product.description}
        {this.props.product.price}
        <Link to={'/'}>Link to Index</Link>
      </div>
    )
  }
}

export default ProductShow;