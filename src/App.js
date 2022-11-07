import "./App.css";

// Import components
import Header from "./header/Header";
import ContentOrder from "./content/ContentOrder";
import ContentReview from "./content/ContentReview";
import Footer from "./content/Footer";
import Article from "./content/Article";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				<ContentOrder />
				<ContentReview />
				<Article />
			</div>
			<Footer />
		</div>
	);
}

export default App;
