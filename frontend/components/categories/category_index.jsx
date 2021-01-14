import React from 'react';
import { Link } from 'react-router-dom';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.setCategory = this.setCategory.bind(this)
  }
    
  setCategory(category) {
    $('html,body').scrollTop(0);
    this.props.receiveCategory(category)
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
        <Link onClick={() => this.setCategory("jewelry-accessories")} to="/jewelry-accessories" className="category">Jewelry &amp; Accessories</Link>
        <Link onClick={() => this.setCategory("clothing-shoes")} to="/clothing-shoes" className="category">Clothing &amp; Shoes</Link>
        <Link onClick={() => this.setCategory("home-living")} to="/home-living" className="category">Home &amp; Living</Link>
        <Link onClick={() => this.setCategory("wedding-party")} to="/wedding-party" className="category">Wedding &amp; Party</Link>
          {/* <Link onClick={() => this.setCategory("Toys&Entertainment")} to="/toys-entertainment" className="category">Toys &amp; Entertainment</Link> */}
        <Link onClick={() => this.setCategory("art-collectibles")} to="/art-collectibles" className="category">Art &amp; Collectibles</Link>
        <Link onClick={() => this.setCategory("craft-supplies")} to="/craft-supplies" className="category">Craft Supplies</Link>
        <Link onClick={() => this.setCategory("gifts")} to="/gifts" className="category">Gifts</Link>  
      </div>
    )
  }
}

export default(CategoryIndex);

// export default withRouter(CategoryIndex);