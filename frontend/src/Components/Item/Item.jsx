import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export default function Item(props) {
  // console.log(props.name)
  return (
    <div className='item'>
       <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link> 
        <p>{props.name}</p>
        <div className="item-prices">
            <div className="item-price-new">
                ${props.new_price}
            </div>
            <div className="item-price-old">
                ${props.old_price}
            </div>
        
        </div>
    </div>
  )
}
