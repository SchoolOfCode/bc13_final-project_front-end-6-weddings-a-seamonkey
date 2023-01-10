import NegativeOutcome from './NegativeOutcome.js';
import PositiveOutcome from './PositiveOutcome.js';
import magnifying from '../../Images/magnifying-dark.png';
import './Search.css';
import { useState } from 'react';

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
    searchTerm: '',
    gluten: true,
    fodmap: true,
    lactose: true,
  };

  const [search, setSearch] = useState(initialSearch);

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
    console.log('Clicked');
    console.log(search);
    console.log(typeof search.searchTerm)
    const response = await fetch (`http://localhost:3010/api/foods/${search.searchTerm}`)
    const data = await response.json()
    console.log(data.payload)
  }

  //We want to explore other options to simplify this code ^^^

  return (
    <div>
      <h1>Search</h1>
      <div className="input-field-container">
        <input
          type="text"
          placeholder="Find by food"
          onChange={onChange}
        ></input>
        <img src={magnifying} alt="Magnifying glass" onClick={onClick} />
      </div>
      <p>Choose all that apply:</p>
      <div className="searchCheckbox">
        <div>
          <input type="checkbox" onChange={glutenChecked}></input>Gluten Free
        </div>
        <div>
          <input type="checkbox" onChange={fodmapChecked}></input>Low FODMAPs
        </div>
        <div>
          <input type="checkbox" onChange={lactoseChecked}></input>Lactose Free
        </div>
      </div>
      <div className="display-outcome">
        <PositiveOutcome></PositiveOutcome>
        <NegativeOutcome></NegativeOutcome>
      </div>
    </div>
  );
}
