import React from "react";
import SHOP_DATA from "./shop.data";

import CollectionsPreview from "../../components/preview-collection-component/preview-collection-component";

class ShopPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const {collections} = this.state;
        
        return <div className="shop-page">
            {
                collections.map(({id, ...collectionProps}) =>(
                    <CollectionsPreview key={id} {...collectionProps} />
                ))
            }
        </div>
    }
}

export default ShopPage;