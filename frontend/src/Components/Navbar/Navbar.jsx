import { React, useContext, useState,useRef } from 'react'
import { Link } from 'react-router-dom';
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import './Navbar.css';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'
export default function () {

  const [menu, setMenu] = useState("shop");
  const { getTotalCartItem } = useContext(ShopContext)
  const menuRef = useRef()

  const drowpdown_toggle=(e)=>{
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>

      <img className='nav-dropdown' onClick={drowpdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("men") }}> <Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {menu === "men" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("women") }}> <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link> {menu === "women" ? <hr /> : null}</li>
        <li onClick={() => { setMenu("kids") }}> <Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link> {menu === "kids" ? <hr /> : null}</li>
      </ul>

      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none' }} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none' }} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItem()}</div>
      </div>
    </div>
  )
}
