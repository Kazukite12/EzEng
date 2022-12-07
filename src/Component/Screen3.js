import React from "react";

import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css"


const Screen3 =({play})=> {

    const Nick = (localStorage.getItem("nick"));

    return(
    
            <div className="ScreenContainer">
                <div className="IntroContainer">
                    <p>Ada yang mengartikan bahwa verbs adalah kata yang menunjukkan tindakan atau aksi yang dilakukan subyek atau pelaku. </p>
                </div>
                <div className="ArrowContainer">
                <Link className="Link" to="/Screen2">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Screen4">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
            </div>
            </div> 
    )
}

export default Screen3;