import React from 'react';

class AverageRating extends React.Component {

  reviewCount() {
    return this.props.reviews.length
  }

  starFillPercentage() {
    const allReviews = this.props.reviews;
    const reviewCount = allReviews.length;
    const ratings = this.props.reviews.map(review => review.rating);
    const ratingSum = Object.values(ratings).reduce((sum, key) => sum + key);
    const ratingAvg = (ratingSum / reviewCount);
    const starRounded = Math.round((ratingAvg / 5) * 100);
    const starPercentageRounded = Math.round(starRounded / 10) * 10;
    return starPercentageRounded;
  }

  render() {
    if (!this.props.reviews.length) return null

    return (
      <div className="rating-avg">
        <div className="stars">★★★★★</div>
         
          {/* <i class="fa">&#xf006" </i>
          <i class="fa">&#xf006"</i>
          <i class="fa">&#xf006"</i>
          <i class="fa">&#xf006</i>
          <i class="fa">&#xf006</i>

          <div className="stars-inside" style={{ width: `${this.starFillPercentage()}%` }}>
            <i class="fa">&#xf006"</i>
            <i class="fa">&#xf006"</i>
            <i class="fa">&#xf006"</i>
            <i class="fa">&#xf006"</i>
            <i class="fa">&#xf006"</i>
          </div> */}
          
  
        {/* <div className='review-total'>
          ({this.reviewCount()})
        </div> */}

      </div>
    )
  }
}

export default AverageRating