import React from "react";

class ReviewForm extends React.Component {
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

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    )
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
                <div>
                  <i className="far fa-star"
                    id={ratingValue <= (this.state.rating) ? "checked" : "notChecked"}
                    onMouseEnter={() => updateRating(ratingValue)}
                  />
                </div>
            </label>
          )
        })}
      </div>
    )
  }

  componentWillUnmount() {
    this.props.clearReviewErrors();
  }

  render() {
    return (
      <div className="review-form">
        <div onClick={this.props.closeModal} className='close-x'>×</div>
        <div className="review-errors">
          {this.renderErrors()}
        </div>
        <form
          className="review-form"
          onSubmit={this.handleSubmit}>
          <div className="rating-div">
            <label>Rating:
                        </label>
            {this.StarRating()}
          </div>
          <div>
            <label>Body:</label>
            <textarea
              type="text"
              value={this.state.body}
              onChange={this.handleInput("body")}/>
          </div>
          <button >Submit Review</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm; 