import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";

function DesktopNavigationLink({ to, children }) {
	return (
		<li className="flex">
			<NavLink to={to} className="m-2 p-1 text-white hover:scale-125 hover:transition-all text-lg font-bold font-sans">
				{children}
			</NavLink>
		</li>
	);
}

export function DesktopNavigationMenu() {
	return (
		<ul className="flex flex-row flex-nowrap">
			<DesktopNavigationLink to="/">Home</DesktopNavigationLink>
			<DesktopNavigationLink to="/menu">Menu</DesktopNavigationLink>
			<DesktopNavigationLink to="/contact">Contact</DesktopNavigationLink>
			<DesktopNavigationLink to="/nieuws">Nieuws</DesktopNavigationLink>
			<DesktopNavigationLink to="/vacatures">Vacatures</DesktopNavigationLink>
		</ul>
	);
}

function MobileNavigationLink({ to, children }) {
	return (
		<NavLink to={to} className="m-2 p-1 text-white text-3xl font-bold">
			{children}
		</NavLink>
	);
}

export function MobileNavigationMenu() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuClass, setMenuClass] = useState("hidden");

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		setMenuClass(
			menuOpen
				? "hidden"
				: "fixed p-0 m-0 top-0 left-0 flex justify-center h-[100vh] w-[100vw] bg-primary z-10 text-white"
		);
	}

	return (
		<>
			<>
				<span onClick={toggleMenu}>
					<MdMenu className="text-5xl text-white hover:scale-110 transition-all" />
				</span>
			</>
			<div className={menuClass}>
				<ul className="flex flex-col justify-center">
					<li onClick={toggleMenu} className="py-2">
						<MdClose className="text-5xl text-white hover:scale-110 transition-all" />
					</li>
					<li onClick={toggleMenu} className="py-2">
						<MobileNavigationLink to="/">Home</MobileNavigationLink>
					</li>
					<li onClick={toggleMenu} className="py-2">
						<MobileNavigationLink to="/menu">Menu</MobileNavigationLink>
					</li>
					<li onClick={toggleMenu} className="py-2">
						<MobileNavigationLink to="/contact">Contact</MobileNavigationLink>
					</li>
					<li onClick={toggleMenu} className="py-2">
						<MobileNavigationLink to="/nieuws">Nieuws</MobileNavigationLink>
					</li>
					<li onClick={toggleMenu} className="py-2">
						<MobileNavigationLink to="/vacatures">Vacatures</MobileNavigationLink>
					</li>
				</ul>
			</div>
		</>
	);
}
