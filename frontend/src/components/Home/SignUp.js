import React, { useState } from "react";
import "./SignUp.css";
import img1 from "../../assets/img1.jpg";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";

const SignUp = ({ name, setName, fetchQuestion }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  // const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate("");

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      navigate("/quiz");
    }
  };
  return (
    <div className="main">
      <div className="img-part">
        <img src={img1} alt="" srcset="" />
      </div>
      <div className="form-part">
        <span>Registration</span>
        <br />
        {error && (!name || !category || !difficulty) && (
          <span style={{ fontSize: "20px", color: "red", fontWeight: "600" }}>
            Please fill all the field
          </span>
        )}
        <br />
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <select
          className="select-lab"
          label="Select category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {Categories.map((cat) => (
            <option key={cat.category} value={cat.value}>
              {cat.category}
            </option>
          ))}
        </select>
        <br />
        <select
          className="select-lab"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select --</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <button onClick={handleSubmit} className="btn">
          START QUIZ
        </button>
      </div>
    </div>
  );
};

export default SignUp;
