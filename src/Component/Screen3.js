import React from "react";
import Navbar from "./Navbar"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import Earth from "../Asset/Earth.json";
import Lottie from "lottie-react"
import "../ComponentStyle/Screen3Style.css"


const Screen3 =()=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <Navbar />
                <div className="IntroContainer">
                    <p>Ada yang mengartikan bahwa verbs adalah kata yang menunjukkan tindakan atau aksi yang dilakukan subyek atau pelaku. 
                    Namun, ada beberapa verbs yang tidak melakukan aksi seperti be, exist, seem dan belong.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen2">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen4">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen3;