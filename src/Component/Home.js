import React, { useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/HomeStyle.css";
import play from "../Asset/play.png";
import setting from "../Asset/settingButton.png";
import leave from "../Asset/leaveButton.png";
import info from "../Asset/InfoButton.png";
import Lottie from "lottie-react";
import tittle from "../Asset/Tittle.png";


const Home =()=>{

    return  (
        <div className="homePage">
            <div className="tittle">
                <img src={tittle}/>
            </div>
            <div className="buttonContainer">
                <div className="MainButtonContainer">
                    <Link className="Link" to="/Screen1">
                        <img src={play} />
                    </Link>
                </div>
                <div className="SecondButtonContainer">
                    <Link className="Link" to="/about">
                        <img src={info} />
                    </Link>
                    <Link className="Link" to="/about">
                        <img src={leave} />
                    </Link>
                    <Link className="Link" to="/about">
                        <img src={setting}/>
                    </Link>
                </div>
            </div>
            
        </div>
        
    )

}
export default Home;