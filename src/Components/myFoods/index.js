import List from "../List/List.js";
import { useAuth0 } from "@auth0/auth0-react";

export default function Myfoods(){
    const { isAuthenticated , loginWithRedirect} = useAuth0();
    



return isAuthenticated ? <List/> :<><h1>You need to be logged in to access this page</h1>
                                       <button onClick={loginWithRedirect}>Login</button></>

}