import React, { Component } from 'react'
import "../intro2/intro2.css"
//import 'owl.carousel/dist/assets/owl.carousel.css';
//import 'owl.carousel/dist/assets/owl.theme.default.css';
//import $ from 'jquery';
//import 'owl.carousel';


export default class intro2 extends Component {
  render() {
    return (
        <>
        <div className='body2'>
            <div className="container1">
                <h2>smartwatches on sell:</h2>
                <div className='imgs'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <a href='/#'>see all</a>
            </div>
            <div className="container1">
                <h2>furniture on sell:</h2>
                <div className='imgs'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <a href='/#'>see all</a>
            </div>
            <div className="container1">
                <h2>Speed Cars on sell:</h2>
                <div className='imgs'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <a href='/#'>see all</a>
            </div>
        </div>    

        </>
    )
  }
}
