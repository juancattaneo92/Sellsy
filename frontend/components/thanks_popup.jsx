import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

class ThanksPopUp extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="popup-div">
        <div onClick={this.props.closeModal} className='close-X' id="reviewButton">×</div>
 
        <div >
          <h3>Thank you for visiting Sellsy!</h3>
          <p className="bio">
            Sellsy is a project by{" "}
            <div className="bio-name">Juan Carlos Cattaneo</div>, a web developer graduated from App Academy. If you would like to see more projects, please visit this {" "}<a href="" target="_blank">website</a>.
              </p>
            <p>
            The products on this site are for demo purposes only if you are interested in purchasing you can go to the original <a href="https://www.etsy.com/" target="_blank">website</a>.
            </p>
          {/* <button onClick={this.props.togglePopup}>Close</button> */}
        </div>
        </div>
    );
  }
}

const mDTP = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(null, mDTP)(ThanksPopUp)