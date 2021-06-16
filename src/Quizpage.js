import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useHistory } from "react-router-dom";

function Quizpage() {
  const history = useHistory("");
  const [input, setInput] = useState(null);
  const [score, setScore] = useState(0);
  const [a, setA] = useState(null);
  const [b, setB] = useState(null);
  const [operator, setOperator] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [count, setCount] = useState(0);
  const [listofquestion, setListOfQuestion] = useState([]);
  const [listofentries, setListOfEntries] = useState([]);
  const [listofanswers, setListOfAnswers] = useState([]);

  const addItem = () => {
    setListOfQuestion([
      ...listofquestion,
      `${a} ${operators[operator].sign} ${b}`,
    ]);
  };

  const addListOfEntries = () => {
    setListOfEntries([...listofentries, input]);
  };

  const addListofAnswers = () => {
    setListOfAnswers([...listofanswers, answer]);
  };

  let operators = [
    {
      sign: "+",
      method: function (a, b) {
        return a + b;
      },
    },
    {
      sign: "-",
      method: function (a, b) {
        return a - b;
      },
    },
    {
      sign: "/",
      method: function (a, b) {
        return a / b;
      },
    },
    {
      sign: "*",
      method: function (a, b) {
        return a * b;
      },
    },
  ];
  const generateNewQuestion = () => {
    setA(Math.floor(Math.random() * 10 + 1));
    setB(Math.floor(Math.random() * 10 + 1));
    setOperator(Math.floor(Math.random() * operators.length));
    setInput("");
    setAnswer(operators[operator].method(a, b));
    setCount(count + 1);
  };

  useEffect(() => {
    generateNewQuestion();
  }, []);

  useEffect(() => {
    setAnswer(operators[operator].method(a, b));
  }, [count]);

  const UrgeWithPleasureComponent = () => (
    <CountdownCircleTimer
      // onComplete={() => {
      //   if (count < 5) {
      //     generateNewQuestion();
      //     return [true, 1000];
      //   } else {
      //     return [false];
      //   }
      // }}
      isPlaying
      size="50"
      strokeWidth="6"
      duration={20}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
  const handleAnswer = (e) => {
    setInput(e.target.value);
  };

  const handleScore = () => {
    if (input == answer) {
      // console.log(answer);
      setScore(score + 1);
    }
  };

  return (
    <div className="container">
      <div className="timer">
        <div>
          <h2>Q{count}.</h2>
        </div>
        <div>{UrgeWithPleasureComponent()}seconds</div>
      </div>
      <div className="numDisplay">
        {a}
        {operators[operator].sign}
        {b} = ?
      </div>
      <div className="resultInput">
        <input
          value={input}
          onChange={handleAnswer}
          type="text"
          placeholder="Enter answer here.."
        ></input>
      </div>
      <div>
        <button
          onClick={() => {
            if (count < 5) {
              generateNewQuestion();
              handleScore();
              addItem();
              addListOfEntries();
              addListofAnswers();
              UrgeWithPleasureComponent();
              <CountdownCircleTimer
                onComplete={() => {
                  if (count < 5) {
                    generateNewQuestion();
                    return [true, 1000];
                  } else {
                    return [false];
                  }
                }}
              ></CountdownCircleTimer>;
            } else {
              history.push("/resultpage");
            }
          }}
          className="btn btn-success"
          type="button"
        >
          next
        </button>
        <p>Score:{score}/20</p>
      </div>
      {listofquestion.map((element, index) => {
        return (
          <div classname="Questionlist" key={index}>
            <ol>
              <span>{index + 1}. </span>
              {element} = ?
            </ol>
          </div>
        );
      })}
      {listofentries.map((element, index) => {
        return (
          <div className="Entrieslist" key={index}>
            <p>Your answer:{element}</p>
          </div>
        );
      })}
      {listofanswers.map((element, index) => {
        return (
          <div className="Answerlist" key={index}>
            <p>Correct Answer: {element}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Quizpage;
