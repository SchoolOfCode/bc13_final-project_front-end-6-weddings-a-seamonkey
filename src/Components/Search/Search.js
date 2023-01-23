import NegativeOutcome from './NegativeOutcome.js';
import PositiveOutcome from './PositiveOutcome.js';
import DefaultOutcome from './DefaultOutcome.js';
import magnifying from '../../Images/magnifying-dark.png';
import barcodeScan from '../../Images/barcode-scan.png';
import './Search.css';
import { useState } from 'react';
import { Cameraswitch } from '@mui/icons-material';
import Bscan from '../Scanner/Scanner.js';

import { useAuth0 } from '@auth0/auth0-react';
import { AddToList } from './AddToList.js';
const url = process.env.REACT_APP_SERVER_URL ?? 'http://localhost:3010';

export default function Search() {
  //   const { user } = useAuth0()
  //   const {sub} = user
  const { isAuthenticated } = useAuth0();

  function updateBarcode(barcode) {
    setSearch({ ...search, searchTerm: barcode });
  }

  const initialSearch = {
    searchTerm: '',
    gluten: true,
    fodmap: true,
    lactose: true,
  };

  const barcodeSearch = {
    gluten: true,
    fodmap: true,
    lactose: true,
  };

  const initialOutcome = {
    outcome: 'default',
    reason: [],
    productName: '',
  };

  const [search, setSearch] = useState(initialSearch);
  const [outcome, setOutcome] = useState(initialOutcome);
  const [noProductError, setNoProductError] = useState(false);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [barcodeScanner, setBarcodeScanner] = useState(false);

  function switchBarcode() {
    setBarcodeScanner(!barcodeScanner);
    setOutcome({ ...outcome, outcome: 'default' });
    setSearch({ ...search, ...barcodeSearch });
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
    if (search.searchTerm !== '') {
      setOutcome(initialOutcome);
      setLoadingSearch(true);
      const response = await fetch(`${url}/api/foods/${search.searchTerm}`);
      const data = await response.json();
      const payload = data.payload;
      setLoadingSearch(false);

      if (payload !== undefined) {
        setNoProductError(false);
        console.log('payload - object from db', payload);
        console.log('search - object that we want to compare', search);
        let newProductName = payload.product_name;
        const reasonArray = [];
        let newOutcome = '';

        if (search.gluten === false && payload.gluten === true) {
          newOutcome = 'negative';
          reasonArray.push('Gluten');
        }

        if (search.lactose === false && payload.lactose === true) {
          newOutcome = 'negative';
          reasonArray.push('Lactose');
        }

        if (search.fodmap === false && payload.fodmap === true) {
          newOutcome = 'negative';
          reasonArray.push('High Fodmap');
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
    setSearch({ ...search, searchTerm: '' });
  }

  return (
    <div className="searchComponent">
      <div className="search">
        <img src={magnifying} alt="Magnifying glass" onClick={onClick} />
        <input
          data-testid="search-input"
          type="text"
          placeholder="Search food or barcode"
          onChange={onChange}
          value={search.searchTerm}
        ></input>
        <img
          src={barcodeScan}
          alt="barcode scan icon"
          onClick={switchBarcode}
        ></img>
      </div>
      {barcodeScanner === false ? (
        <div>
          <div className="searchCheckbox">
            {noProductError === true ? (
              <p data-testid="no-product" className="no-product-error">
                Product not found. Please try again
              </p>
            ) : (
              <></>
            )}

            <p>Choose all that apply:</p>
            <div className="toggle">
              <label className="switch">
                <input
                  aria-labelledby="gluten-toggle"
                  data-testid="gluten-toggle"
                  type="checkbox"
                  onClick={glutenChecked}
                ></input>
                <span className="slider round"></span>
              </label>
              <span className="toggleText">Gluten Free</span>
            </div>
            <div className="toggle">
              <label className="switch">
                <input
                  aria-labelledby="fodmap-toggle"
                  data-testid="fodmap-toggle"
                  type="checkbox"
                  onClick={fodmapChecked}
                ></input>
                <span className="slider round"></span>
              </label>
              <span>Low FODMAP</span>
            </div>
            <div className="toggle">
              <label className="switch">
                <input
                  aria-labelledby="lactose-toggle"
                  data-testid="lactose-toggle"
                  type="checkbox"
                  onClick={lactoseChecked}
                ></input>
                <span className="slider round"></span>
              </label>
              <span>Lactose Free</span>
            </div>
            <button className="search-button" onClick={onClick}>
              Can I eat this?
            </button>
          </div>

          {loadingSearch === true ? (
            <p className="loading-msg">Loading...</p>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <div className="barcode-div">
          <Bscan
            barcodeScanner={barcodeScanner}
            setBarcodeScanner={setBarcodeScanner}
            updateBarcode={updateBarcode}
            switchBarcode={switchBarcode}
          />
        </div>
      )}

      <div className="display-outcome">
        {outcome.outcome === 'default' ? (
          <DefaultOutcome />
        ) : outcome.outcome === 'negative' ? (
          <NegativeOutcome outcome={outcome} />
        ) : (
          <PositiveOutcome searchResult={outcome.productName} />
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <AddToList productName={outcome.productName} />
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}
