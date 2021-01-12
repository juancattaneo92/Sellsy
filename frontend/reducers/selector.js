// export const selectCategoryProducts = (allProducts, categoryId) => {
//   const selectedProducts = [];
//   Object.keys(allProducts).forEach(id => {
//     if (allProducts[id].category_id == categoryId) {
//       selectedProducts.push(allProducts[id]);
//     }
//   });

//   return selectedProducts;
// }


export const selectProductsByCategory = (state, categoryName) => {
  let categoryObject = Object.values(state.entities.categories).filter((category) => {
    return category.name === categoryName
  })

  return Object.values(state.entities.products).filter((product) => {
    return product.category_id === categoryObject[0].id
  })
}