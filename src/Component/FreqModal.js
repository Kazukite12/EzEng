import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const FreqModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Adverb of Frequency</h1>
                <p>Adverb of Frequency adalah jenis adverb yang digunakan untuk menyatakan seberapa sering suatu kejadian berlangsung, terdapat dua tipe Adverb of Frequency yaitu definite dan indefinite.</p>
                <p>Tipe definite menjelaskan rekuensi terjadinya suatu peristiwa secara lebih spesifik dibandingkan tipe indefinite.</p>
                <p>Untuk Adverb of Frequency tipe definite contohnya antara lain :</p>
                <p className="contoh">once, twice, three times, every day, daily, weekly, monthly, dan year.</p>
                <p>Contoh kalimatnya yakni sebagai berikut :</p>
                <p className="contoh">He goes to work <u>every day</u>.</p>
                <p className="contoh">I wash my hands <u>twice</u>.</p>
                <p className="contoh">We paid the rent <u>yearly</u>.</p>

                <p>Sedangkan untuk tipe indefinite contohnya adalah :</p>
                <p className="contoh">always, usually, often, sometimes, occasionally, seldom, rarely, dan never.</p>
                <p>Contoh kalimatnya yakni sebagai berikut :</p>
                <p className="contoh">I <u>usually</u> run over the hill.</p>
                <p className="contoh">I <u>always</u> wash my hands.</p>
                <p className="contoh">She <u>never</u> forgets to study.</p>
            </div>
        </div>
    )
}

export default FreqModal ;