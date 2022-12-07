import React from "react";
import { Link } from "react-router-dom";
import "../ComponentStyle/QuizzResult.css"

const Quizz1Result = (props) => {

    const score2 = (props.score)
    localStorage.setItem('score2',score2)

    const nick = (localStorage.getItem("nick"));
    return (
        <div className="score">
            <h1> Selamat {nick} </h1>
            <h1> Skor kamu {props.score} </h1>
            <h1> Dengan total jawaban benar {props.CorrectAns} </h1>
            <button onClick={props.handlePlayAgain}>Play Again</button>
            <Link to="/Quizz2">
            <button>Selanjutnya</button>
            </Link>
            
        </div>
    )
}

export default Quizz1Result