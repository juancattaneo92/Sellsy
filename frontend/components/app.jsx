import React from 'react';
import {  Route, Switch, Link, Redirect} from 'react-router-dom';
import Modal from './modal/modal';
import Header from './header/header';
import ProductIndexContainer from './product/product_index_container';
import ProductShowContainer from './product/product_show_container';


const App = () => (
  <div>
    <Modal />
    <Header/>
    <Switch>  
      <Route exact path="/" component={ProductIndexContainer}/> 
      <Route exact path="/products/:productId" component={ProductShowContainer} />   
      <Redirect to="/"/>  
    </Switch>
  </div>
);

export default App; 