import React from "react";
import "../ComponentStyle/ModalStyle.css"
import Xicon from "../Asset/XIcon.svg"

const AuxModal = ({open,onClose}) => {
        if(!open) return null
    return (
        <div className="OverlayMateri">
            <div className="XContainer">
                <img onClick={onClose} src={Xicon} />
            </div>
            <div className="MateriContainer">
                <h1>Auxiliary Verb</h1>
                <p>Auxiliary verb merupakan kata pembantu untuk melengkapi kata kerja utama dalam sebuah kalimat. Selain untuk melengkapi kata kerja utama, auxiliary verb juga berfungsi untuk memperjelas kata kerja utama. Maka dari itu, auxiliary verb tidak bisa berdiri sendiri tanpa kata kerja</p>
                <p>Jenis dan contoh penggunaannya :</p>
                <p>1. Be</p>
                <p>Be bisa meliputi am, is, are, was, were, been, being, dan to be. jenis “be” ini berfungsi untuk membentuk present atau past continuous tense dan  future continuous dengan tambahan modal verb “will”. Be dapat pula dikombinasikan dengan verb “have” untuk membentuk membentuk present atau past continuous tense dengan "will"</p>
                <p className="contoh">Present continuous - I am making a glass of ice coffee</p>
                <p className="contoh">Past continuous tense - They were studying English</p>
                <p>2. Do</p>
                <p>Do merupakan auxiliary verb yang berfungsi untuk menekankan kata kerja utama. Auxiliary verb ini meliputi do, does, did, dan done yang digunakan dengan menyesuaikan tenses Bahasa Inggris.</p>
                <p className="contoh">I do finish my homework.</p>
                <p className="contoh">Do open the window.</p>
                <p>Do dapat pula untuk membentuk pertanyaan</p>
                <p className="contoh">Did you see her yesterday ?</p>
                <p className="contoh">What does he want from you?</p>
                <p className="contoh">You love your job, don't you?</p>
                <p>3. Have</p>
                <p>Have bisa meliputi have,has, dan had. Auxiliary verb “have” berguna untuk membentuk perfect tense. </p>
                <p className="contoh">Present perfect - Tina has studied in German since April</p>
                <p className="contoh">Past perfect - I had already eaten breakfast by the time she picked me up.</p>

                <h1>Modal Verb</h1>
                <p>Modal Verb adalah kata yang ditempatkan sebelum main verb (kata kerja utama) untuk memodifikasi makna dari kata kerja utama tersebut. Fungsinya untuk mengekspresikan willingness (kemauan) atau ability (kemampuan), necessity (kebutuhan), dan possibility (kemungkinan).</p>
                <p>Jenis dan contoh penggunaannya :</p>
                
                <p>1. Can dan Could</p>
                <p>Verb ini dapat berfungsi untuk meminta izin (permission), menyatakan kemungkinan dan kemampuan. Can digunakan untuk menggambarkan situasi saat ini, sementara could digunakan untuk menyatakan kejadian di masa lalu. </p>
                <p className="contoh">Can I borrow your book?</p>
                <p className="contoh">If you had asked for help, I could have helped you</p>
                
                <p>2. May dan Might</p>
                <p>Sama seperti can dan could, bedanya jenis verb ini digunakan untuk menggambarkan kemungkinan yang lebih kecil untuk terjadi dan bersifat lebih formal.</p>
                <p className="contoh">May I borrow your pen?</p>
                <p className="contoh">If you had asked me for the answer, I might gived you</p>

                <p>3. Will, Shall dan Would</p>
                <p>Jenis verb ini digunakan untuk menyatakan willingness (kemauan). Willingness dapat diungkapkan dalam conditional sentence type 1 maupun invitation (undangan/ajakan).</p>
                <p className="contoh">I will go to Katie's house tomorrow.</p>
                <p className="contoh">I would rather eat chocolate than cheese.</p>
                <p className="contoh">I shall never forget the help you gave me.</p>

                <p>4. Should dan Ought to</p>
                <p>Baik Should maupun Ought to digunakan untuk memberi suggestion (saran) atau advice (nasehat). Bedanya, should bersifat subjektif yang bersifat opini, sementara ought to lebih bersifat objektif mengenai suatu regulasi, benar dan salah.</p>
                <p className="contoh">You should do your homework.</p>
                <p className="contoh">They ought to follow the school regulations.</p>

                <p>5. Must dan Have to</p>
                <p>Baik must maupun have to digunakan untuk menyatakan keharusan, mengekspresikan obligation (kewajiban) atau necessity (kebutuhan). Bedanya must digunakan untuk opini, dan have to untuk suatu keharusan yang sifatnya general </p>
                <p className="contoh">You're sick. You have to go to the doctor.</p>
                <p className="contoh">You must not come home after 10 o'clock pm</p>
            </div>
        </div>
    )
}

export default AuxModal