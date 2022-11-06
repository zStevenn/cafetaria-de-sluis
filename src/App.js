import "./App.css";

// Import components
import Header from "./header/Header";
import ContentOrder from "./content/ContentOrder";
import ContentReview from "./content/ContentReview";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				<ContentOrder />
        <ContentReview />
			</div>
		</div>
	);
}

export default App;
