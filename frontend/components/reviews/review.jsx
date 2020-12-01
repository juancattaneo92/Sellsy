import React from "react"
import ReviewIndex from "./review_index"

class Review extends React.Component {


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
              <ReviewIndex
                key={review.id}
                review={review}
                userId={this.props.userId}
                deleteReview={this.props.deleteReview}
                returnSingleReview={this.props.returnSingleReview}
                openModal={this.props.openModal}
              />)}
              </div>
         
          </div>
      
      </div> 
    )
  }

}

export default Review