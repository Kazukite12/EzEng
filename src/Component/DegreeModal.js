import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const DegreeModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Degree</h1>
                <p>Adverb of Degree adalah adverb yang digunakan untuk menyatakan seberapa jauh tingkatan atau intensitas suatu peristiwa atau kegiatan. </p>
                <p>Contohnya yakni sebagai berikut :</p>
                <p className="contoh">Sangat sangat banyak → absolutely, completely, excessively, fully, highly, totally, intensely</p>
                <p className="contoh">Sangat banyak → very much, positively, really, truly, simply, moderately, noticeably</p>
                <p className="contoh">Tidak banyak → hardly, barely</p>

                <p>Adverb of Degree juga digunakan untuk menyatakan completeness atau kelengkapan. Contohnya yakni sebagai berikut :</p>
                <p className="contoh">Sepenuhnya → completely, strongly, perfectly, entirely, largely</p>
                <p className="contoh">Sebagian → partly, almost, nearly, kind of, somewhat </p>
                <p className="contoh">Tidak → hardly, barely</p>

                <p>Nah, contoh kalimat Adverb of Degree antara lain :</p>
                <p className="contoh">I can <u>barely</u> hear your voice from the distance.</p>
                <p className="contoh">I <u>totally</u> agree with you.</p>
                <p className="contoh">He <u>absolutely</u> enjoys outdoor activities.</p>
            </div>
        </div>
    )
}

export default DegreeModal ;