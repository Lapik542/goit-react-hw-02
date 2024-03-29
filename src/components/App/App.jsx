import React, { useEffect, useState } from 'react';
import { Description } from "../Description/Description";
import { Options } from "../Options/Options";
import { Feedback } from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export const App = () => {
   const [good, setGood] = useState(parseInt(localStorage.getItem('good'), 10) || 0);
   const [neutral, setNeutral] = useState(parseInt(localStorage.getItem('neutral'), 10) || 0);
   const [bad, setBad] = useState(parseInt(localStorage.getItem('bad'), 10) || 0);
   const [isFeedbackGiven, setIsFeedbackGiven] = useState(localStorage.getItem('isFeedbackGiven') === 'true');

   useEffect(() => {
      localStorage.setItem('good', good);
      localStorage.setItem('neutral', neutral);
      localStorage.setItem('bad', bad);
      localStorage.setItem('isFeedbackGiven', isFeedbackGiven);
   }, [good, neutral, bad, isFeedbackGiven]);

   const handleGoodClick = () => {
      setGood(good + 1);
      setIsFeedbackGiven(true); 
   };

   const handleNeutralClick = () => {
      setNeutral(neutral + 1);
      setIsFeedbackGiven(true);
   };

   const handleBadClick = () => {
      setBad(bad + 1);
      setIsFeedbackGiven(true);
   };

   const handleResetClick = () => {
      setGood(0);
      setNeutral(0);
      setBad(0);
      setIsFeedbackGiven(false); 
   };
   
   const totalFeedback = good + neutral + bad;

   const positive = Math.round(((good + neutral) / totalFeedback) * 100)

   return (
      <>
         <Description />
         <Options
            onGoodClick={handleGoodClick}
            onNeutralClick={handleNeutralClick}
            onBadClick={handleBadClick}
            onResetClick={handleResetClick}
            isFeedbackGiven={isFeedbackGiven} />
         {totalFeedback === 0 ? (
            <Notification message="No feedback given yet." />
         ) : (
            <Feedback
               good={good}
               neutral={neutral}
               bad={bad}
               totalFeedback={totalFeedback}
               positive={positive} />
         )}
      </>
   );
};
