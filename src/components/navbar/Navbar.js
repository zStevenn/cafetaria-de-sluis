import React, { Component, useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function NavigationMenu() {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [menuClass, setMenuClass] = React.useState("hidden sm:flex");

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(menuOpen ? "hidden sm:flex" : "absolute p-0 m-0 top-0 left-0 flex justify-center h-[100vh] w-[100vw] bg-green-800 z-10 ");
	}

	return (
		<>
			<div className=''>
				<span onClick={toggleMenu}>
					<MdMenu className="material-icons md-48 md-dark md:hidden" />
				</span>
			</div>
			<div className={menuClass}>
				<ul className='self-center text-lg font-bold sm:flex sm:flex-row sm:flex-wrap sm:text-green-800'>
					<li className='m-2 p-1' onClick={toggleMenu}>
						<MdClose className="material-icons md-48 md-dark sm:hidden" />
					</li>
					<li className="m-2 p-1">
						<a href='#home'>Home</a>
					</li>
					<li className="m-2 p-1">
						<a href='#menu'>Menu</a>
					</li>
					<li className="m-2 p-1">
						<a href='#contact'>Contact</a>
					</li>
					<li className="m-2 p-1">
						<a href='#nieuws'>Nieuws</a>
					</li>
					<li className="m-2 p-1 sm:hidden md:flex">
						<a href='#vacatures'>Vacatures</a>
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
        <div className='bg-white flex flex-col justify-center mx-4'>
          {/* Title */}
          <div className='text-3xl font-bold font-sans text-green-800 text-center my-2'>Cafetaria de Sluis</div>
          {/* Divider */}
          <div className='h-1.5 bg-green-800 my-2 rounded-full'>&nbsp;</div>
          {/* Menu Wrapper */}
          <div className='flex flex-row py-2 justify-evenly sm:justify-between'>
            {/* Menu */}
            <NavigationMenu />
            {/* Order Button */}
            <a
              href='https://www.e-food.nl/driebergen/cafeteria-de-sluis'
              className='transition-all h-12 w-32 px-4 py-2 bg-white text-center rounded-lg text-green-800 border-solid border-2 border-current font-bold text-lg hover:bg-green-800 hover:text-white'>
              Bestellen
            </a>
          </div>
        </div>
      </div>
		);
	}
}

export default Navbar;
