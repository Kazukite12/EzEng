import React, { useState } from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import questions from "./QuizzData";
import "../ComponentStyle/QuizzResult.css"

const QuizzResult = (props) => {

    const score1 = (props.score)
    localStorage.setItem('score1', score1)

    const nick = (localStorage.getItem("nick"));
    return (
        <div className="score">
            <h2> Selamat {nick} </h2>
            <div className="Info">
                <p> Skor kamu {props.score} </p>
                <p> Dengan total jawaban benar</p>
                <p>{props.CorrectAns} / {questions.length}</p>
            </div>
            <button onClick={props.handlePlayAgain}>Kerjakan Ulang</button>
            <Link to="/Screen5">
            <button>Selanjutnya</button>
            </Link>

        </div>
    )
}

export default QuizzResult