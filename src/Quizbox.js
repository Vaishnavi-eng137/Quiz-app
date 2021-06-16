import React from "react";
let rules = ["Quiz contains 20 questions.",
    "Every question needs to be solved within 20 secs.",
    "You can not leave the game in between.",
    "If you don't know the answer you can switch to next question.",
    "Play the Quiz & master your calculations.",]

 const handleStartQuiz =()=>{
  window.location = "/quizpage"
 }   
const Quizbox = () => {
    return (
        <div className="box">
            <div>
                <section>
                    <h1>QUIZ</h1>
                    {rules.map((rule, index) => {
                        return <li key={index}>{rule} </li>
                    })
                    }
                </section>
            </div>
            <button className="btn" type="submit"onClick={handleStartQuiz}>Start Quiz</button>
        </div>
    )
}

export default Quizbox