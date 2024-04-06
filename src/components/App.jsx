import { useState } from "react";
import Description from "./Description/Description.jsx";
import Options from "./Options/Options.jsx";
import Notification from "./Notification/Notification.jsx";
import Feedback from "./Feedback/Feedback.jsx";

export default function App() {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const [isNotificationVisible, setIsNotificationVisible] = useState(true)

  const { good, neutral, bad } = clicks;
  const totalFeedback = good + neutral + bad;
  const positivePercent = Math.round((good / totalFeedback) * 100);

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
    <>
      <Description />
      <Options
        onReset={reset}
        totalFeedback={totalFeedback}
        onFeedback={updateFeedback}
      />
      <Notification />
      {totalFeedback > 0 && <Feedback percent={positivePercent} amount={clicks} />}
    </>
  );
}
