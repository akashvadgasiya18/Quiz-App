// import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Quiz.css";
import Question from "../Question/Question";

const Quiz = ({ name, score, question, setScore, setQuestion }) => {
  const [option, setOption] = useState("");
  const [currque, setCurrque] = useState(0);
  useEffect(() => {
    console.log(question);

    setOption(
      question &&
        handleShuffle([
          question[currque]?.correct_answer,
          ...question[currque]?.incorrect_answers,
        ])
    );
  }, [question, currque]);
  // console.log(option);

  const handleShuffle = (option) => {
    return option.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz-main">
      <span className="heading-name">Welcome, {name}</span>
      {question ? (
        <>
          <div className="que-info">
            <span className="que-sub">
              Subject : {question[currque].category}
            </span>
            <span className="que-score">Score : {score}</span>
          </div>

          <Question
            currque={currque}
            setCurrque={setCurrque}
            question={question}
            option={option}
            correct={question[currque]?.correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Quiz;
