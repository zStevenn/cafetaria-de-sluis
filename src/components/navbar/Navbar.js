import "./Navbar.css";
import React, { Component, useState } from "react";

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

	const HamburgerIcon = (
		<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
			<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
		</svg>
	);
	
	const CrossIcon = (
		<svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="50" height="50">
			<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
		</svg>
	);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(menuOpen ? "navbar__menu-list hidden" : "navbar__menu-list open");
	}

	return (
		<div className="navbar__menu">
			<div className="navbar__menu-svg" onClick={toggleMenu}>
				{HamburgerIcon}
			</div>
			<div className={menuClass}>
				<ul className="menu__list">
					<li className="navbar__menu-svg" onClick={toggleMenu}>
						{CrossIcon}
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