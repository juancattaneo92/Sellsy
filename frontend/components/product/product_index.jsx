import React from 'react';
import ProductIndexItem from './product_index_item';

class ProductIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = { loading: true};
    this.productsByCategory = this.productsByCategory.bind(this);
    this.allproducts = this.allproducts.bind(this)
    
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

  productsByCategory() {
    let category = this.props.match.path.split("/")[1]
    // debugger
    let filteredProducts = this.props.products.filter(product =>
      product.category === category
      )
      // console.log(filteredProducts)
    return (
      <div>
        <div>
          <div className="message-main">
            <div className="message-box">{this.welcomeMessage()}</div>
          </div>
          <ul className="container-main">
            <div className="container-items">
              {filteredProducts.map((product) => {
                return <ProductIndexItem product={product} key={product.id} />
              })}
            </div>
          </ul>
        </div>
      </div>
    )
  }

  allproducts() {
    return(
      <div>
        <div className="message-main">
          <div className="message-box">{this.welcomeMessage()}</div>
        </div>
        <ul className="container-main">
          <div className="container-items">   
            {this.props.products.map((product) => {
                  return <ProductIndexItem product={product} key={product.id} />
                })}
          </div>
        </ul>
      </div>

    )
  }

  render(){
  let path = this.props.match.path

    if (this.state.loading){
      return <div></div>
    }
    return (
        // <div>
        // {(() => {
        //   if (path === "/" || "/search/:searchQuery"){
        //     return this.allproducts();
        //   } else if (path === "/search/:searchQuery"){
        //     return this.allproducts();
        //   }else{
        //     return this.productsByCategory()
        //   }
        // })
        // }
        // </div>
      path === "/" || path === "/search/:searchQuery" ? this.allproducts() : this.productsByCategory()
    )
  }
}

export default ProductIndex;