import "./App.css";

// Import components
import Header from "./components/navbar/Navbar";
import Banner from "./components/content/Banner";
import ContentReview from "./components/content/ContentReview";
import Footer from "./components/content/Footer";
import Products from "./components/content/Products";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				{/* <Banner /> */}
				{/* <ContentReview /> */}
				{/* <Products /> */}
			</div>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
