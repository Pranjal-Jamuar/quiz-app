/* eslint-disable react/prop-types */
import { useEffect } from "react"
import "./Result.css"
import { useNavigate } from "react-router-dom"
import { Button } from "@mui/material"

const Result = ({ name, score }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!name) {
      navigate("/")
    }
  }, [name, navigate])
  
  return (
    <div className="result">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to Homepage
      </Button>
    </div>
  )
}

export default Result
