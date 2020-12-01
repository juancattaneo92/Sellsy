import React from 'react';
import { Link } from 'react-router-dom';
import ReviewContainer from "../reviews/review_container";
import AverageRatingContainer from "../reviews/average_rating_container";
import PhotoShowMain from "../product/photos_show_main";
// import { createCartItem } from "../../actions/shopping_cart_actions";
import { fetchtAllCartItems, updateCartItem, createCartItem } from '../../actions/shopping_cart_actions';
import { fetchProducts, fetchProduct } from '../../actions/product_actions';

class ProductShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      quantity: 1,
      loading: true,
      inProp: false,
    };
    // this.state = {loading: true};
    this.addToCart = this.addToCart.bind(this);
    // this.popUp = this.popUp.bind(this);
    // this.clearPopUp = this.clearPopUp.bind(this);
    // this.toTop = this.toTop.bind(this);
    this.checkCart = this.checkCart.bind(this);

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
  // addProductToCart(e) {
  //   e.preventDefault();
  //   // let { sessionId, product } = this.props;
  //   let userId = this.props.userId

  //   if (userId === null) {
  //     this.props.openModal();
  //   } else {
  //     this.props.receiveCartItems(this.props.product)


    //   this.setState({ quantity: 1 });
        
      // createCartItem(this.props.product);

    

      // createCartItem()({
        // user_id: sessionId,
        // product_id: product.id,
        // quantity: this.state.quantity,
        // cartItem
      // });

  //     // this.props.history.push("/cartItems");
  //   }
  // }

  checkCart(currentItem) {
    if (this.props.userCartItems.length === 0) {
      this.props.createCartItem({
        user_id: this.props.sessionId,
        product_id: currentItem.id,
        quantity: this.state.quantity,
      });
    } else {
      let cartItems = this.props.userCartItems;
      let productIdMap = cartItems.map(cartItem =>
        cartItem.product.id
      )
      let cartIdMap = cartItems.map(cartItem =>
        cartItem.id
      )
      let quantityMap = cartItems.map(cartItem =>
        cartItem.quantity)
      if (productIdMap.includes(currentItem.id)) {
        let productIndex = productIdMap.indexOf(currentItem.id);
        this.props.updateCartItem({ quantity: quantityMap[productIndex] + 1 }, cartIdMap[productIndex])
      } else {
        this.props.createCartItem({
          user_id: this.props.sessionId,
          product_id: currentItem.id,
          quantity: this.state.quantity,
        });
      }
    }
  }

  addToCart(e) {
    e.preventDefault();
    let { sessionId, product } = this.props;
    if (sessionId === null) {
      this.props.receiveBuy();
      this.props.openModal();
    } else {
      this.setState({ inProp: true });
      this.checkCart(product)
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