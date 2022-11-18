import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const Modal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="Overlay">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="modalContainer">
                <h1>Music</h1>
                <h1>Sfx</h1>
            </div>
            <div className="themeContainer">
                <h1>Theme</h1>
            </div>


        </div>
    )
}

export default Modal