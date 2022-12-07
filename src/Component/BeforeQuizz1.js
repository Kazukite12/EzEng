import React from "react";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";
import { Link } from "react-router-dom";

const Bquizz1 =()=> {

    const nick = localStorage.getItem('nick')

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Oke {nick}, selanjut kita akan mengerjakan quizz mengenai materi Adverb yang sudah tadi kita bahas. </p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Card1">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Quizz1">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>
    )
}

export default Bquizz1;