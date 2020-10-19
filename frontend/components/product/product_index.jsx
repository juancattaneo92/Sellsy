import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true}
  }
  componentDidMount(){
    this.props.fetchProducts()
    .then( () => {
        this.setState({loading: false})
    })
  }

  render(){
    if (this.state.loading){
      return <div></div>
    }
    return(
       
        <ul className="grid-container">
              {this.props.products.map( (product) =>{
              return <ProductIndexItem product={product} key={product.id}/>
              })}
          </ul>

    )
  }
}

export default ProductIndex;