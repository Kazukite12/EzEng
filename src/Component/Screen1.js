import React, {useState} from "react";
import "../ComponentStyle/Screen1Style.css";
import { Link } from "react-router-dom";
import arrowRight from "../Asset/ArrowRight.svg";

const Screen1 =({play,})=> {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setName(e.target.value)
        localStorage.setItem("nick", e.target.value);
    }


    
    return(
        
        <div className="ScreenContainer">
            <div className="NickContainer">
                <h1>MASUKAN</h1>
                <h1>NICKNAME</h1>
            </div>
            <form onSubmit={handleSubmit} className="NameForm">
                    <input type="text" maxLength={12} value={name} onChange={handleChange} required/>
                    <Link className="MulaiLink" to="/Screen2">
            </Link>
            </form>
            <Link className="Link" to="/Screen2">
                <img alt="arrowRight" onClick={play} className="Mulai" src={arrowRight} />
            </Link>
        </div>
    
    
    )
}
export default Screen1;

