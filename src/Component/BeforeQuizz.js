import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";

const Bquizz =({play})=> {

    const nick = window.localStorage.getItem('nick')

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Oke {nick}, selanjut kita akan mengerjakan quizz mengenai materi verb yang sudah tadi kita bahas. </p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Video">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Quizz">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}

export default Bquizz