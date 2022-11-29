import React, { Component, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { NavLink } from "react-router-dom";

function NavigationMenu() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [menuClass, setMenuClass] = React.useState("hidden sm:flex");

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(
			menuOpen
				? "hidden sm:flex"
				: "absolute p-0 m-0 top-0 left-0 flex justify-center h-[100vh] w-[100vw] bg-green z-10 text-white"
		);
	}

	return (
		<>
			<div className="">
				<span onClick={toggleMenu}>
					<MdMenu className="material-icons md-48 md-dark sm:hidden" />
				</span>
			</div>
			<div className={menuClass}>
				<ul  className="self-center text-lg font-bold sm:flex sm:flex-row sm:flex-wrap text-green-800">
					<li onClick={toggleMenu} className="m-2 p-1" >
						<MdClose className="material-icons md-48 md-dark sm:hidden" />
					</li>
					<li className="m-2 p-1">
						<NavLink to="/">Home</NavLink>
					</li>
					<li className="m-2 p-1">
						<NavLink to="/menu">Menu</NavLink>
					</li>
					<li className="m-2 p-1">
						<NavLink to="/contact">Contact</NavLink>
					</li>
					<li className="m-2 p-1 sm:hidden md:flex">
						<NavLink to="/nieuws">Nieuws</NavLink>
					</li>
					<li className="m-2 p-1">
						<NavLink to="/vacatures">Vacatures</NavLink>
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
							className="btn-primary"
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
