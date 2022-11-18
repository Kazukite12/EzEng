import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const FinitiveModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Finitive Verb</h1>
                <p>Finitive Verb adalah kata kerja yang mempunyai subyek dan juga dapat berdiri sendiri sebagai pokok daripada independent clause. Kata kerja ini dapat dikatakan sebagai kata kerja utama dalam sebuah kalimat yang dapat menjelaskan bentuk dari kalimat itu sendiri, dan biasanya hanya terdapat pada present dan past tense </p>
                <p>Contoh :</p>
                <p className="contoh">I go to school</p>
                <p className="contoh">She brings her lunch to the canteen</p>
                <p>Dalam kalimat past tense atau present tense, contoh dari finite verb adalah sebagai berikut:</p>
                <p className="contoh">Sam went to the beach last week. (Sam pergi ke pantai minggu kemarin) - past tense </p>
                <p className="contoh">My mom buys me clothes. (Ibu saya membeli baju-baju) - present tense </p>
            </div>
        </div>
    )
}

export default FinitiveModal