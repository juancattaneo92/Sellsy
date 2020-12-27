import React from 'react';
import { Link } from 'react-router-dom';
import ReviewIndexContainer from "../reviews/review_index_container";
import AverageRatingContainer from "../reviews/average_rating_container";
import PhotoShowMain from "../product/photos_show_main";
import { fetchProducts, fetchProduct } from '../../actions/product_actions';
import { openModal } from "../../actions/modal_actions";


class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      loading: true
    };
    this.addToCart = this.addToCart.bind(this);
    this.addItem = this.addItem.bind(this);


  }

  componentDidMount(){
    this.props.fetchProduct(this.props.match.params.productId)
    .then( () => {
      this.setState({loading: false})
    })
    // if (this.props.currentUser) {
    //   this.props.fetchAllCartItems()
    // }
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


  addItem() {
    // debugger
    // let pathArray = this.props.location.pathname.split("/")
    // let productId = pathArray[pathArray.length - 1]
    let newItem = {
      user_id: this.props.sessionId,
      product_id: this.props.match.params.productId,
      quantity: this.state.quantity
    }
    this.props.createCartItem(newItem);
  }


  addToCart(e) {
    // debugger
    e.preventDefault();

    if (this.props.sessionId) {
      let { product, userCartItems } = this.props;
      let cartItems = Object.values(userCartItems);
      let itemsArr = [];
      for (let i = 0; i < cartItems.length; i++) {
        itemsArr.push(cartItems[i])
      }
      if (itemsArr.includes(product)) {
        return (
          <div>
            <span className=''>
              already added to your cart
             </span>
          </div>
        )
      } else {
        this.addItem(product);
      }
    } else {
      this.props.openModal('login');
      // <button onClick={() => dispatch(openModal('login'))}>Login</button>
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
            <div className="title-show">{this.props.product.title}</div>
            <div className="rating-avg"><AverageRatingContainer productId={this.props.product.id} reviews={this.props.reviews} /></div>
            <div className="price-show">${this.props.product.price}.00</div>
            <div className="description-show">{this.props.product.description}</div>
            <button onClick={this.addToCart} className="buttom-tobuy">Add to cart </button>
        </div>

          <div className="child-comments">
            <ReviewIndexContainer
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