import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"
import { Link } from "react-router-dom";

const HomeModal =({open,onClose, setOpenNav})=> {
    if(!open) return null

    function close() {
        setOpenNav()
        onClose()
    }

    return(
        <div className="Overlay">
            <div className="HomeModal">
                <h2>Kembali ke Home ?</h2>
                <Link to="/" className="BackLink Link">
                    <button onClick={close}>Ya</button>
                </Link>
                <button onClick={onClose}>Gk Jadi</button>
            </div>
        </div>
    )
}

export default HomeModal ;