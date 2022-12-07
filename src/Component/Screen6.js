import React from "react";
import ArrowLeft from "../Asset/ArrowLeft.svg"
import ArrowRight from "../Asset/ArrowRight.svg"
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen3Style.css";


const Screen6 =({play})=> {

    

    return(
    
            <div className="ScreenContainer">
                <div className="IntroContainer">
                    <p>Adverb adalah kata keterangan dalam bahasa Indonesia, selain verb atau kata kerja,
                        adverb juga merupakan bagian yang sangat penting dalam sebuah kalimat. Karena kita harus menggunakan adverb sebagai penanda kata keterangan 
                        dalam sebuah kalimat.
                    </p>
                </div>

                <div className="ArrowContainer">
                <Link className="Link" to="/Screen5">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Card1">
                    <img onClick={play} src={ArrowRight} alt='panah' />
                </Link>
                </div>
            </div> 
    )
}

export default Screen6;