import './outcome.css';
// import sadFace from "../../Images/sad-face.png";
import sad from '../../Images/sad.gif';

export default function NegativeOutcome({ outcome }) {
  console.log(outcome, 'This is outcome');
  return (
    <div className="outcome">
      <img
        data-testid="not-happy-face"
        className="face"
        src={sad}
        alt="Sad emoji face"
      ></img>

      <p data-testid="negative-outcome">Don't eat {outcome.productName}!</p>
      <div data-testid="negative-outcome-reason">
        <>Product contains:</>
        {outcome.reason.map((reason, index) => {
          return <li key={index}>{reason}</li>;
        })}
      </div>
    </div>
  );
}
