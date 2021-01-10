import React from "react";
// import AverageRating from "./average_rating";

class ReviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
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
    
    let buttonDelete = <div></div>;
    let buttonEdit = <div></div>;

    if (this.props.currentUser){
      buttonDelete = this.props.userId !== parseInt(this.props.currentUser.id) ? <div></div> : <button className="review-but" onClick={this.handleDelete}>Delete</button>;
      buttonEdit = this.props.userId !== parseInt(this.props.currentUser.id) ? <div></div> : <button className="review-but" onClick={() => this.props.openModal({ "modal-type": "edit-review", "review": this.props.review })}>Edit</button>;
    }
  

    return (
      <div>
      <div className="review-index-div">

        <div className="review-top-area">
            <div className="review-name-date-buttons">

                <div className="review-user-name">
                  <div className="review-user">{this.props.review.user}</div>
                  <div className="review-date">{this.currentDate()}</div>
                </div>
            </div>

                <div className="edit-delete-buttons">
                    {buttonEdit}
                    {buttonDelete}
                </div>
        </div>

            <div className="stars-icon-div">{this.currentStars()}</div>
            <div className="body-cont">{this.props.review.body}</div>
     
      </div>

      <div className="borderLine"></div>


      </div>
    )
  }
}

export default ReviewItem;