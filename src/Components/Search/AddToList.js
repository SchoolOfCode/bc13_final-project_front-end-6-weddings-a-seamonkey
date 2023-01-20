import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function AddToList ({searchResult}){
    const { user } = useAuth0()
    const {sub} = user

    async function handleClick (){
        console.log(sub)
        console.log(searchResult)

    }

    return (
        <div className="add-to-list">
            <button onClick={handleClick}>Add to list</button>
        </div>
    )

}