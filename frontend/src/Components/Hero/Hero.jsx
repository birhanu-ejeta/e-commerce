import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/Frontend_Assets/hand_icon.png'
import arrow_icon from '../Assets/Frontend_Assets/arrow.png';
import hero_img from '../Assets/Frontend_Assets/hero_image.png';

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>

            <div className="hero-lates-btn">
                <div>Latest Collections</div>
                <img src={arrow_icon} alt="" />
            </div>

        </div>
        

        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}
