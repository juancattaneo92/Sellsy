import { RECEIVE_CATEGORY } from "../actions/category_actions";

const categoryReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CATEGORY:
      return action.category;
    default:
      return state;
  }
};

export default categoryReducer;

