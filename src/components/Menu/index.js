import { useState } from "react";
import { Title } from "../Text";
import { MenuItem } from "./MenuComponents";
import products from "../../data/products.json";

// Function to display productlist with filter
function ProductList(props) {
	const [products, setProducts] = useState(props.products);
	const [sortDirection, setSortDirection] = useState("asc");
	const [filterText, setFilterText] = useState("");

	// Allows user to filter products from A-Z or Z-A
	const handleSortClick = () => {
		setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		setProducts(
			[...products].sort((a, b) => {
				if (a.productnaam < b.productnaam) {
					return sortDirection === "asc" ? -1 : 1;
				}
				if (a.productnaam > b.productnaam) {
					return sortDirection === "asc" ? 1 : -1;
				}
				return 0;
			})
		);
	};

	// Allows user to filter products on price
	const handlePriceSortClick = () => {
		setSortDirection(sortDirection === "asc" ? "desc" : "asc");
		setProducts(
			[...products].sort((a, b) => {
				if (a.prijs < b.prijs) {
					return sortDirection === "asc" ? -1 : 1;
				}
				if (a.prijs > b.prijs) {
					return sortDirection === "asc" ? 1 : -1;
				}
				return 0;
			})
		);
	};

	// Allows user to filter by input
	const handleFilterChange = (event) => {
		setFilterText(event.target.value);
		setProducts(
			props.products.filter((product) => product.productnaam.toLowerCase().includes(event.target.value.toLowerCase()))
		);
	};

	// Allows user to filter by preset buttons
	const handlePresetFilterClick = (event) => {
		setFilterText(event.target.value);
		setProducts(
			props.products.filter((product) => product.productnaam.toLowerCase().includes(event.target.value.toLowerCase()))
		);
	};

	// Button component for preset filter
	const FilterButton = ({ value, children }) => (
		<button className="px-2 py-3 mr-1.5 rounded-lg bg-white text-primary hover:transition-all hover:scale-110" value={value} onClick={handlePresetFilterClick}>
			{children}
		</button>
	);

	return (
		<div className="flex flex-col">
			<div className="mb-4">
				<input
					className="rounded-lg bg-white text-primary px-1 py-2"
					type="text"
					value={filterText}
					onChange={handleFilterChange}
					placeholder="Zoek gerecht"
				/>
			</div>
			<div className="mb-4">
				<button className="hover:scale-110 transition-all" onClick={handleSortClick}>Sorteer A-Z</button>
				<button className="ml-6 hover:scale-110 transition-all" onClick={handlePriceSortClick}>
					Sorteer op prijs
				</button>
			</div>
			<div className="mb-4">
				<FilterButton value="">Alles</FilterButton>
				<FilterButton value="frites">Frites</FilterButton>
				<FilterButton value="milkshake">Milkshakes</FilterButton>
				<FilterButton value="broodje">Broodjes</FilterButton>
			</div>
			<div>
				{products
					.filter((product) => product.productnaam.toLowerCase().includes(filterText.toLowerCase()))
					.map((product) => (
						<MenuItem key={product.productnummer} name={product.productnaam} price={product.prijs} />
					))}
			</div>
		</div>
	);
}

export function Menu() {
	return (
		<div className="flex flex-col justify-center sm:items-center pl-4 sm:pl-0 bg-primary">
			<Title text={"Menukaart"} className="my-4" />
			<div className="flex flex-col py-4 text-white my-2">
				{/* Include productlist with filter */}
				<ProductList products={products} />
			</div>
		</div>
	);
}
