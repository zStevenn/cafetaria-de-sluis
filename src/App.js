import "./App.css";

// Import components
import Header from "./components/layout/Header";
import Banner from "./components/content/Banner";
import ContentReview from "./components/content/ContentReview";
import Footer from "./components/content/Footer";
import Products from "./components/content/Products";
import Newsarticle from "./components/content/Newsarticle";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				<Banner />
				<ContentReview />
				<Products />
				<Newsarticle />
			</div>
			<Footer />
		</div>
	);
}

export default App;
