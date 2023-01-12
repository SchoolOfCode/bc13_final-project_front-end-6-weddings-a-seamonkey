
import './outcome.css';

export default function NegativeOutcome({glutenResult,fodmapResult,lactoseResult}) {
  return (


    <div className="outcome">
      <span className="face">☹️</span>
      <p>Dont Eat this!</p>
      <p>Product contains {glutenResult} {fodmapResult} {lactoseResult}</p>
    </div>
  );
}
