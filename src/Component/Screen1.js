import React, {useState} from "react";
import "../ComponentStyle/Screen1Style.css"
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import arrowRight from "../Asset/ArrowRight.svg"

const Screen1 =({handleClick})=> {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setName(e.target.value)
        localStorage.setItem("nick", e.target.value);
    }

    const nickName = (localStorage.getItem("nick"))

    
    return(
        
        <div className="ScreenContainer">
            <Navbar />
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
                <img className="Mulai" src={arrowRight} />
            </Link>
    

        </div>
    
    
    )
}
export default Screen1;

