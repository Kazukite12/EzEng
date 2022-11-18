import React from "react";
import "../ComponentStyle/QuizzResult.css"

const QuizzResult = (props) => {

    const nick = (localStorage.getItem("nick"));
    return (
        <div className="score">
            <h1> Selamat {nick} </h1>
            <h1> Skor kamu {props.score} </h1>
            <h1> Dengan total jawaban benar {props.CorrectAns} </h1>
            <button onClick={props.handlePlayAgain}>Play Again</button>
            <button onClick={props.handlePlayAgain}>Selanjutnya</button>
        </div>
    )
}

export default QuizzResult