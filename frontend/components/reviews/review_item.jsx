import React from "react";
// import AverageRating from "./average_rating";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteReview(this.props.review.id)
  }

  currentStars() {
    return (
      <div className="starRating-current">
        {[...Array(5)].map((star, i) => {

          return (
              <i className="fas fa-star"
                key={i}
                id={i + 1 <= this.props.review.rating ? "checked" : "notChecked"}>
              </i>
          )
        })}
      </div>
    )
  }

  currentDate(){
    let date = this.props.review.updated_at.split("T")[0]
    return date;
  }
  

  //INDIVIDUAL REVIEW:
  // Name => Date => Rating => Review Body => Buttom Delete (only for user log in) => Buttom Edit (only for user log in)
  render() {
  
    return (
      <div className="review-index-div">
        <div className="user-name">
          <div className="reviewing-user">{this.props.review.user}</div>
          <div className="review-date">{this.currentDate()}</div>
        </div>

        <div className="stars-icon-div">{this.currentStars()}</div>

        <div className="body-cont">
          <div>{this.props.review.body}</div>
        </div>

        {this.props.userId === null ? null : <button className="review-button2" onClick={this.handleDelete}>Delete</button>}
        {/* {this.props.userId === this.props.review.id.user_id ? <button className="review-button2" onClick={this.handleEdit}>Edit</button> : null} */}
        {this.props.userId === null ? null : <button className="review-but" onClick={() => this.props.openModal("edit-review")}>Edit</button>}

        <div className="borderLine"></div>

      </div>
    )
  }
}

export default ReviewItem;