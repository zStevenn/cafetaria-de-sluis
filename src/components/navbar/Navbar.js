import React, { Component, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

function NavigationMenu() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [menuClass, setMenuClass] = React.useState("hidden sm:flex");

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(
			menuOpen
				? "hidden sm:flex"
				: "absolute p-0 m-0 top-0 left-0 flex justify-center h-[100vh] w-[100vw] bg-green-800 z-10 "
		);
	}

	return (
		<>
			<div className="">
				<span onClick={toggleMenu}>
					<MdMenu className="material-icons md-48 md-dark md:hidden" />
				</span>
			</div>
			<div className={menuClass}>
				<ul className="self-center text-lg font-bold sm:flex sm:flex-row sm:flex-wrap sm:text-green-800">
					<li className="m-2 p-1" onClick={toggleMenu}>
						<MdClose className="material-icons md-48 md-dark sm:hidden" />
					</li>
					<li className="m-2 p-1">
						<Link to="/">Home</Link>
					</li>
					<li className="m-2 p-1">
						<Link to="/menu">Menu</Link>
					</li>
					<li className="m-2 p-1">
						<Link to="/contact">Contact</Link>
					</li>
					<li className="m-2 p-1">
						<Link to="/nieuws">Nieuws</Link>
					</li>
					<li className="m-2 p-1 sm:hidden md:flex">
						<Link to="/vacatures">Vacatures</Link>
					</li>
				</ul>
			</div>
		</>
	);
}

class Navbar extends Component {
	render() {
		return (
			// Navbar
			<div classname="relative">
				<div className="bg-white flex flex-col justify-center mx-4">
					{/* Title */}
					<div className="text-3xl font-bold font-sans text-green-800 text-center my-2">Cafetaria de Sluis</div>
					{/* Divider */}
					<div className="h-1.5 bg-green-800 my-2 rounded-full">&nbsp;</div>
					{/* Menu Wrapper */}
					<div className="flex flex-row py-2 justify-evenly sm:justify-between">
						{/* Menu */}
						<NavigationMenu />
						{/* Order Button */}
						<a
							href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
							className="transition-all h-12 w-32 px-4 py-2 bg-white text-center rounded-lg text-green-800 border-solid border-2 border-current font-bold text-lg hover:bg-green-800 hover:text-white"
						>
							Bestellen
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
