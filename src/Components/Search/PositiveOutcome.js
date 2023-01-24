import './outcome.css';
import happy from '../../Images/happy.gif';
import { useAuth0 } from "@auth0/auth0-react"; 
import { AddToList } from './AddToList.js';
export default function PositiveOutcome({ searchResult }) {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="outcome">
      <img data-testid="happy-face" className="face" src={happy} alt="Happy emoji face"></img>
      <p data-testid="positive-outcome">
        You're good to go - enjoy your {searchResult}!
      </p>
      <div>
        {isAuthenticated ? (
          <AddToList productName={searchResult} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
