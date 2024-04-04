import {useState} from "react"
import Description from "./Description/Description.jsx"
// import Options from "./Options/Options"
import Feedback from "./Feedback/Feedback.jsx";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const updateFeedback = (key) => {
    setClicks({
      ...clicks,
      [key]: clicks[key] + 1,
    });
  }

  return (
    <>
      <Description/>
      <button onClick={()=> updateFeedback("good")}>Good</button>
      <button onClick={()=> updateFeedback("neutral")}>Neutral</button>
      <button onClick={()=> updateFeedback("bad")}>Bad</button>
      <Feedback amount = {clicks}/>
    </>
  )
}


