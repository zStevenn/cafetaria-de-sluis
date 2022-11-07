import "./App.css";

// Import components
import Header from "./components/layout/Header";
import ContentOrder from "./components/content/ContentOrder";
import ContentReview from "./components/content/ContentReview";
import Footer from "./components/content/Footer";
import Article from "./components/content/Article";

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
