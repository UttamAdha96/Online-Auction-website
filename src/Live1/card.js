import React from 'react'
import "../Live1/Live1.css"
import {Link } from "react-router-dom";

export default function card(props){
  return (
    <>
    <div className='cards'>
      <div className="liveimg">
      <img src={props.itemimg} alt="...?"/>
      </div>
      <div className="itemname">{props.itemname}</div>
      <div className="itemname">Category: {props.itemCategoty}</div>
      <Link to="/LiveAuction">
      <div className="price">Price: {props.itemprice}</div>
      </Link>
      
    </div>
    </>
  );
};

