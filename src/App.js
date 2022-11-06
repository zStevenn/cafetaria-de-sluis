import "./App.css";

// Import header component
import Header from "./header/Header";
// Import content order component
import ContentOrder from "./content/ContentOrder";

function App() {
	return (
		<div className="App">
			<Header />
			<div className="content__wrapper">
				<ContentOrder />
			</div>
		</div>
	);
}

export default App;
