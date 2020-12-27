import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import ReviewFormContainer from '../reviews/create_review_form_container';
import EditReviewFormContainer from "../reviews/edit_review_container";

function Modal({ modal, closeModal, clearErrors}) {

  if (!modal) {
    return null;
  }

  // if (Object.isObject(modal)){
  //   modal === "edit-review"
  // }
  // let test2 = {};
  // if (modal instanceof Object){
  //   return test2;
  // };

  let component;
  if(modal["modal-type"] && modal["review"]){
    let editModal = modal;
    switch (modal) {
      case editModal:
        component = <EditReviewFormContainer review={modal["review"]}/>;
        break;
      default:
        return null;
    }
  }else{
    switch (modal) {
      case 'login':
        component = <LoginFormContainer />;
        break;
      case 'signup':
        component = <SignupFormContainer />;
        break;
      case "create-review":
        component = <ReviewFormContainer />;
        break;
      default:
        return null;
    }
  }
  // debugger
  return (
    <div className="modal-background" onClick={closeModal} onChange={clearErrors} >
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mSTP = (state) => {
  return {
    modal: state.ui.modal,
  };
};

const mDTP = (dispatch) => {
  return {
    closeModal: () => { dispatch(closeModal()) }
}
};

export default connect(mSTP, mDTP)(Modal);
