import React, { Component } from 'react'
import '../LiveAuction/liveauction.css'
import Banner2 from '../img/banner2.jpg'
import Startingcard from "../Intro/startingcard";


export default class liveauction extends Component {
  render() {
    return (
        <>
        <div className='AuctionRoom'>
        <div className='bannerup'>
            <img src={Banner2} alt='...?'/>
        </div>

        <div className='Container5'>
            <div className='left-auction-detail'>
                <h1>Other Auctions</h1>
                <div className='Other-products-detail'><a href='/#'>Samsung S20 FE 5G Smartphone is Live now starting with $5000</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Iphone14 Smartphone will be Live from 20th May starting with $11000</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Antique telephone is Live now starting with $500</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>Mona Lisa Painting is Live now with starting price of $10M</a></div>
                <div className='breakO'></div>
                <div className='Other-products-detail'><a href='/#'>See different Special Artifacts in Live Auction room from 18th may to 30th may</a></div>
            </div>


        <div className='auctiondetail'>
            <div className='IMGbox'>
                <img src='https://www.indianartideas.in/images/blog/Raja%20Ravi%20Varma-famous%20painters%20of%20india.jpg' alt='..?'/>
                <p style={{color:"red"}}>Desclaimer* Bidding is closing soon</p>
                <div className='Biddingprocess'>
                    <h1>Asking Big</h1>
                    <h3>$2000</h3>
                    <button className="button2 i-button">Bid</button>
                </div>
                <p><span style={{color:"red"}}>Important: </span>Clicking on 'Bid' Button is commitment to buy and is legally binding in accordance with Indian Law.</p>
            </div>
            <div className='Detailbox'>
                <div className="productdetail">
                    <h1>Raja Ravi Varma Painting</h1>
                    <p>Raja Ravi Varma was an Indian painter and artist. He is considered among the greatest painters in the history of Indian art. His works are one of the best examples of the fusion of European academic art with a purely Indian sensibility and iconography. He was known as the first modern Indian artist</p>
                    <div className='break'></div>
                </div>
                <div className='BuyerDetails'>
                    <h3>Last Bidders</h3>
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>Uttam Adha</p>
                        <p>$18000</p>
                    </div>
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>Ashutosh Singh</p>
                        <p>$17500</p>
                    </div>
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>Annapurna Mishra</p>
                        <p>$15000</p>
                    </div>
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>Diwakar Sharma</p>
                        <p>$14000</p>
                    </div>
                    <div className='person'>
                        <img src='https://www.citypng.com/public/uploads/preview/hd-man-user-illustration-icon-transparent-png-11640168385tqosatnrny.png?v=2023050603' alt='..?'/>
                        <p>Sparsh Gupta</p>
                        <p>$12000</p>
                    </div>
                </div>
            </div>
        </div>
</div>


<div className='MoreProduct'>
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
        {/* <Footer/> */}
        
        </>
    )
  }
}
