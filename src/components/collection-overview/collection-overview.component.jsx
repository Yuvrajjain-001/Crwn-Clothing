import React from 'react'
import{connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import PreviewCollection from '../preview-collection/preview-collection.component'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selector';
import './collection-overview.style.scss'
const CollectionOverview=({collections}
)=>(
    <div className="collections-overview">
       {
        collections.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection key={id} {...otherCollectionProps}/>
        ))
        } 

    </div>)

const mapStateToprops=createStructuredSelector({
    collections:selectCollectionsForPreview
})

    export default connect(mapStateToprops)( CollectionOverview);
