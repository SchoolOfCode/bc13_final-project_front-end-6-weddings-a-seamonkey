
import './outcome.css';

export default function PositiveOutcome({searchResult}) {
  return (


    <div className="outcome">
      <span className="face">😃</span>
      <p>You're good to go- enjoy your {searchResult}!</p>

    </div>
  

  );
}
