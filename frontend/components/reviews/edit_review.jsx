import React from "react";
import { requestReview } from "../../actions/review_actions";

class EditReview extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.reviews.body,
      rating: this.props.reviews.rating,
      id: this.props.reviews.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInput = this.handleInput.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    let review = Object.assign({}, this.state)
    review.product_id = this.props.review.product_id
    this.props.editReview(this.props.review.id, review)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }


  StarRating() {
    const updateRating = (ratingValue) => {
      this.setState({ rating: ratingValue })
    }
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => updateRating(ratingValue)} />

              <i className="fas fa-star"
                id={ratingValue <= (this.state.rating) ? "checked" : "notChecked"}
                onMouseEnter={() => updateRating(ratingValue)}
              />
            </label>
          )
        })}
      </div>
    )
  }
  componentDidMount(){
    this.props.requestReview(this.props.match.params.review)
  }

  render(){
    if (this.props.reviews === undefined) {
      return null
    }
    return(
    <div className="review-form-div">
      <div onClick={this.props.closeModal} className='close-X' id="reviewButton">×</div>

      <form className="review-form" onSubmit={this.handleSubmit}>
        <div className="review-title">Edit Review</div>

        <div className="body-div">
          <textarea
            type="text"
            placeholder="Write here"
            value={this.state.body}
            onChange={this.handleInput("body")} />
        </div>

        <div className="rating-div">
          {this.StarRating()}
        </div>

        <div className="submit-but-div">
          <button>Submit Review</button>
        </div>
      </form>

      {/* <div className="review-errors">
                  {this.renderErrors()}
                </div> */}

    </div>

    )
  
}

}

export default EditReview;