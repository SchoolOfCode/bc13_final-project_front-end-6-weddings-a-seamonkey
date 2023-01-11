import sadFace from '../../Images/sad-face.png';
import './outcome.css';

export default function NegativeOutcome() {
  return (
    <div>
      <img src={sadFace} alt="Sad face" />
      <p>You can't eat this because it contains *props*</p>
    </div>
  );
}
