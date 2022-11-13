import "./App.css";

// Import components
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/content/HeroSection";
import ContentReview from "./components/content/ContentReview";
import Footer from "./components/content/Footer";
import Products from "./components/content/Products";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="content__wrapper">
				<HeroSection />
				<ContentReview />
				<Products />
			</div>
			<Footer />
		</div>
	);
}

export default App;
