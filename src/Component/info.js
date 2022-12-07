import React from "react";
import "../ComponentStyle/HomeStyle.css";
import profil from "../Asset/profil.jpg"

const Info =()=> {
    return (
        <div className="ScreenContainer">
            <div className="Profil" >
                <h1>Profil Pengembang</h1>
                <img src={profil} />
                <p>Nama  : Muhammad Akmal Abid </p>
                <p>NIM   : 21105241056</p>
                <p>Prodi : Teknologi Pendidikan B 2021</p>
            </div>
            <div className="Credit">
                <h1>Credit</h1>
                <h3 className="contoh">Materi Verb dan Adverb</h3>
                <p>www.penaguru.com</p>
                <p>www.Ruangguru.com</p>
                <p>www.Gramedia.com</p>
                <p>www.english-academy.id</p>

                <h3 className="contoh">Video</h3>
                <p>Adverb (Kata Keterangan Bhasa Inggris) 5.0 - Youtube Channel BenPinter</p>
                <p>Pengertian VERB, Fungsi, Jenis, dan Contoh dalam Kalimat - Youtube Channel JustSpeak English Club</p>

                <h3 className="contoh">Audio</h3>
                <p>Swipesy Cakewalk by Es Jammy Jams</p>
                <p>Touch Sound Effect</p>
            </div>

        </div>
    )
}

export default Info