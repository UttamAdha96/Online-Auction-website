// import React from "react";
import "../index.css";
import '../Navbar/topheader.css';
import {Link } from "react-router-dom";
import React, { Component } from 'react'
import icon from "../img/Search.png"
import user from "../img/User.png"
import cart from "../img/cart.png"

export default class Navbar extends Component {
  render() {
    return (<>

    <div className="n-wrapper" id="Navbar">
       {/* left */}
       <div className="n-left">
         <Link to="/Home"><div className="n-name"><button>Auction<span style={{color:"#FCA61F"}}>10</span></button></div></Link>
         <div className="n-list">
           <ul style={{ listStyleType: "none" }}>
             <li className="dropdown">
              <a href="/#">Explore</a>
             <div className="dropdown-content">
                 <a href="/#">Artifacts</a>
                 <a href="/#">Electronics</a>
                 <a href="/#">Art</a>
                 <a href="/#">Jewellery</a>
                 <a href="/#">furniture</a>
                 <a href="/#">Fashion</a>
                 <a href="/#">Automobiles</a>
               </div></li>
             <li className="dropdown">
                <a href="/#">Contact Us</a>
            </li>
            <li className="dropdown">
                <a href="/#">Create Auction</a>
            </li>
           </ul>
         </div>
       </div>
       

       <div className="n-right">
       <div className="search-box">
          <form action="/#" method="get">
              <input type="text" placeholder="Search for products..."/>
              <button type="submit"><img src={icon} alt="." /></button>
          </form>
        </div>
        <Link to="/login">
         <div className="nav-button"> 
        {/* <button className="button n-button">LogIn</button>
         <button className="button n-button2">SignUp</button> */}
         <button className=" n-button3"><img src={cart} alt="" /></button>
         <button className=" n-button4"><img src={user} alt="" /></button>
         </div>
         </Link>
        </div>
     </div>
     </>
        
    )
  }
}
