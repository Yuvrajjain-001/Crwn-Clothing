import React from 'react'
import  './cart-item.style.scss'
const CartItem=({
    item:{imageUrl,price,name,quantity}})=>(
        <div className='cart-item'>

            <image src={imageUrl} alt="item"/>
<div className="item-details">
<span className="name">{name}</span>
<span className="price">${price}</span>
{quantity}* ${price}

</div>
        </div>
 
 )
 export default CartItem;