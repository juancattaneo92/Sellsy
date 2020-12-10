import React from "react"
import ReviewItem from "./review_item"

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReviews(this.props.product.id)
  }

  reviewToggle() {
    const reviewContainer = document.getElementById("review-index-cont").className
    const newReviewCont = reviewContainer === "review-index-cont" ? "review-index-hide" : "review-index-cont"
    document.getElementById("review-index-cont").className = newReviewCont
    const oldArrow = document.getElementById("review-arrow").className
    const newArrow = oldArrow === "fas fa-angle-up" ? "fas fa-angle-down" : "fas fa-angle-up"
    document.getElementById("review-arrow").className = newArrow
  }

  //This Shows Title Review => buttom Create a Review => show all reviews
  render() {
    if (this.props.reviews === undefined){ 
      return null
    }
    const reviewsRev = this.props.reviews.reverse()

    return (
      <div className="review-div">

        <div className="review-header">
            <div className="title-show2">Reviews
              <div className="review-button">
                {this.props.userId === null ? null : <button className="review-but" onClick={() => this.props.openModal("review")}>Create a Review</button>}
                <i onClick={this.reviewToggle}></i>
              </div>
            </div>
            
              <div className="review-cont">
                {reviewsRev.map(review =>
                  <ReviewItem
                    key={review.id}
                    review={review}
                    userId={this.props.userId}
                    deleteReview={this.props.deleteReview}
                    openModal={this.props.openModal}
                    returnSingleReview={this.props.returnSingleReview
                    }
                  />)}
              </div>  
          </div>
      </div> 
    )
  }

}

export default ReviewIndex;