import React, { useState } from "react";
import "../Quiz/Quiz.css";
import { Link, useNavigate } from "react-router-dom";

const Question = ({
  question,
  currque,
  setCurrque,
  option,
  correct,
  score,
  setScore,
}) => {
  const [select, setSelect] = useState("");
  const [error, setError] = useState();
  const navigate = useNavigate("");

  const handleSelect = (i) => {
    if (select === i && select === correct) {
      return "select";
    } else if (select === i && select !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelect(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    const alerts = () => {
      alert("Please select value first");
    };
    if (currque > 8) {
      navigate("/result");
    } else if (select) {
      setCurrque(currque + 1);
      setSelect();
    } else {
      setError(alerts);
    }
  };

  const handleQuit = () => {};
  return (
    <div className="Questions-main">
      <h2>Question:{currque + 1}</h2>

      <div className="questions">
        <h2>{question[currque].question}</h2>

        <div className="options">
          {error && (
            <span style={{ color: "red", fontWeight: "bold" }}>{error}</span>
          )}
          {option &&
            option.map((item) => (
              <button
                onClick={() => handleCheck(item)}
                className={`singleoption ${select && handleSelect(item)}`}
                key={item}
                disabled={select}
              >
                {item}
              </button>
            ))}
        </div>
      </div>
      <div className="control-btn">
        <Link to="/">
          <button
            onClick={handleQuit}
            style={{
              backgroundColor: "black",
              color: "white",
              width: 120,
              height: 50,
              marginRight: "20px",
              fontSize: "16px",
              fontWeight: 400,
              cursor: "pointer",
            }}
          >
            Quit
          </button>
        </Link>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: "#003391",
            color: "white",
            fontSize: "16px",
            marginRight: "20px",
            width: 120,
            height: 50,
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
