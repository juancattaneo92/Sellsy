import React from 'react';
import { Link } from 'react-router-dom';

class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {loading: true}
  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    .then( () => {
      this.setState({loading: false})
    })
  }

  render(){
    if (this.state.loading){
      return <div></div>
    }
    return(
    <div className="whole-showpage">
      <div className="show-main">

        <div className="show-child-left">

          <div className="child-images">
            <div className="small-images">
              <div className="carosel-images">1</div>
              <div className="carosel-images">2</div>
              <div className="carosel-images">3</div>
              <div className="carosel-images">4</div>
              <div className="carosel-images">5</div>
              <div className="carosel-images">6</div>
            </div>
            <div className="big-image">
                <div className="picture-image"></div>
            </div>
          </div>

            <div className="child-comments">
              <div className="comments-form-show">Comments Form</div>
              <div className="comments-show">Comments</div>
            </div>
        </div>

        <div className="show-child-right">
            <div className="title-show">{this.props.product.title}</div>
            <div className="price-show">${this.props.product.price}</div>
            <div className="description-show">{this.props.product.description}</div>
            <div className="buttom-tobuy">Add to Cart </div>
        </div>

          
      </div>
    </div>
    )
  }
}

export default ProductShow;
{/* <Link to={'/'}>Link to Index</Link> */}