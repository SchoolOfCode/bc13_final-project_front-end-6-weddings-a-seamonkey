import "./outcome.css";
import happyFace from "../../Images/happy-face.png";

export default function PositiveOutcome({ searchResult }) {
	return (
		<div className="outcome">
			<img className="face" src={happyFace} alt="Sad emoji face" />
			<p>You're good to go - enjoy your {searchResult}!</p>
		</div>
	);
}
