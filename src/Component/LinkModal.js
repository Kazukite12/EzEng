import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const LinkModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Linking Verb</h1>
                <p>Linking Verb adalah jenis kata kerja penghubung yang menghubungkan subjek dengan complement (pelengkap). Subject complement tersebut dapat merupakan noun, pronoun, adjective, atau bentuk lainnya.</p>
                <p>Jenis dan contoh pengunaannya :</p>

                <p>1. Jenis Verb of being, mencakup segala bentuk be (am, is, are, was, were, etc), become, seem, dll</p>
                <p className="contoh">She was a good friend (N + V + N)</p>
                <p className="contoh">He became angry (N + V + Adj)</p>
                <p className="contoh">He seems happy (N + V + Adj)</p>
        
                <p>2. Verb of sensation, mencakup feel, look, smell, sound, dan tase.</p>
                <p className="contoh">This food tastes delicious (S + V + Adj)</p>
                <p className="contoh">The children seemed happy (S + V + Adj)</p>

                <p>Seperti contoh tersebut, kata kerja atau linking verb yang ada pada kalimat langsung diikuti oleh noun/adjective </p>

            </div>
        </div>
    )
}

export default LinkModal