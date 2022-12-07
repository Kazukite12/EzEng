import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"
import { Link } from "react-router-dom";


const MenuModal =({open,onClose})=> {
    if(!open) return null
    return(
        <div className="Overlay">
             <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="ButtonContainer">
                <Link to="/Screen3" className="BackLink Link">
                    <button onClick={onClose}><h1>Materi Verb</h1></button>
                </Link> 
                <Link to="/Screen6" className="BackLink Link">
                    <button onClick={onClose}><h1>Materi Adverb</h1></button>
                </Link> 
                <Link to="/Quizz" className="BackLink Link">
                    <button onClick={onClose}><h1>Quizz Verb</h1></button>
                </Link> 
                <Link to="/Quizz1" className="BackLink Link">
                    <button onClick={onClose}><h1>Quizz Adverb</h1></button>
                </Link> 
            </div>
        </div>        
    )
}

export default MenuModal