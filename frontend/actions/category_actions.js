// import * as CategoryApiUtil from "../util/category_api_util";

export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';


export const receiveCategory = (category) => {
  return ({
    type: RECEIVE_CATEGORY,
    category
  })
};

// export const fetchCategories = () => dispatch => {
//   return CategoryApiUtil.fetchCategories().then(
//     categories => dispatch(receiveCategories(categories)))
//   };

