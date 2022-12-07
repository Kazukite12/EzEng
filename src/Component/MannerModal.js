import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const MannerModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Manner</h1>
                <p>Adverb of Manner merupakan kata keterangan yang menjelaskan bagaimana suatu peristiwa terjadi atau dilakukan. Adverb ini menjawab pertanyaan 'How?' atau bagaimana. Biasanya, Adverb of Manner berakhiran -ly. </p>
                <p>Contoh penerapan dalam kalimatnya antara lain :</p>
                <p className="contoh">Tasya sings the song <u>beautifully</u>.</p>
                <p className="contoh">Hendra sings the song <u>terribly</u>.</p>

            </div>
        </div>
    )
}

export default MannerModal ;