import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Results.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate("");
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  });
  return (
    <div className="results">
      <span className="score-title">Final Result is : {score}</span>
      <Link to="/">
        <button className="home-btn">Go to Home</button>
      </Link>
    </div>
  );
};

export default Result;
