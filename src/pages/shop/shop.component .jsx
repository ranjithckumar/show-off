import React from "react";
import SHOP_DATA from "./shop.component";
import CollectionPreview from '../../components/collection-preview/collection-preview';
// here we getting data from SHOP_DATA as props
class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_DATA
    };
  }
//   here we using spread concept fosr structuring & de-structuring 
//  we calling CollectionPreview function 
  render() {
      const {collections}=this.state;
    return (<div className='shop-page'>
           {
               collections.map(({id,...otherCollectionProps}) =>(
               <CollectionPreview key={id} {...otherCollectionProps} /> 
               ))
           }
        </div>);
  }
}

export default ShopPage;
