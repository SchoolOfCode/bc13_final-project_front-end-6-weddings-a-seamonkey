import "./App.css";
import TemporaryDrawer from "../../Navigation/menu/index.js";
import { Outlet } from "react-router";


function App() {
	return (
		<>
		<div className="Menu">
			<TemporaryDrawer/>
		</div>
		<div className="App">
			
			<Outlet/>
		</div>
		</>
	);
}

export default App;
