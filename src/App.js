import Navbar from "./components/navbar/Navbar"
import { Route, Routes } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { Menu } from "./components/pages/Menu"
import { Contact } from "./components/pages/Contact"
import { News } from "./components/pages/News"
import { Vacatures } from "./components/pages/Vacatures"
import { NotFound } from "./components/pages/NotFound"

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/nieuws" element={<News />} />
					<Route path="/vacatures" element={<Vacatures />} />
					{/* Vacatures nest example */}
					{/* <Route path="vacatures">
						<Route index element={<Vacatures />} />
						<Route path=":vacatureId" element={<Vacatures />} />
						<Route path="*" element={<NotFound />} />
					</Route> */}
					{/* Fallback Route if link doesn't exist */}
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</>
	);
}

export default App
