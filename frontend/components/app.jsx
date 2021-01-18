import React from 'react';
import {  Route, Switch, Link, Redirect} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Header from './header/header';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import CartIndexContainer from './cart/cart_index_container';
import Footer from './footer/footer';


const App = () => (
  <div>
    <Modal />
    <Header
      // {props}  
    />
    <Switch>  
      <Route exact path="/" component={ProductIndexContainer}/> 
      <Route path="/jewelry-accessories" component={ProductIndexContainer} />
      <Route path="/clothing-shoes" component={ProductIndexContainer} />
      <Route path="/home-living" component={ProductIndexContainer} />
      <Route path="/wedding-party" component={ProductIndexContainer} />
      <Route path="/art-collectibles" component={ProductIndexContainer} />
      <Route path="/craft-supplies" component={ProductIndexContainer} />
      <Route path="/gifts" component={ProductIndexContainer} />
      <Route exact path="/search/:searchQuery" component={ProductIndexContainer}/>
      <Route exact path="/products/:productId" component={ProductShowContainer} />   
      {/* <Route exact path='/categories/:categoryId' component={CategoryShowContainer} /> */}
      <ProtectedRoute exact path="/cart" component={CartIndexContainer} />
      <Redirect to="/"/>  
    </Switch>
    <Footer/>
  </div>
);

export default App; 