import React from 'react'
import './offer.css'
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png'
export default function Offer() {
  return (
    <div className='offers'>
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>ONLY ON BEST SELE</p>
          <button>check Now</button>
        </div>

        <div className="offers-right">
          <img src={exclusive_image} alt="" />
        </div>
    </div>
  )
}
