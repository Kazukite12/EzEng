import React, { useState } from "react";
import "../ComponentStyle/CardStyle.css";
import TimeModal from "./TimeModal";
import PlaceModal from "./PlaceModal";
import FreqModal from "./FreqModal";
import DegreeModal from "./DegreeModal";
import MannerModal from "./MannerModal";
import PurposeModal from "./PurposeModal";
import ArrowLeft from "../Asset/ArrowLeft.svg";
import { Link } from "react-router-dom";
import ArrowRight from "../Asset/ArrowRight.svg";


const Card1 =()=> {
    
    const [openTime, setOpenTime] = useState(false)
    const [openPlace, setOpenPlace] = useState(false)
    const [openFreq, setOpenFreq] = useState(false)
    const [openDegree, setOpenDegree] = useState(false)
    const [openManner, setOpenManner] = useState(false)
    const [openPurpose, setOpenPurpose] = useState(false)
    
    return(
        <div className="CardContainer">  
            <div className="cardTittle">
                <h2>Jenis-Jenis keterangan yang akan kita bahas dalam materi adverb kali ini</h2>
            </div>
            <div className="ListContainer">
                <button onClick={()=> setOpenTime(true)}>
                    <h1>Adverb of Time</h1>
                </button>
                <button onClick={()=> setOpenPlace(true)}>
                    <h1>Adverb of Place</h1>
                </button>
                <button onClick={()=> setOpenFreq(true)}>
                    <h1>Adverb of Frequency</h1>
                </button>
                <button onClick={()=> setOpenDegree(true)}>
                    <h1>Adverb of Degree</h1>
                </button>
                <button onClick={()=> setOpenManner(true)}>
                    <h1>Adverb of Manner</h1>
                </button>
                <button onClick={()=> setOpenPurpose(true)}>
                    <h1>Adverb of Purpose</h1>
                </button>
            </div>
            <div className="ArrowContainer">
                <Link className="Link" to="/Screen6">
                    <img src={ArrowLeft} alt='panah' />
                </Link>
                <Link className="Link" to="/Video1">
                    <img src={ArrowRight} alt='panah' />
                </Link>
            </div>   
            <TimeModal open={openTime}  onClose={()=> setOpenTime(false)}/>
            <PlaceModal open={openPlace} onClose={()=> setOpenPlace(false)} />
            <FreqModal open={openFreq} onClose={()=> setOpenFreq(false)}/>
            <DegreeModal open={openDegree} onClose={()=> setOpenDegree(false)}/>
            <MannerModal open={openManner} onClose={()=> setOpenManner(false)}/>
            <PurposeModal open={openPurpose} onClose={()=> setOpenPurpose(false)}/>
        </div>
       
    )
}

export default Card1