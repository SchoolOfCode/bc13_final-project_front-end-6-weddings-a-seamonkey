import NegativeOutcome from "./NegativeOutcome.js";
import PositiveOutcome from "./PositiveOutcome.js";
import DefaultOutcome from "./DefaultOutcome.js";
import magnifying from "../../Images/magnifying-dark.png";
import "./Search.css";
import { useState } from "react";
const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";
// const url = 'http://localhost:3010';

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
	const initialSearch = {
		searchTerm: "",
		gluten: true,
		fodmap: true,
		lactose: true,
	};

	const [search, setSearch] = useState(initialSearch);
	const [outcome, setOutcome] = useState(<DefaultOutcome />);
	// could use default state for outcome to display a message like 'please enter food'
	const [lactoseResult, setLactoseResult] = useState("");
	const [fodmapResult, setFodmapResult] = useState("");
	const [glutenResult, setGlutenResult] = useState("");

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
		const response = await fetch(`${url}/api/foods/${search.searchTerm}`);
		const data = await response.json();
		const payload = data.payload;
		console.log("payload - object from db", payload);
		console.log("search - object that we want to compare", search);

		if (search.gluten === false && payload.gluten === true) {
			setGlutenResult("gluten");
			console.log(glutenResult);
		} else {
			setGlutenResult("");
		}

		if (search.lactose === false && payload.lactose === true) {
			setLactoseResult("lactose");
		} else {
			setLactoseResult("");
		}

		if (search.fodmap === false && payload.fodmap === true) {
			setFodmapResult("high fodmap");
			console.log(fodmapResult);
		} else {
			setFodmapResult("");
		}

		if (
			(search.gluten === false && payload.gluten === true) ||
			(search.fodmap === false && payload.fodmap === true) ||
			(search.lactose === false && payload.lactose === true)
		) {
			//console.log('negative outcome');
			setOutcome(
				<NegativeOutcome
					payload={payload}
					lactoseResult={lactoseResult}
					fodmapResult={fodmapResult}
					glutenResult={glutenResult}
				/>
			);
		} else {
			//console.log('positive outcome', payload.product_name);
			setOutcome(<PositiveOutcome searchResult={payload.product_name} />);
		}
	}

	/*
  
  Only want to display the one they cannot eat

  Moving a useState to another component (research?)

  */

	/*We want to explore other options to simplify this code ^^^


	suggested code ->

function checkboxChanged(e) {
setFoodIntolerance(e.target.name, !e.target.checked);
}

  function setFoodIntolerance(key, value) {
setSearch({...search, fodmap: !e.target.checked})
   let searchCriteria = { ...search };
    searchCriteria[key] = value; // fodmap:value
 Looks like array - object is just an array but instead of numbers it has key, hence the [key] = value
    setSearch(searchCriteria);
  }

       <input
           type="checkbox"
             onChange={checkboxChanged}
            name="gluten"
         ></input>
           Gluten Free
         </div>
         <div>
           <input
            type="checkbox"
            onChange={checkboxChanged}
            name="fodmap"
          ></input>
         Low FODMAPs
        </div>
       <div>
           <input
            type="checkbox"
            onChange={checkboxChanged}
            name="lactose"
          ></input>
  */

	return (
		<div className="searchComponent">
			<div className="search">
				<img src={magnifying} alt="Magnifying glass" onClick={onClick} />
				<input
					type="text"
					placeholder="Find by food"
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
			<div className="display-outcome">{outcome}</div>
		</div>
	);
}
