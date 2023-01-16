import "./outcome.css";
import sadFace from "../../Images/sad-face.png";

export default function NegativeOutcome({ outcome }) {
	console.log(outcome, "This is outcome");
	return (
		<div className="outcome">
			<img className="face" src={sadFace} alt="Sad emoji face" />
			<p>Don't eat {outcome.productName}!</p>
			<>Product contains:</>
			{outcome.reason.map((reason, index) => {
				return <li key={index}>{reason}</li>;
			})}
		</div>
	);

}
