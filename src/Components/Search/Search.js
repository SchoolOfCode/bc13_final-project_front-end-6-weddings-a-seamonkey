import NegativeOutcome from "./NegativeOutcome";
import PositiveOutcome from "./PositiveOutcome";
import "./Search.css";

export default function Search() {
	//product_id
	// product_Name
	// picture
	// lactose
	// fodmap
	// gluten
	// barcode_number

	//by default should be true (you can have it)
	// if you check the box, will change to false and indicting you cant have that thing

	//Example of no LACTOSE
	//{
	//searchTerm: input,
	//gluten: true,
	//fodmap: true,
	//lactose: false
	// }

	//SEARCH BAR:
	//TODO: need a state to store the object to send
	//TODO: need an input for the searchTerm
	//TODO: 3 x checkboxes
	//TODO: need to capture the search and the checkbox inputs

	// OUTPUT:
	//TODO: positive version - with smiley face, positive message
	//TODO: negative version - unhappy face, negative message
	//Need a state set to positive or negative

	return (
		<div>
			<h1>Search</h1>
			<input type="text" placeholder="Find by food"></input>🔍
			<p>Choose all that apply:</p>
			<div className="searchCheckbox">
				<div>
					<input type="checkbox"></input>Gluten Free
				</div>
				<div>
					<input type="checkbox"></input>Low FODMAPs
				</div>
				<div>
					<input type="checkbox"></input>Lactose Free
				</div>
			</div>
			<div className="display-outcome">
				<PositiveOutcome></PositiveOutcome>
				<NegativeOutcome></NegativeOutcome>
			</div>
		</div>
	);
}
