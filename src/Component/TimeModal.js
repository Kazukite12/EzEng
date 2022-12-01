import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const TimeModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Time</h1>
                <p>Adverb of Time merupakan adverb yang menyatakan waktu terjadinya 
                suatu kegiatan atau peristiwa. Adverb ini digunakan untuk menjawab 
                pertanyaan 'When?' atau kapan.</p>
                <p>Contoh kalimatnya adalah seperti berikut :</p>
                <p className="contoh">I've been quite busy <u>today</u>.</p>
                <p className="contoh">I woke up <u>this morning</u>.</p>

                <p>Kamu juga bisa menggunakan Adverb of Time untuk menjelaskan waktu kejadian sebelum atau sesudah terjadinya kejadian yang lain, seperti :</p>
                <p className="contoh">I learned about adverbs <u>before</u> going to bed.</p>
                <p className="contoh">She drank the tea <u>after</u> it cooled down.</p>
            </div>
        </div>
    )
}

export default TimeModal ;