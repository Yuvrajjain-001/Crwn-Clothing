import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from './directory.selectors';
import MenuItem from '../menu-item/menu-item.component'
import './directory.style.scss';

const Directory=({sections})=>(
<div className='directory-menu'>
{
    sections.map(({id,...otherSectionProps})=>(
        <MenuItem key={id} {...otherSectionProps}/>
    ))
}
            </div>
)

const mapStateToprops=createStructuredSelector({
sections:selectDirectorySections
})

export default connect(mapStateToprops)(Directory)
