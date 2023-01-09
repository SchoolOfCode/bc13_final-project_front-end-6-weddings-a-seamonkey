import sadFace from "../../Images/sad-face.png";
import "./outcome.css";

export default function NegativeOutcome() {
	return (
		<div>
			<img src={sadFace} />
			<p>Dont Eat this!</p>
		</div>
	);
}
