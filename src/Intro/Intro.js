import React, {Component} from "react";
import "./Intro.css";
import "../intro2/intro2.css"
import {Link } from "react-router-dom";
import Startingcard from "../Intro/startingcard"
import banner1 from "../img/banner11.jpg";

export default class Intro extends Component{
    render(){
      return(
        <>
        <div className="part1">
           
        <div className="Intro" id="Intro" >
          <div className="i-left">
            <div className="i-name">
              <span >Welcome to</span>
              <span>Auction10</span>
              <span>We help you to start your biding.</span>
            </div>
              <a href="/#">
              <Link to="/LiveAuction"><button className="button i-button">Live Auction</button></Link> 
              </a>
          </div>
          {/* right image side*/}
          <div className="i-right">
            <img src={banner1} alt="" />
          </div>  
        </div>
     
        <div className='body3'>
            <Startingcard heading="SmartPhones for bidding" 
            itemimg1='https://media.croma.com/image/upload/v1664009609/Croma%20Assets/Communication/Mobiles/Images/243463_0_qtsxpd.png'
            itemname1="Iphone12"
            itemimg2='https://m.media-amazon.com/images/I/810Rscvmd4L._SL1500_.jpg'
            itemname2="Samsung M53 5G"
            itemimg3='https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY606_.jpg'
            itemname3="Samsung S20 FE 5G"
            itemimg4='https://cdn1.smartprix.com/rx-iADfJflhU-w1200-h1200/ADfJflhU.jpg'
            itemname4="Realme 10 pro"/>
            <Startingcard heading="Antiques for bidding" 
            itemimg1='https://m.media-amazon.com/images/I/81HLkd1hmmL._SX355_.jpg'
            itemname1="Antique telephone"
            itemimg2='https://www.goldgiftideas.com/wp-content/uploads/2021/01/Pure-Silver-Nakshi-Pooja-Bell.jpeg'
            itemname2="Pure Silver Bells"
            itemimg3='https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/2019/03/28173726/How-to-make-your-old-furniture-look-good_strong-bones.jpg'
            itemname3="Old Wooden Chair"
            itemimg4='https://5.imimg.com/data5/SELLER/Default/2022/3/CD/FO/JL/89398276/4-seater-wooden-sofa-set-500x500.jpg'
            itemname4="Wooden Sofa Set"/>
            <Startingcard heading="Old Art for bidding" 
            itemimg1='https://cdn11.bigcommerce.com/s-x49po/images/stencil/1280x1280/products/66247/95479/1615362583576_Meera_Bai__21160.1615457047.jpg?c=2'
            itemname1="Indian painting"
            itemimg2='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Radha_and_Krishna_by_DHURANDHAR_MV.jpg/220px-Radha_and_Krishna_by_DHURANDHAR_MV.jpg'
            itemname2="Radha-Krishna Art"
            itemimg3='http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'
            itemname3="Mona Lisa Painting"
            itemimg4='https://www.indianartideas.in/images/blog/Raja%20Ravi%20Varma-famous%20painters%20of%20india.jpg'
            itemname4="Raja Ravi Varma"/>
        </div>

    </div>
        </>
        )
    };
};