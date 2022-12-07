import React,{useState} from "react";
import "../ComponentStyle/AudioNavbarStyle.css";
import music from "../Asset/music.svg";
import sfx from "../Asset/sfx.svg";
import music1 from "../Asset/music1.svg";
import sfx1 from "../Asset/sfx1.svg";
import home from "../Asset/homeIcon.svg";
import gear from "../Asset/settingNavbar.svg";
import menu from "../Asset/menu.svg";
import HomeModal from "./HomeModal";
import MenuModal from "./MenuModa";






const AudioNav =({mute, open, muteSfx,setOpenNav})=> {

    const [openHomeModal, setOpenHomeModal] = useState(false)
    const [openMenuModal, setOpenMenuModal] = useState(false)

    if(!open) return null

    

        function totalM() {
            fM()
            mute()
        }

        function totalS() {
            fS()
            muteSfx()
        }

    

        

        let toggleM = true;

        function fM () {
            var muteM = document.getElementById("muteMusic");
            toggleM = !toggleM
            if(toggleM) {
                muteM.src = music;
            }else{
                muteM.src = music1;
            }          
        }

        let ToggleS = true;

        function fS () {
            var muteS = document.getElementById("muteSfx")
            ToggleS = !ToggleS
            if(ToggleS) {
                muteS.src = sfx;
            }else {
                muteS.src = sfx1;
            }
        }



    return (
        <div className="AudioContainer">
            <img id="muteMusic" onClick={totalM} src={music}/>
            <img id="muteSfx" onClick={totalS} src={sfx} />

            <img onClick={()=> setOpenHomeModal(true)} src={home} alt='home'/>
            <img onClick={()=> setOpenMenuModal(true)} src={menu} alt='menu'/>


            <MenuModal open={openMenuModal} onClose={()=> setOpenMenuModal(false)} />
            <HomeModal open={openHomeModal} setOpenNav={setOpenNav} onClose={()=> setOpenHomeModal(false)} />
        </div>
    )
}

export default AudioNav