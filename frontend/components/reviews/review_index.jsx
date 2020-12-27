import React from "react"
import ReviewItem from "./review_item"

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestReviews(this.props.product.id)
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
                {this.props.userId === null ? null : <button className="review-but" onClick={() => this.props.openModal("create-review")}>Create a Review</button>}
              </div>
            </div>
            
              <div className="review-cont">
                {reviewsRev.map(review =>
                  <ReviewItem
                    key={review.id}
                    review={review}
                    currentUser={this.props.currentUser}
                    userId={review.user_id}
                    deleteReview={this.props.deleteReview}
                    openModal={this.props.openModal}
                    returnSingleReview={this.props.returnSingleReview}
                  />)}
              </div>  
          </div>
      </div> 
    )
  }

}

export default ReviewIndex;