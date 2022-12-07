import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";


const Screen5 =(play)=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <div className="IntroContainer">
                    <p>Oke {Nick}, selanjutnya kita akan membahas mengenai Adverb, apa itu adverb ?</p>
                </div>

                <div className="ArrowContainer">
                <Link className="Link" to="/Screen6">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen6">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
                </div>
            </div> 
    )
}

export default Screen5;