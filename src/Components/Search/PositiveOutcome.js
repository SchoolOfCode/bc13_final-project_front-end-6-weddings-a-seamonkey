import happyFace from '../../Images/happy-face.png';
import './outcome.css';

export default function PositiveOutcome() {
  return (
    <div>
      <img src={happyFace} alt="Happy face" />
      <div>
      <p>You can eat this!</p>
      </div>
    </div>
  
  );
}
