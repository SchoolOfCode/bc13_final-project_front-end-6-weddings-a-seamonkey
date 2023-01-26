import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./List.css";
import logo from "../../Images/logo.png";

const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";
export default function List() {
	const [array, setArray] = useState([]);
	const { user } = useAuth0();
	const { sub } = user;

	async function DeleteFromList(item) {
		const response = await fetch(
			`${url}/api/userproducts/${sub}/${item.product_name}`,
			{ method: "DELETE" }
		);
		console.log(response);
		console.log(sub);
		console.log(item.product_name);
		GetList();
	}

	// Query above deletes all products with same name ^^

	async function GetList() {
		const response = await fetch(`${url}/api/userproducts/${sub}`);
		const data = await response.json();
		const payload = data.payload;
		console.log(payload, "this is the list payload");
		setArray(payload);
	}

	useEffect(() => {
		GetList();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			<h1>My Foods</h1>
			{array.length === 0 ? (
				<h3>Scanned foods can be added to this list</h3>
			) : (
				<div className="list-items">
					{array.map((item, index) => {
						return (
							<ul>
								<li key={index}>
									<div className="list-item">
										<img
											className="list-image"
											src={logo}
											alt="foodmap-logo"
										></img>
										<p className="product-name">{item.product_name}</p>
									</div>
									<button
										className="delete-button"
										onClick={() => {
											DeleteFromList(item);
										}}
									>
										Delete from list
									</button>
								</li>
							</ul>
						);
					})}
				</div>
			)}
		</>
	);
}
