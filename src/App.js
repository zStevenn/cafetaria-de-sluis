import "./App.css";

// Import components
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/content/HeroSection";
import CTASection from "./components/content/CTASection";
import ProductHighlights from "./components/content/ProductHighlights";
import Review from "./components/content/Review";

function App() {
	return (
		<div className="App">
			<Navbar />
			<HeroSection />
			<CTASection />
			<ProductHighlights />
			<Review />
		</div>
	);
}

export default App;
