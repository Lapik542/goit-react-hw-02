export const Options = ({ onGoodClick, onNeutralClick, onBadClick, onResetClick }) => {
   return (
      <div>
        <button onClick={onGoodClick}>Good</button>
        <button onClick={onNeutralClick}>Neutral</button>
        <button onClick={onBadClick}>Bad</button>
        <button onClick={onResetClick}>Reset</button>
      </div>
   );
};
