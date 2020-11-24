export const selectCategoryProducts = (allProducts, categoryId) => {
  const selectedProducts = [];
  Object.keys(allProducts).forEach(id => {
    if (allProducts[id].category_id == categoryId) {
      selectedProducts.push(allProducts[id]);
    }
  });

  return selectedProducts;
}