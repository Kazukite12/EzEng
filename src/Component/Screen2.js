import React from "react";
import "../ComponentStyle/Screen2Style.css"
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";



const Screen2 = ({play}) => {

    const Nick = (localStorage.getItem("nick"));

    return(
        <div className="ScreenContainer">
            <div className="IntroContainer">
                <p>Hello <span>{Nick}</span>, di game edukasi ini kita akan membahas tentang materi verbs dan Adverbs dalam bahasa inggris. Sebelumnya apa kamu tahu apa itu verbs?</p>
            </div>
            <div className="ArrowContainer">
                <Link  className="Link" to="/Screen1">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen3">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
        </div>

    )
}
export default Screen2;