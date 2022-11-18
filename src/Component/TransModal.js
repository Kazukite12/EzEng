import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const TransModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Transitive Verb</h1>
                <p>Transitive verb adalah kata kerja yang diikuti direct object untuk menerima aksi dari subject. Transitive Verbs membutuhkan objek agar kalimat menjadi utuh dan memiliki makna.</p>

                <p>Beberapa daftar kata kerja transitive mencakup ask, bring, buy, hold, clean, explain, hit, kick, learn, dll.
                </p>

                <p>Contoh pengunaan :</p>
                <p className="contoh">Please bring</p>
                <p className="contoh">Let me hold</p>
                <p>Pada kalimat di atas, kalimatnya terkesan belum selesai atau tidak lengkap karena kata kerja “bring” dan "hold" merupakan transitive verb, sehingga membutuhkan objek agar kalimatnya menjadi lengkap dan memiliki makna utuh. Oleh karena itu, kita harus menambahkan objek menjadi seperti berikut:</p>
                <p className="contoh">Please bring the book</p>
                <p className="contoh">Let me hold it</p>

                <h1>Intransitive Verb</h1>
                <p> Intransitive verb adalah kata kerja yang tidak diikuti oleh direct object sebagai penerima aksi karena memang aksi yang dilakukan tidak melibatkan direct object. Berbeda dengan transitive, Kata kerja yang termasuk dalam jenis ini dapat berdiri sendiri.</p>
                <p>Beberapa daftar kata kerja transitive mencakup adapt, arrive, agree, admit, appear, scream, dll.
                </p>
                <p>Contoh pengunaan :</p>

                <p className="contoh">They arrived</p>
                <p className="contoh">She screams</p>
                <p>Kata “scream” dan "arrive" merupakan intransitive verb, sehingga kalimat yang disusun tetap memiliki makna utuh meskipun tidak ada objeknya.</p>
            </div>
        </div>
    )
}

export default TransModal