import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";
export function AddToList ({productName}){
    const { user } = useAuth0()
    const {sub} = user

    async function handleClick (){
        console.log(sub)
        console.log(productName)
        const response = await fetch(`${url}/api/userproducts/${sub}/${productName}`,{method:'POST'})
        console.log(response);
    }

    return (
        <div className="add-to-list">
            <button onClick={handleClick}>Add to list</button>
        </div>
    )

}