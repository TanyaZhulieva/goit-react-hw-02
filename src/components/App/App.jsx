import { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Notification from "../Notification/Notification.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import css from "./App.module.css"


export default function App() {
  const [clicks, setClicks] = useState(()=>{
    const savedClicks = localStorage.getItem("clicksCount");
    if(savedClicks !== null) {
      return JSON.parse(savedClicks)
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    }
  }
    );

 useEffect(()=>{
  localStorage.setItem("clicksCount", JSON.stringify(clicks))
 }, [clicks])

  const { good, neutral, bad } = clicks;
  const totalFeedback = good + neutral + bad;
  const positivePercent = Math.round((good / totalFeedback) * 100);
  const isVisible = totalFeedback > 0

  const updateFeedback = (key) => {
    setClicks({
      ...clicks,
      [key]: clicks[key] + 1,
    });
  };

  const reset = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <Description />
      <Options
        onReset={reset}
        isVisible={isVisible}
        onFeedback={updateFeedback}
      />
      {!isVisible && <Notification />}
      {isVisible && <Feedback percent={positivePercent} amount={clicks} />}
    </div>
  );
}
