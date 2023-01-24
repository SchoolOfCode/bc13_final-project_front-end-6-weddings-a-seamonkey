import List from "../List/List.js";
import { useAuth0 } from "@auth0/auth0-react";

import "./myFoods.css";


export default function Myfoods(){
    const { isAuthenticated , loginWithRedirect} = useAuth0();
    




return isAuthenticated ? <List/> :<><h1 className="h1">You need to be logged in to access this page</h1>
                                       <button className="auth-button" onClick={loginWithRedirect}>Login</button></>


}