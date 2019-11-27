import React from "react";
import { Route } from 'react-router-dom';
import CategoryPage from '../category/category.component';
// import { connect } from 'react-redux';
// import {createStructuredSelector}  from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
// import {selectCollections} from  '../../redux/shop/shop.selectors';

const ShopPage =({match})=>(
 
  <div className='shop-page'>
      <Route exact path={`${match.path}`} component = {CollectionsOverview} /> 
      <Route path={`${match.path}/:categoryId`} component={CategoryPage}/>
</div>
);


export default ShopPage;
