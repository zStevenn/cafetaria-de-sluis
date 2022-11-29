import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</>
	);
}

export default App;
