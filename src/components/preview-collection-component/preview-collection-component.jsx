import React from 'react';
import CollectionItem from  '../../components/collection-item/collection-item-component';

import './collection-preview.styles.scss';

const CollectionsPreview = ({title, items}) =>(
    <div className='collection-preview'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, indx) => indx < 4).map(({id, ...itemProps}) => (
                <CollectionItem key={id} {...itemProps}/>
            ))}
        </div>
    </div>
);


export default CollectionsPreview;