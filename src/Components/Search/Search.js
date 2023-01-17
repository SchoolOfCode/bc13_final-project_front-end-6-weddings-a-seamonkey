import NegativeOutcome from "./NegativeOutcome.js";
import PositiveOutcome from "./PositiveOutcome.js";
import DefaultOutcome from "./DefaultOutcome.js";
import magnifying from "../../Images/magnifying-dark.png";
import "./Search.css";
import { useState } from "react";
import { Cameraswitch } from "@mui/icons-material";
import Bscan from "../Scanner/Scanner.js";

const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";

export default function Search() {
	function updateBarcode(barcode) {
		setSearch({ ...search, searchTerm: barcode });
	}

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
	const [noProductError, setNoProductError] = useState(false);
	const [loadingSearch, setLoadingSearch] = useState(false);
	const [barcodeScanner, setBarcodeScanner] = useState(false);

	function switchBarcode() {
		setBarcodeScanner(!barcodeScanner);
		setOutcome({ ...outcome, outcome: "default" });
	}

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
		if (search.searchTerm !== "") {
			setOutcome(initialOutcome);
			setLoadingSearch(true);
			const response = await fetch(`${url}/api/foods/${search.searchTerm}`);
			const data = await response.json();
			const payload = data.payload;
			setLoadingSearch(false);

			if (payload !== undefined) {
				setNoProductError(false);
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
			} else {
				setNoProductError(true);
			}
		}
		setSearch({ ...search, searchTerm: "" });
	}

	return (
		<div className="searchComponent">
			<div className="search">
				<img src={magnifying} alt="Magnifying glass" onClick={onClick} />
				<input
					type="text"
					placeholder="Find by food or barcode"
					onChange={onChange}
					value={search.searchTerm}
				></input>
				<button onClick={switchBarcode}>Barcode?</button>
			</div>
			{noProductError === true ? (
				<p className="no-product-error">Product not found. Please try again</p>
			) : (
				<></>
			)}
			{barcodeScanner === false ? (
				<div>
					<div className="searchCheckbox">
						<p>Choose all that apply:</p>
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
					{loadingSearch === true ? (
						<p className="loading-msg">Loading...</p>
					) : (
						<></>
					)}
				</div>
			) : (
				<div>
					<Bscan updateBarcode={updateBarcode} switchBarcode={switchBarcode} />
				</div>
			)}

			<div className="display-outcome">
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
