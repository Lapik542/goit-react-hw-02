export const Options = ({ onGoodClick, onNeutralClick, onBadClick, onResetClick, isFeedbackGiven }) => {
   return (
      <div>
        <button onClick={onGoodClick}>Good</button>
        <button onClick={onNeutralClick}>Neutral</button>
        <button onClick={onBadClick}>Bad</button>
        {isFeedbackGiven && <button onClick={onResetClick}>Reset</button>}
      </div>
   );
};
