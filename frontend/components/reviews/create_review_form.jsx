import React from "react";

class CreateReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      rating: 0,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let review = Object.assign({}, this.state)
    review.product_id = this.props.productId
    this.props.createReview(this.props.productId, review)
  }

  handleInput(inputType) {
    return e => this.setState({ [inputType]: e.target.value })
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={`error-${i}`}>{error}</li>
  //       ))}
  //     </ul>
  //   )
  // }

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

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }
//Form Modal to create a Review
  render() {
    return (
      <div className="review-form-div">
        <div onClick={this.props.closeModal} className='close-X' id="reviewButton">×</div>

        <form className="review-form" onSubmit={this.handleSubmit}>
            <div className="review-title">Leave Review</div>

                <div className="body-div">
                  <textarea
                    type="text"
                    placeholder="Write here"
                    value={this.state.body}
                    onChange={this.handleInput("body")}/>
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

export default CreateReviewForm; 