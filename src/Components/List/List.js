import {useEffect, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const url = process.env.REACT_APP_SERVER_URL ?? "http://localhost:3010";
export default function List(){

    const [array,setArray] =useState([])
    const { user } = useAuth0()
    const {sub} = user

    async function GetList(){
    const response = await fetch(`${url}/api/userproducts/${sub}`);
			const data = await response.json();
			const payload = data.payload;
            setArray(payload)
            }

            useEffect(()=>{GetList()},[])
            
    return (<><h1>Hello world its me margaret</h1>
            {array.map((item,index)=>{return <li key={index}>{item.product_name}</li>})}
            </>)
            
            
            
    }        
