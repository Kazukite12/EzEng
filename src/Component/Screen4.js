import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";



const Screen4 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <div className="IntroContainer">
                    <p>Jadi intinya bahwa kata kerja adalah jantung dari kalimat, setiap kalimat wajib memiliki kata kerja atau verb. Kata kerja dalam bahasa inggris berfungsi sebagai predikat dalam bahasa indonesia.</p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen2">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen4;