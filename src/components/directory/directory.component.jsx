import React from "react";
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();
    //  here we make using of online image url and manualy assinging id's
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4
        },
        {
          title: "mens",
          imageUrl: "https://cdn.shopify.com/s/files/1/2588/6494/products/product-image-580791399_480x480.jpg?v=1571711080",
          size: "large",
          id: 5
        }
      ]
    };
  }
    render(){
        return(
          <div className='directory-menu'>
              {
                  this.state.sections.map(({title,imageUrl,id,size}) => (
                    //   here we sending title to MenuItem fuction
                      <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                  ))
              }
          </div>
        );
    };
  }
 export default Directory;
