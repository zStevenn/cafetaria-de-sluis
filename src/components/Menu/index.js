import { useState } from "react";
import { Title } from "../Text";
import { MenuItem } from "./MenuComponents";
import products from "../../data/products.json";
import { MdOutlineSearch, MdFilterAlt, MdClose } from "react-icons/md";

// Function to display productlist with filter
function ProductList(props) {
	const [products, setProducts] = useState(props.products);
	const [sortDirection, setSortDirection] = useState("asc");
	const [filterText, setFilterText] = useState("");
	const [filterIsVisible, setFilterIsVisible] = useState(false);

	// Allows user to toggle filter
	const handleFilterToggle = () => {
		setFilterIsVisible(!filterIsVisible);
	};

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
		<button
			className="px-1 py-2 rounded-lg bg-primary text-white group-[.h-0]:invisible"
			value={value}
			onClick={handlePresetFilterClick}
		>
			{children}
		</button>
	);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-row gap-4 items-center">
				<label className="relative block">
					<span className="sr-only">Search</span>
					<span className="absolute inset-y-0 left-0 flex items-center pl-2">
						<MdOutlineSearch className="h-5 w-5 text-slate-100" />
					</span>
					<input
						className="placeholder:italic placeholder:text-slate-100 text-white block bg-primary w-full border border-slate-300 rounded-lg py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm"
						placeholder="Zoek gerecht..."
						type="text"
						value={filterText}
						onChange={handleFilterChange}
						name="search"
					/>
				</label>
				{filterIsVisible ? (
					<MdClose className="text-5xl hover:scale-110 transition-all" onClick={handleFilterToggle} />
					) : (
					<MdFilterAlt className="text-5xl hover:scale-110 transition-all" onClick={handleFilterToggle} />
				)}
			</div>
			<div
				className={`flex flex-col gap-4 group transition-all duration-300 ${
					filterIsVisible ? "opacity-100 h-auto" : "opacity-0 h-0"
				}`}
			>
				<FilterButton value="">Alles</FilterButton>
				<FilterButton value="frites">Frites</FilterButton>
				<FilterButton value="milkshake">Milkshakes</FilterButton>
				<FilterButton value="broodje">Broodjes</FilterButton>
				<button className="group-[.h-0]:invisible" onClick={handleSortClick}>
					Sorteer A-Z
				</button>
				<button className="group-[.h-0]:invisible" onClick={handlePriceSortClick}>
					Sorteer op prijs
				</button>
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
		<div className="flex flex-col justify-center px-8 bg-white my-4">
			<Title text={"Menukaart"} className="mb-2 text-primary" />
			<p className="text-primary mb-4">Bekijk hier de gerechten die wij aanbieden. Ons brede assortiment bestaat uit vers gefrituurde snacks, warme broodjes, frites, hamburgers en nog veel meer. Of u nu op zoek bent naar een snelle lunch of een lekkere snack, wij hebben iets voor iedereen!</p>
			<div className="flex flex-col py-4 text-primary">
				{/* Include productlist with filter */}
				<ProductList products={products} />
			</div>
		</div>
	);
}
