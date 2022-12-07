import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/QuizzResult.css"

const Quizz2Result = ({setOpenNav}) => {

    const score1 = localStorage.getItem('score1');
    const score2 = localStorage.getItem('score2');
    const totalScore = +score1 + +score2;

    const nick = (localStorage.getItem("nick"));

    return (
        <div className="ScreenContainer">
            <div className="finalContainer">
                <h1> Selamat {nick} </h1>
                <h1> Total skor kamu {totalScore} </h1>
                
                <Link to="/">
                    <button onClick={()=> setOpenNav(false)}>Kembali ke Home</button>
                </Link>
            </div>
        </div>
    )
}

export default Quizz2Result