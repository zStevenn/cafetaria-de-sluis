import "./Header.css";
import React, { Component } from "react";
import { useState } from "react";

function HeaderLogo() {
	return (
		<div className="header__logo prevent-select">
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
	const [menuClass, setMenuClass] = useState("header__menu");
	const [menuSvgOpen, setMenuSvgOpen] = useState(false);
	const [menuSvgClass, setMenuSvgClass] = useState("header__menu-svg");

	const MenuClosedIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
			<path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
		</svg>
	);
	
	const MenuOpenIcon = (
		<svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="50" height="50">
			<path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
		</svg>
	);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuSvgOpen(!menuSvgOpen);
		setMenuClass(menuOpen ? "header__menu" : "header__menu open");
		setMenuSvgClass(menuSvgOpen ? "header__menu-svg" : "header__menu-svg open");
	}

	return (
		<div className={menuClass}>
			<div className={menuSvgClass} onClick={toggleMenu}>
				{menuSvgOpen ? MenuOpenIcon : MenuClosedIcon}
			</div>
			<div className="header__menu-item">
				<ul>
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#menu">Menu</a>
					</li>
					<li>
						<a href="#order">Bestellen</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

class Header extends Component {
	render() {
		return (
			<div className="header">
				<HeaderLogo />
				<HeaderMenu />
			</div>
		);
	}
}

export default Header;
