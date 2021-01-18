import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

// class PopUpThanks extends React.Component {
const PopUpThanks = ({closeModal}) => {

    return (
      <div>
        <div onClick={closeModal} className='close-x' id="popup">×</div>
        <div className="popup-div">
          {/* <div className="close-x" onClick={closeModal}>x</div> */}

          <div >
            <h3>Thank you for visiting Sellsy!</h3>
            <div className="bio-name">
              Sellsy is a project by Juan Carlos Cattaneo, a web developer 
              graduated from App Academy. If you would like to see more projects, 
              please visit this {" "}<a className="webname"href="" target="_blank">website</a>.
                </div>
              <div className="bio-message">
              The products on this site are for demo purposes only if you are interested 
              \in purchasing you can go to the original <a href="https://www.etsy.com/" 
              target="_blank">website</a>.
              </div>

            </div>
          </div>
      </div>

    );
}

const mDTP = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(null, mDTP)(PopUpThanks)