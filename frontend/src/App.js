import "./App.css";
import Headers from "./components/Headers";
import SignUp from "./components/Home/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Result from "./components/Result/Result";
import Quiz from "./components/Quiz/Quiz";
import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [question, setQuestion] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestion = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestion(data.results);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Headers />
        <Routes>
          <Route
            path="/"
            element={
              <SignUp
                name={name}
                setName={setName}
                fetchQuestion={fetchQuestion}
              />
            }
          />
          <Route path="/result" element={<Result score={score} name={name}/>} />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                question={question}
                score={score}
                setScore={setScore}
                setQuestion={setQuestion}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
