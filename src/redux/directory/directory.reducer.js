const INITIAL_STATE = {
    sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl:'hats'
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl:''
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl:''
        },
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl:''
        },
        {
          title: "mens",
          imageUrl: "https://cdn.shopify.com/s/files/1/2588/6494/products/product-image-580791399_480x480.jpg?v=1571711080",
          size: "large",
          id: 5,
          linkUrl:''
        }
      ]
};

const directoryReducer = (state =INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;

