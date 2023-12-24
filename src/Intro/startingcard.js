import React from 'react'
import "./Intro.css";
import {Link } from "react-router-dom";

export default function startingcard(props){
  return (
    <>
                <div className="container3">
                <h2>{props.heading}</h2>
                <div className='imgs'>
                    <div className="one">
                      <img src={props.itemimg1} alt="..?"/>
                     <Link to="/#"><p>{props.itemname1}</p></Link> 
                    </div>
                    <div className="one">
                      <img src={props.itemimg2} alt="..?"/>
                      <Link><p>{props.itemname2}</p></Link>
                    </div>
                </div>
                <div className="imgs">
                <div className="one">
                      <img src={props.itemimg3} alt="..?"/>
                      <Link><p>{props.itemname3}</p></Link>
                    </div>
                    <div className="one">
                      <img src={props.itemimg4} alt="..?"/>
                      <Link><p>{props.itemname4}</p></Link>
                    </div>
                </div>
                <a href='/#'>see all</a>
            </div>
    </>
  );
};
