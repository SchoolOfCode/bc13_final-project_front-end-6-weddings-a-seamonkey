import NegativeOutcome from "./NegativeOutcome.js";
import PositiveOutcome from "./PositiveOutcome.js";
import DefaultOutcome from "./DefaultOutcome.js";
import magnifying from "../../Images/magnifying-dark.png";
import "./Search.css";
import { useState } from "react";
const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";

export default function Search() {
	const initialSearch = {
		searchTerm: "",
		gluten: true,
		fodmap: true,
		lactose: true,
	};

	const initialOutcome = {
		outcome: "default",
		reason: [],
		productName: "",
	};

	const [search, setSearch] = useState(initialSearch);
	const [outcome, setOutcome] = useState(initialOutcome);

	function onChange(e) {
		const newSearchTerm = e.target.value;
		setSearch({ ...search, searchTerm: newSearchTerm });
	}

	function glutenChecked(e) {
		setSearch({ ...search, gluten: !e.target.checked });
	}

	function fodmapChecked(e) {
		setSearch({ ...search, fodmap: !e.target.checked });
	}

	function lactoseChecked(e) {
		setSearch({ ...search, lactose: !e.target.checked });
	}

	async function onClick() {
		setOutcome(initialOutcome);
		const response = await fetch(`${url}/api/foods/${search.searchTerm}`);
		const data = await response.json();
		const payload = data.payload;
		console.log("payload - object from db", payload);
		console.log("search - object that we want to compare", search);
		let newProductName = payload.product_name;
		const reasonArray = [];
		let newOutcome = "";

		if (search.gluten === false && payload.gluten === true) {
			newOutcome = "negative";
			reasonArray.push("Gluten");
		}

		if (search.lactose === false && payload.lactose === true) {
			newOutcome = "negative";
			reasonArray.push("Lactose");
		}

		if (search.fodmap === false && payload.fodmap === true) {
			newOutcome = "negative";
			reasonArray.push("High Fodmap");
		}

		const newObject = {
			outcome: newOutcome,
			reason: reasonArray,
			productName: newProductName,
		};

		setOutcome(newObject);
	}

	return (
		<div className="searchComponent">
			<div className="search">
				<img src={magnifying} alt="Magnifying glass" onClick={onClick} />
				<input
					type="text"
					placeholder="Find by food or barcode"
					onChange={onChange}
				></input>
			</div>
			<p>Choose all that apply:</p>
			<div className="searchCheckbox">
				<div className="toggle">
					<label className="switch">
						<input type="checkbox" onClick={glutenChecked}></input>
						<span className="slider round"></span>
					</label>
					<span className="toggleText">Gluten Free</span>
				</div>
				<div className="toggle">
					<label className="switch">
						<input type="checkbox" onClick={fodmapChecked}></input>
						<span className="slider round"></span>
					</label>
					<span>Low FODMAPs</span>
				</div>
				<div className="toggle">
					<label className="switch">
						<input type="checkbox" onClick={lactoseChecked}></input>
						<span className="slider round"></span>
					</label>
					<span>Lactose Free</span>
				</div>
			</div>
			<button className="search-button" onClick={onClick}>
				Can I eat this?
			</button>

			<div className="display-outcome">
				{" "}
				{outcome.outcome === "default" ? (
					<DefaultOutcome />
				) : outcome.outcome === "negative" ? (
					<NegativeOutcome outcome={outcome} />
				) : (
					<PositiveOutcome searchResult={outcome.productName} />
				)}
			</div>
		</div>
	);
}
