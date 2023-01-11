import NegativeOutcome from "./NegativeOutcome.js";
import PositiveOutcome from "./PositiveOutcome.js";
import magnifying from "../../Images/magnifying-dark.png";
import "./Search.css";
import { useState } from "react";

const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";

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
	const [outcome, setOutcome] = useState(<></>);

	function onChange(e) {
		const newSearchTerm = e.target.value;
		setSearch({ ...search, searchTerm: newSearchTerm });
	}

	function glutenChecked(e) {
		if (e.target.checked === true) {
			setSearch({ ...search, gluten: false });
		} else {
			setSearch({ ...search, gluten: true });
		}
	}

	function fodmapChecked(e) {
		if (e.target.checked === true) {
			setSearch({ ...search, fodmap: false });
		} else {
			setSearch({ ...search, fodmap: true });
		}
	}

	function lactoseChecked(e) {
		if (e.target.checked === true) {
			setSearch({ ...search, lactose: false });
		} else {
			setSearch({ ...search, lactose: true });
		}
	}

	async function onClick() {
		console.log(search);
		const response = await fetch(`${url}/api/foods/${search.searchTerm}`);
		const data = await response.json();
		const payload = data.payload;
		console.log(payload);
		//console.log(search);
		if (search.gluten === false) {
			if (search.gluten !== payload.gluten) {
				setOutcome(<NegativeOutcome />);
			} else {
				setOutcome(<PositiveOutcome />);
			}
		}
		if (search.fodmap === false) {
			if (search.fodmap !== payload.fodmap) {
				setOutcome(<NegativeOutcome />);
			} else {
				setOutcome(<PositiveOutcome />);
			}
		}
		if (search.lactose === false) {
			if (search.lactose !== payload.lactose) {
				setOutcome(<NegativeOutcome />);
			} else {
				setOutcome(<PositiveOutcome />);
			}
		}
		if (
			search.gluten === true &&
			search.fodmap === true &&
			search.lactose === true
		) {
			setOutcome(<PositiveOutcome />);
		}
	}

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
				<input
					type="text"
					placeholder="Find by food"
					onChange={onChange}
				></input>
				<img src={magnifying} alt="Magnifying glass" onClick={onClick} />
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
			<div className="display-outcome">{outcome}</div>
		</div>
	);
}
