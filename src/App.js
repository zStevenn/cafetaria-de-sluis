import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Route from "./routes/Route"

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
				<Route />
				<Footer />
			</div>
		</>
	);
}

export default App
