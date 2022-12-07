import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const PurposeModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Purpose</h1>
                <p>Terakhir yaitu Adverb of Purpose. Adverb of Purpose adalah kata keterangan yang menjelaskan tujuan atau alasan dilakukannya suatu kegiatan atau peristiwa. Adverb ini menjawab pertanyaan 'Why?' atau mengapa.</p>
                <p>Contoh dari Adverb of Purpose antara lain yaitu :</p>
                <p className="contoh">to, for, because, so, so that, dan therefore.</p>

                <p>Perhatikan contoh kalimat berikut :</p>
                <p className="contoh">She downloaded the Ruangguru app <u>to</u> improve her English skill.</p>
                <p className="contoh">I went to Bali <u>to</u> visit my nephew.</p>
                <p className="contoh">My mom gave me some money <u>so that</u> I can buy food there. </p>

            </div>
        </div>
    )
}

export default PurposeModal ;