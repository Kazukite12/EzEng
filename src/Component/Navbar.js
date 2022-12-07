import React, {useState} from "react";
import "../ComponentStyle/NavbarStyle.css";
import home from "../Asset/homeIcon.svg";
import gear from "../Asset/settingNavbar.svg";
import menu from "../Asset/menu.svg";
import HomeModal from "./HomeModal";
import MenuModal from "./MenuModa";

const Navbar =()=> {
        

    const [openHomeModal, setOpenHomeModal] = useState(false)
    const [openMenuModal, setOpenMenuModal] = useState(false)


    return(
        <div className="Navbar">
    
               
                
                <img onClick={()=> setOpenHomeModal(true)} src={home} alt='home'/>
                <HomeModal open={openHomeModal} onClose={()=> setOpenHomeModal(false)} />

                <img onClick={()=> setOpenMenuModal(true)} src={menu} alt='menu'/>
                <MenuModal open={openMenuModal} onClose={()=> setOpenMenuModal(false)} />
        </div>


    )
}

export default Navbar;