import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './List.css';
const url = process.env.REACT_APP_SERVER_URL ?? 'http://localhost:3010';
export default function List() {
  const [array, setArray] = useState([]);
  const { user } = useAuth0();
  const { sub } = user;

  async function DeleteFromList(item) {
    const response = await fetch(
      `${url}/api/userproducts/${sub}/${item.product_name}`,
      { method: 'DELETE' }
    );
    console.log(sub);
    console.log(item.product_name);
    GetList();
  }

  //SQL query to capitalise first letter of product name
  // Query above deletes all products with same name ^^

  async function GetList() {
    const response = await fetch(`${url}/api/userproducts/${sub}`);
    const data = await response.json();
    const payload = data.payload;
    setArray(payload);
  }

  useEffect(() => {
    GetList();
  }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <h1>My Foods</h1>
      <div className="list-items">
        {array.map((item, index) => {
          return (
            <li key={index}>
              {item.product_name}
              <button
                className="delete-button"
                onClick={() => {
                  DeleteFromList(item);
                }}
              >
                Delete from list
              </button>
            </li>
          );
        })}
      </div>
    </>
  );
}
