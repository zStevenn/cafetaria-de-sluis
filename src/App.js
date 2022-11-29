import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Contact } from "./pages/Contact";
import { News } from "./pages/News";
import { Vacatures } from "./pages/Vacatures";
import { NotFound } from "./pages/NotFound";

function App() {
	return (
		<>
			<div className="App">
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

export default App;
