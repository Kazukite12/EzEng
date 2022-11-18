import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/NavbarStyle.css";
import home from "../Asset/homeIcon.svg";
import gear from "../Asset/settingNavbar.svg";
import menu from "../Asset/menu.svg";
import Modal from "./Modal";

const Navbar =()=> {
    const [openModal, setOpenModal] = useState(false)
    return(
        <div className="Navbar">
    
        
            <Link className="Link" to="/">
            <img src={home} alt='home'/>
                </Link>
           
            <div className="babi">
                <img src={menu} />
            
                <img onClick={() => setOpenModal(true)} src={gear} alt='gear'/>
                <Modal open={openModal} onClose={()=> setOpenModal(false)} />
            </div>
        </div>


    )
}

export default Navbar;