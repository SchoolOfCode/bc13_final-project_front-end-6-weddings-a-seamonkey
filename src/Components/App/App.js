import "./App.css";
import TemporaryDrawer from "../../Navigation/menu/index.js";
import { Outlet } from "react-router";
import FixedBottomNavigation from "../../Navigation/bottombar/index.js";


function App() {
	return (
		<>
		<div className="Menu">
			<h1 className="title">FoodMap</h1>
			<TemporaryDrawer className="button"/>
		</div>
		<div className="App">	
			<Outlet/>
		</div>
		<div className="bar">
		<FixedBottomNavigation/>
		</div>
		</>
	);
}

export default App;
