import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Route from "./routes/Route"
import ContentWrapper from "./components/ContentWrapper"

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
				<ContentWrapper>
					<Route />
				</ContentWrapper>
				<Footer />
			</div>
		</>
	);
}

export default App
