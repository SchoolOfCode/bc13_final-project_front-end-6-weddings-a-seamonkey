import './outcome.css';
import happy from '../../Images/happy.gif';

export default function PositiveOutcome({ searchResult }) {
  return (
    <div className="outcome">
      <img className="face" src={happy} alt="Happy emoji face"></img>
      <p data-testid="positive-outcome">
        You're good to go - enjoy your {searchResult}!
      </p>
    </div>
  );
}
