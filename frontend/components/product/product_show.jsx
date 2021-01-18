import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from "../reviews/review_index_container";
import AverageRatingContainer from "../reviews/average_rating_container";
import PhotoShowMain from "../product/photos_show_main";
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
// import { openModal } from "../../actions/modal_actions";



class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      loading: true,
      hideCloseButton: true,
      // inProp: false
    };
    this.addToCart = this.addToCart.bind(this);
    this.createCart = this.createCart.bind(this);
    // this.handlePopup = this.handlePopup.bind(this);


  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    this.props.requestReviews(this.props.match.params.productId)
    .then( () => {
      this.setState({loading: false})
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.productId !== prevProps.match.params.productId) {
      this.props.fetchProduct(this.props.match.params.productId)
    }

    if (this.props.reviews.length > prevProps.reviews.length) {
      this.props.closeModal()
    }
  }


  createCart() {
    let newItem = {
      user_id: this.props.user.id,
      product_id: this.props.match.params.productId,
      quantity: this.state.quantity
    }
    this.props.createCartItem(newItem);
  }


  addToCart(e) {
    e.preventDefault();
    // debugger
    if (!this.props.user) {
      // debugger
      this.props.openModal("login")
   }else {
      this.createCart()
   }
  }

//   handlePopup() {
//     // var popup = document.getElementById("myPopup");
//     // popup.classList.toggle("show");
//   var popup = ReactDOM.findDOMNode(this.refs.btn);
//   popup.classList.toggle('show');

//     document.getElementById("myDIV").classList.add("mystyle"); 
// }

  //  { this.props.currentUser === null ? null : <button className="review-but" onClick={() => this.props.openModal("create-review")}>Create a Review</button> }
  // handlePopup() {
  //   let msgbutton = document.querySelector("buttom-tobuy");
  //   msgbutton.addEventListener("click", function () {
  // });
  // let msgboxNoClose = new MessageBox("#msgbox-area", {
  //   closeTime: 5000,
  //   hideCloseButton: false
  // });
  // return msgboxNoClose.show("Added to Cart")

  // }
  

  render(){
    if (this.state.loading || !this.props.product || !this.props.reviews){
      return <div></div>
    }
    let reviewsIndexComponent = <div></div>;

    if (this.props.user){
      reviewsIndexComponent = 
      <ReviewIndexContainer
        reviews={this.props.reviews}
        product={this.props.product}
        productId={this.props.product.id}
        requestReviews={this.props.requestReviews}
        openModal={this.props.openModal}
        userId={this.props.user.id}
      />  
    }else if(!this.props.user){
      reviewsIndexComponent =
        <ReviewIndexContainer
          reviews={this.props.reviews}
          product={this.props.product}
          productId={this.props.product.id}
          requestReviews={this.props.requestReviews}
          openModal={this.props.openModal}
        />  
    }

    return(
    <div className="whole-showpage">
      <div className="show-main">

          <div className="show-child-left">
            <PhotoShowMain photos={this.props.product.photoUrls}/>
        </div>

        <div className="show-child-right">
            <div className="title-show">{this.props.product.title}</div>
            <div className="rating-avg"><AverageRatingContainer productId={this.props.product.id} reviews={this.props.reviews} /></div>
            <div className="price-show">${this.props.product.price}.00</div>
            <div className="description-show">{this.props.product.description}</div>
            {/* <button onClick={this.addToCart} className="buttom-tobuy">Add to cart 
            <div className='item-added'>
                <span className='check-mark'></span> Added to Cart
           </div>  */}
            <button onClick={this.addToCart} className="buttom-tobuy" type="button">Add to cart
              {/* {this.handlePopup} */}
              </button>
            {/* </button> */}
        </div>

          <div className="child-comments">
            {reviewsIndexComponent}
            {/* <ReviewIndexContainer
              reviews={this.props.reviews}
              product={this.props.product}
              productId={this.props.product.id}
              requestReviews={this.props.requestReviews}
              openModal={this.props.openModal}
              userId={this.props.user.id}
            />   */}
          </div>      
      </div>
    </div>
    )
  }
}

export default ProductShow;