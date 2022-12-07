import React, { useState } from "react";
import "../ComponentStyle/quizzStyle.css";
import ArrowRight from "../Asset/ArrowRight.svg"
import questions from "./QuizzData";
import QuizzResult from "./QuizzResult"


const Quizz =()=> {
    
    const[currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore]=useState(0);
    const [correctAns,setCorrectAns]=useState(0);    
    const [showResult, setShowResult ] = useState(false);
    const [clicked, setClicked] = useState(false);


    const handleAnswerOption=(isCorrect)=> {
        if(isCorrect){
            setScore(score+10)
            setCorrectAns(correctAns+1)
        }
        setClicked(true)
    };

    const handleNextOption =()=> {
        setClicked(false)
        const nextQuestion=currentQuestion+1
        if(nextQuestion<questions.length){
            setCurrentQuestion(nextQuestion)
        }else{
            setShowResult(true)
        }
    };

    const handlePlayAgain=()=>{
        setCurrentQuestion(0)
        setScore(0)
        setCorrectAns(0)
        setShowResult(false)
    };



    return (
        <>
        <div className="quizzContainer">
            {showResult?(<QuizzResult handlePlayAgain={handlePlayAgain} score={score} CorrectAns={correctAns}/>):(
            <div className="questionContainer">
                <div className="questionCounter">
                    <p>{currentQuestion+1}/{questions.length}</p>
                    <p>Score : {score}</p>
                </div>

                <div className="question">
                    <p>{questions[currentQuestion].questionText}</p>
                </div>
                
                <div className="answer">
                {questions[currentQuestion].answerOptions.map((ans,i) => {
                    return (
                    <button className={`button ${clicked && ans.isCorrect? "correct":"button" }`} disabled={clicked}
        
                     key={i} onClick={()=>handleAnswerOption(ans.isCorrect)}>
                        {ans.answerText}
                    </button>
                    ); 
                })}
                </div>
                <div className="next">
                    <button disabled={!clicked} onClick={handleNextOption}>
                        <img src={ArrowRight} />
                    </button>
                </div>
            </div>)}
        </div>
        </>
    );
};

export default Quizz