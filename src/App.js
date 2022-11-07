import "./App.css";

// Import components
import Header from "./header/Header";
import ContentOrder from "./content/ContentOrder";
import ContentReview from "./content/ContentReview";
import Footer from "./content/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				<ContentOrder />
				<ContentReview />
			</div>
			<Footer />
		</div>
	);
}

export default App;
