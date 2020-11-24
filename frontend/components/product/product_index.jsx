import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true}
    
  }
  componentDidMount(){
    if (this.props.match.params.searchQuery === undefined) {
      this.props.fetchProducts()
      .then( () => {this.setState({loading: false}) })
    }
    else {
      this.props.getSearchProducts(this.props.match.params.searchQuery);
    }
  }
  welcomeMessage(){
    if(this.props.user){
      return (<div className="message-style">Welcome back, {this.props.user.fname}!</div>)
    }else{
      return [];
    }
  }

  render(){
    if (this.state.loading){
      return <div></div>
    }
    return(
      <div>
        <div className="message-main">
            <div className="message-box">{this.welcomeMessage()}</div>
        </div>
        <ul className="container-main">
          <div className="container-items">
              {this.props.products.map( (product) =>{
              return <ProductIndexItem product={product} key={product.id}/>
              })}
          </div>
          </ul>
      </div>

    )
  }
}

export default ProductIndex;