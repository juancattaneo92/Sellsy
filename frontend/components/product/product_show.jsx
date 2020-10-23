import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from "../reviews/review_container";
import AverageRating from "../reviews/average_rating";
import PhotoShowMain from "../product/photos_show_main";

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

  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId !== prevProps.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId)
        // .then(() => {
        //   this.setState({ loading: false })
        // })
    }

    if (this.props.reviews.length > prevProps.reviews.length) {
      this.props.closeModal()
        // .then(() => {
        //   this.setState({ loading: false })
        // })
    }
  }
  

  render(){
    if (this.state.loading){
      return <div></div>
    }
    return(
    <div className="whole-showpage">
      <div className="show-main">

          <div className="show-child-left">
            <PhotoShowMain photos={this.props.product.photoUrls}/>
        </div>

        <div className="show-child-right">
            <div className="rating-avg"><AverageRating reviews={this.props.reviews}/></div>
            <div className="title-show">{this.props.product.title}</div>
            <div className="price-show">${this.props.product.price}</div>
            <div className="description-show">{this.props.product.description}</div>
            <div className="buttom-tobuy">Add to Cart </div>
        </div>

          <div className="child-comments">
            <ReviewContainer
              reviews={this.props.reviews}
              product={this.props.product}
              productId={this.props.product.id}
              requestReviews={this.props.requestReviews}
              openModal={this.props.openModal}
              userId={this.props.userId}

            />  
          </div>

          
      </div>
    </div>
    )
  }
}

export default ProductShow;
{/* <Link to={'/'}>Link to Index</Link> */}