import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
import instagram from '../Assets/Frontend_Assets/instagram_icon.png'
// import facebook from '../Assets/Frontend_Assets/facebook.png'
// import twitter from '../Assets/Frontend_Assets/twi'
import pintester from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp from '../Assets/Frontend_Assets/whatsapp_icon.png'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-link">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={instagram} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={pintester} alt="" />
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp} alt="" />
            </div>

        </div>
        <div className="footer-copy-right">
            <hr />
            <p>Copyright @ 2025-All Right Reserved.</p>
        </div>
    </div>
  )
}
