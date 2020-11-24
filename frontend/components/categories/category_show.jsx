import React from 'react';
import ProductIndexItem from '../product/product_index_item';

class CategoryShow extends React.Component {
  componentDidMount() {
    this.props.fetchCategory(this.props.match.params.categoryId);
    this.props.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.categoryId !== prevProps.match.params.categoryId) {
      this.props.fetchCategory(this.props.match.params.categoryId);
      this.props.fetchProducts();
    }
  }

  render() {
    let { products } = this.props;

    return (
      <ul className="grid-container">
        {products.map(product => {
          return (
            <li key={"productLi_" + product.id}>
              <div className="grid-item">
                <ProductIndexItem
                  product={product}
                  key={product.id}
                />
              </div>
            </li>
          );
        })}
      </ul>
    )
  }

}



export default CategoryShow;