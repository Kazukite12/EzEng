import React, { useRef, useState } from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"
import Backsound from "../Asset/backsound.mp3"


const Modal = ({open,onClose}) => {

    const [value, setValue] = useState()

    const handleChange = (e) => {
        setValue(e.target.value)
        localStorage.setItem("Volume", e.target.value)
    }


        if(!open) return null
    
    
    return (

        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="modalContainer">
                <h1>Music</h1>
                <input onChange={handleChange} type="range"  min="0" max="100" step="1" value={value} id="Music"/>
                <h1>Sfx</h1>
                <input type="range" id="Sfx" />
            </div>
        </div>
    )
}

export default Modal;