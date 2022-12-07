import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/Screen2Style.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import ArrowRight from "../Asset/ArrowRight.svg";

const Video =({play})=> {
 return (
   <div className="ScreenContainer">
      <div className="IntroContainer">
          <p>Untuk lebih jelas serta memperdalam materi, yuk kita perhatikan video dibawah ini</p>
          <iframe src='https://www.youtube.com/embed/Hf7VOBHAr2A'
                  frameBorder='0'
                  allow='autoplay; encrypted-media'
                  allowFullScreen
                  tittle='video'
                  />
      </div>
      <div className="ArrowContainer">
        <Link  className="Link" to="/Card">
                    <img onClick={play} src={ArrowLeft} alt='panah' />
        </Link>
          <Link className="Link" to="/Bquizz">
                    <img onClick={play} src={ArrowRight} alt='panah' />
          </Link>
        </div>
    </div>
 )
}


export default Video