import "./App.css";

// Import components
import Header from "./header/Header";
import ContentOrder from "./content/ContentOrder";
import ContentReview from "./content/ContentReview";
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
		</div>
	);
}

export default App;
