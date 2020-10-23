import React from 'react';
import PhotosShowCarousel from "./photos_show_carousel";

class PhotoShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedPhoto: 0 }
    this.selectPhoto = this.selectPhoto.bind(this)
  }

  selectPhoto(num) {
    this.setState({ selectedPhoto: num })
  }
  render() {

    return (
      <div className="picture-container1">
        <div className="small-pics">
          <PhotosShowCarousel
            selected={this.state.selectedPhoto}
            photos={this.props.photos}
            selectedPhoto={this.state.selectedPhoto}
            selectPhoto={this.selectPhoto}
          />
        </div>
          <div className="big-pic">
            <img className="picture-image" src={this.props.photos[this.state.selectedPhoto]} />
          </div>
      </div>

    )
  }
}

export default PhotoShowMain;