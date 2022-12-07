import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const PlaceModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Place</h1>
                <p>Adverb of Place merupakan adverb yang menyatakan tempat terjadinya suatu kegiatan atau peristiwa. Adverb ini digunakan untuk menjawab pertanyaan 'Where?' atau di mana. Adverb of Place memiliki beberapa fungsi yaitu:</p>
                <p>Menunjukkan location atau tempat terjadinya suatu peristiwa, seperti :</p>
                <p className="contoh">here, there, outside, inside, somewhere, nowhere, dan anywhere.</p>

                <p>Menunjukkan direction atau arah dari suatu pergerakan, seperti :</p>
                <p className="contoh">up, down, North, South, backwards, dan around.</p>

                <p>Menunjukkan distance atau jarak dari suatu lokasi, seperti :</p>
                <p className="contoh">nearby, close, apart, dan away. </p>

                <p>Contoh penggunaannya dalam kalimat adalah :</p>
                <p className="contoh">It was raining so the parents tell the children to play <u>inside</u>.</p>
                <p className="contoh">Let's eat <u>somewhere</u>.</p>
            </div>
        </div>
    )
}

export default PlaceModal ;