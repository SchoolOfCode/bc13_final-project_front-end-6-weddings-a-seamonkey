import "./outcome.css";
import sadFace from "../../Images/sad-face.png";

export default function NegativeOutcome({
	glutenResult,
	fodmapResult,
	lactoseResult,
	payload,
}) {
	return (
		<div className="outcome">
			<img className="face" src={sadFace} alt="Sad emoji face" />
			<p>Don't eat {payload.product_name}!</p>
			<>Product contains:</>
			<br></br>
			<>{glutenResult}</>
			<br></br>
			<>{fodmapResult}</>
			<br></br>
			<>{lactoseResult}</>
		</div>
	);
}
