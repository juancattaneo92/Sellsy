import React from 'react';
import { Link } from 'react-router-dom';
// import PublicCategoryIdxItem from './public_category_item';
// // import { withRouter } from 'react-router-dom'

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this)
  }
    
  setCategory(category) {
      
    
  // this.props.category
}

    // "Jewelry&Accessories",
    // "Clothing&Shoes",
    // "Home&Living",
    // "Wedding&Party",
    // "Toys&Entertainment",
    // "Art&Collectibles",
    // "CraftSupplies",
    // "Gifts"

  render() {
    return (
        
        <div className="header-categories">
          <Link onClick={() => setCategory("Jewelry&Accessories")} to="/jewelry-accessories" className="category">Jewelry &amp; Accessories</Link>
          <Link onClick={() => setCategory("Clothing&Shoes")} to="/clothing-shoes" className="category">Clothing &amp; Shoes</Link>
          <Link onClick={() => setCategory("Home&Living")} to="/home-living" className="category">Home &amp; Living</Link>
          <Link onClick={() => setCategory("Wedding&Party")} to="/wedding-party" className="category">Wedding &amp; Party</Link>
          <Link onClick={() => setCategory("Toys&Entertainment")} to="/toys-entertainment" className="category">Toys &amp; Entertainment</Link>
          <Link onClick={() => setCategory("Art&Collectibles")} to="/art-collectibles" className="category">Art &amp; Collectibles</Link>
          <Link onClick={() => setCategory("CraftSupplies")} to="/craft-supplies" className="category">Craft Supplies</Link>
          <Link onClick={() => setCategory("Gifts")} to="/gifts" className="category"></Link>  
      </div>
    )
  }
}

export default(CategoryIndex);

// export default withRouter(CategoryIndex);