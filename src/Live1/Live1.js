import React,{Component} from "react";
import "../Live1/Live1.css"
import Card from "./card";
import img1 from '../img/furniture-banner.png'

export default class Live1 extends Component{
    render(){
        return(
            <>
            <div className="Livesection">
            <div className="heading">
                <div className="i2-name">Live Auction: </div>
                <div className="seeall">
                    <a href="/#" className="i2-button" >See all →</a>
                </div>
            </div>
            <div className="contents">
            <Card itemimg= {img1} itemname="Furniture" itemCategoty="artifact" itemprice="$45"/> 
            <Card itemimg= 'https://www.indianartideas.in/images/blog/Raja%20Ravi%20Varma-famous%20painters%20of%20india.jpg' itemname="Raja Ravi Varma Painting" itemCategoty="art" itemprice="$2000"/> 
            <Card itemimg= 'http://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/1200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg' itemname="Mona_Lisa painting" itemCategoty="art" itemprice="$10M"/> 
            <Card itemimg= 'https://imageio.forbes.com/specials-images/imageserve/5f962d31e7b04bbfd2f68758/Bugatti-Chiron-Super-Sport-300--Driving/960x0.jpg?height=473&width=711&fit=bounds' itemname="special Car" itemCategoty="car" itemprice="$20M"/> 
            </div>
            </div>
            </>
        )
    }
}