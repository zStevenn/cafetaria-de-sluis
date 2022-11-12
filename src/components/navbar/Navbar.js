import "./Navbar.css";
import React, { Component, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";


function NavbarLogo() {
	return (
		<div className="navbar__logo prevent-select">
			<a href="#home">
				<img
					src="https://www.cafetariadesluis.nl/wp-content/uploads/2020/02/cropped-logo_png.png"
					alt="Cafetaria de Sluis"
				/>
			</a>
		</div>
	);
}

function HeaderMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClass, setMenuClass] = useState("navbar__menu-list hidden");
	

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(menuOpen ? "navbar__menu-list hidden" : "navbar__menu-list open");
	}

	return (
		<div className="navbar__menu">
			<div className="navbar__menu-svg" onClick={toggleMenu}>
				<MdMenu className="material-icons md-48 md-light" />
			</div>
			<div className={menuClass}>
				<ul className="menu__list">
					<li className="navbar__menu-svg" onClick={toggleMenu}>
						<MdClose className="material-icons md-48 md-light" />
					</li>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#menu">Menu</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href="#nieuws">Nieuws</a>
					</li>
					<li>
						<a href="#vacatures">Vacatures</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<NavbarLogo />
				<div className="navbar__menu-wrapper">
					<HeaderMenu />
					<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" className="btn btn__order">
						Bestellen
					</a>
				</div>
			</nav>
		);
	}
}

export default Navbar;