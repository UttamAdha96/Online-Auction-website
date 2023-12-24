import React, { Component } from 'react'
import '../Createauction/createauction.css'

export default class createauction extends Component {
  render() {
    return (
        <>
        <div className='box'>
            <h1>Create Auction of Your Product</h1>
            <div className='details'>
                <p>Product Name</p>
                <input type="text" />
            </div>
            <div className='breakC'></div>
            <div className='details'>
                <p>Product Detail</p>
                <input type="text" />
            </div>
            <div className='breakC'></div>
            <div className='details'>
                <p>Product photo</p>
                <input type="file"/>
            </div>
            <div className='breakC'></div>
            <div className='details'>
                <p>Product Category</p>
                <input type="text" />
            </div>
            <div className='breakC'></div>
            <div className='details'>
                <p>Bid Difference</p>
                <input type="text" />
            </div>
        </div>
        </>
    )
  }
}
