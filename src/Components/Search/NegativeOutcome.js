import "./outcome.css";
import sadFace from "../../Images/sad-face.png";

export default function NegativeOutcome({ outcome }) {
	console.log(outcome, "This is outcome");
	return (
		<div className="outcome">
			<img className="face" src={sadFace} alt="Sad emoji face" />
			<p>Don't eat {outcome.productName}!</p>
			<>Product contains:</>
			<p>{outcome.reason[0]}</p>
			<p>{outcome.reason[1]}</p>
			<p>{outcome.reason[2]}</p>
			{/* <>{glutenResult}</>
			<br></br>
			<>{fodmapResult}</>
			<br></br>
			<>{lactoseResult}</> */}
		</div>
	);
}
