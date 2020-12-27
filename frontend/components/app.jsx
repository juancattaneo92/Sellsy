import React from 'react';
import {  Route, Switch, Link, Redirect} from 'react-router-dom';
import { ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import Header from './header/header';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';
import CategoryShowContainer from './categories/category_show_container';
import CartItemsContainer from './cart/cart_items_container';
// import CategoryIndexContainer from "./category_index/category_index_container";


const App = () => (
  <div>
    <Modal />
    <Header/>
    <Switch>  
      <Route exact path="/search/:searchQuery" component={ProductIndexContainer}/>
      <Route exact path="/" component={ProductIndexContainer}/> 
      <Route exact path="/products/:productId" component={ProductShowContainer} />   
      <Route exact path='/categories/:categoryId' component={CategoryShowContainer} />
      {/* <ProtectedRoute path="/cartItems" component={CartItemContainer} /> */}
      <Route exact path="/cart" component={CartItemsContainer} />
      <Redirect to="/"/>  
    </Switch>
  </div>
);

export default App; 