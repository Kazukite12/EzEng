import React from "react";
import "../ComponentStyle/Screen2Style.css"
import Navbar from "./Navbar";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import astronout from "../Asset/astronot.json"
import Lottie from "lottie-react"




const Screen2 = () => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <Navbar />
            <div className="IntroContainer">
                <p>Hello <span>{Nick}</span>, di game edukasi ini kita akan membahas tentang materi verbs. Apa itu verbs?</p>
            </div>
            <div className="ArrowContainer">
                <Link className="Link" to="/Screen1">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen3">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Screen2;