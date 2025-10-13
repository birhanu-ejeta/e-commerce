import {React,useState} from 'react'
import { Link } from 'react-router-dom';
import logo from "../Assets/Frontend_Assets/logo.png";
import cart_icon from "../Assets/Frontend_Assets/cart_icon.png";
import './Navbar.css';

export default function () {

    const [menu,setMenu]=useState("shop");

  return (
    <div className="navbar">
         <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
         </div>

         <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link style={{textDecoration:'none'}} to='/'>Shop</Link> {menu==="shop"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("men")}}> <Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {menu==="men"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("women")}}> <Link style={{textDecoration:'none'}} to="/womens">Women</Link> {menu==="women"?<hr/>:null}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:null}</li>
         </ul>

         <div className="nav-login-cart">
           <Link style={{textDecoration:'none'}} to='/login'><button>Login</button></Link> 
           <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="" /></Link> 
            <div className="nav-cart-count">0</div>
         </div>
    </div>
  )
}
