import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
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

  async function GetList() {
    const response = await fetch(`${url}/api/userproducts/${sub}`);
    const data = await response.json();
    const payload = data.payload;
    setArray(payload);
  }

  useEffect(() => {
    GetList();
  }, []);

  return (
    <>
      <h1>My Foods</h1>

      {array.map((item, index) => {
        return (
          <li key={index}>
            {item.product_name}
            <button
              onClick={() => {
                DeleteFromList(item);
              }}
              style={{
                borderRadius: '15px',
                backgroundColor: 'var(--font-color)',
                padding: '5px 20px',
                color: '#f0ffff',
                marginBottom: '20px',
                fontSize: '16px',
              }}
            >
              Delete from list
            </button>
          </li>
        );
      })}
    </>
  );
}
