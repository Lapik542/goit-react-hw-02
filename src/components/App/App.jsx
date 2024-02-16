import { Description } from "../Description/Description"
import { Options } from "../Options/Options"
import { Feedback } from "../Feedback/Feedback"
import { useState } from 'react';

export const App = () => {

   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);

   const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
   };

   const handleResetClick = () => {
    setGood(0);
    setNeutral(0);
    setBad(0);
   };
   
   const totalFeedback = good + neutral + bad;

   const Positive = Math.round(((good + neutral) / totalFeedback) * 100);

  return (
    <>
        <Description />
        <Options
           onGoodClick={handleGoodClick}
           onNeutralClick={handleNeutralClick}
           onBadClick={handleBadClick}
           onResetClick={handleResetClick} />
        <Feedback
           good={good}
           neutral={neutral}
           bad={bad}
           totalFeedback={totalFeedback}
            positive={Positive} />
    </>
  );
};


