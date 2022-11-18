import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const RegModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Regular Verb</h1>
                <p>Regular verb adalah kata kerja beraturan yang dapat berubah-ubah sesuai dengan tense yang ada dan sesuai dengan peraturan yang normal, yaitu menambahkan akhiran (-d) atau (-ed) pada kata kerja bentuk pertama (verb 1), sehingga dapat membuat bentuk kata kerja kedua (verb 2). </p>
                <h1>Irregular Verb</h1>
                <p>Sedangkan, irregular verb adalah verb yang memiliki bentuk tidak beraturan dan tidak mematuhi peraturan yang normal, bentuk lampau irregular verb tidak dibentuk dari kata kerja dasar verb 1 </p>
            </div>
        </div>
    )
}

export default RegModal