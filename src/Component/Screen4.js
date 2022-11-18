import React from "react";
import Navbar from "./Navbar"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";
import Solar from "../Asset/Solar.json";
import Lottie from "lottie-react"


const Screen4 =()=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <Navbar />
                <div className="IntroContainer">
                    <p>Jadi intinya bahwa kata kerja adalah jantung dari kalimat, setiap kalimat wajib memiliki kata kerja atau verb. Kata kerja dalam bahasa inggris berfungsi sebagai predikat dalam bahasa indonesia.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen2">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen4;