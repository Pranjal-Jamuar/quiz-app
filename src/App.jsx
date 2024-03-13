import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./Pages/Home/Home.jsx"
import Quiz from "./Pages/Quiz/Quiz.jsx"
import Result from "./Pages/Result/Result.jsx"
import { useState } from "react"
import axios from "axios"
function App() {

  const [name, setName] = useState("")
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)
  const fetchQuestions = async(category = "", difficulty = "") => {
    const {data} = await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
    setQuestions(data.results)
  }
  return (
    <Router>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
          <Route path="/quiz" element={<Quiz 
            name={name} 
            questions={questions} 
            score={score} 
            setScore={setScore} 
            setQuestions={setQuestions} />} 
          />
          <Route path="/result" element={<Result 
             name={name}
             score={score}
          />} 
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
