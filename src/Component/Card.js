import React, {useState} from "react";
import Navbar from "./Navbar";
import "../ComponentStyle/CardStyle.css";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import { Link } from "react-router-dom";
import ArrowRight from "../Asset/ArrowRight.svg";
import Neptune from "../Asset/Neptune.svg";
import Uranus from "../Asset/Uranus.svg";
import FinitiveModal from "./FinitiveModal";
import AuxModal from "./AuxModal";
import LinkModal from "./LinkModal";
import TransModal from "./TransModal";
import RegModal from "./RegModal";





const Card =()=> {
    const [openFinitiveModal, setOpenFinitiveModal] = useState(false)
    const [openAuxModal, setOpenAuxModal] = useState(false)
    const [openLinkingModal, setOpenLinkingModal] = useState(false)
    const [openTransModal, setOpenTransModal] = useState(false)
    const [openRegModal, setOpenRegModal] = useState(false)

    return(
        <div className="CardContainer">
            <Navbar /> 
            <div className="cardTittle">
                <h2>Jenis-jenis kata kerja yang akan kita bahas dalam materi verbs kali ini</h2>
            </div>
            <div className="ListContainer">
                <button onClick={() => setOpenFinitiveModal(true)}>
                    <h1>Finitive verb</h1>
                </button>
                <button onClick={() => setOpenAuxModal(true)}>
                    <h1>Auxiliary & Modal Verb</h1>
                </button>
                <button onClick={() => setOpenLinkingModal(true)}>
                    <h1>Linking Verb</h1>
                </button>
                <button onClick={() => setOpenTransModal(true)}>
                    <h1>Transitive & Intransitive Verb</h1>
                </button>
                <button onClick={() => setOpenRegModal(true)}>
                    <h1>Regular & Irregular Verb</h1>
                </button>
            </div>
            <div className="ArrowContainer">
                <Link className="Link" to="/Screen1">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Quizz">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>     
            <FinitiveModal open={openFinitiveModal} onClose={()=> setOpenFinitiveModal(false)} />
            <AuxModal open={openAuxModal} onClose={()=> setOpenAuxModal(false)} />
            <LinkModal open={openLinkingModal} onClose={()=> setOpenLinkingModal(false)} />
            <TransModal open={openTransModal} onClose={()=> setOpenTransModal(false)} />
            <RegModal open={openRegModal} onClose={()=> setOpenRegModal(false)} />
        </div>

    )
}

export default Card;