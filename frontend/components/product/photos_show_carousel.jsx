import React from 'react'

class PhotosShowCarousel extends React.Component {

  render() {
    return (
      <div className="picture-container2">

        {this.props.photos.map((p, i) => (

            <img className="small-pictures"
              key={i}
              src={p}
              onClick={() => this.props.selectPhoto(i)}
              // className={this.props.selected === i ? "" : "ind-photo"
              />
          ))}
      </div>
    )
  }
}

export default PhotosShowCarousel;