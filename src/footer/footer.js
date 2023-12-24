import React, { Component } from 'react'
import '../footer/footer.css'

export default class footer extends Component {
  render() {
    return (
        <>
        <footer>
        <div className='body'>
            <div className='box1'>
                <h1>About Auction10</h1>
                <div className='breakline'></div>
                <p>"Auction10" is an online auction website aimed at taking the auction to the Fingertips od aspiring bidders by opening he doors of the "LIVE Auction Room" to a wider cross section of art lovers and antique Collections.</p>
            </div>
            <div className='box2'>
                <h1>Meet Us</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Call US: 86******00</a></li>
               <li><a href='/#'>Mail US: Auction10@gmail.com</a></li>
               <li><a href='/#'>Instagram</a></li>
               <li><a href='/#'>Facebook</a></li>
               <li><a href='/#'>Twitter</a></li>
            </ul>
            </div>
            <div className='box2'>
                <h1>Join Our Team</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Be a seller on Auction10</a></li>
               <li><a href='/#'>Become an affiliate</a></li>
               <li><a href='/#'>advertise your product</a></li>
            </ul>
            </div>
            <div className='box2'>
                <h1>Let us help you</h1>
                <div className='breakline'></div>
                <ul>
               <li><a href='/#'>Account related quary</a></li>
               <li><a href='/#'>Return your bid product</a></li>
               <li><a href='/#'>Fraud product Complain</a></li>
                </ul>
            </div>
            </div>
            <div class="footer-bottom">
              <div class="container">
                <div class="row">
                    <div class="col-md-12">
                      <p>All Rights Reserved under "Auction My Product" project made by Uttam Adha[21BCS8411], Ashutosh Singh[21BCS8400], Annapurna Mishra[21BCS8442], Diwakar Sharma[21BCS8438] &copy; 2023</p>
                    </div>
                </div>
              </div>
            </div>
            </footer>
        </>
    )
  }
}
