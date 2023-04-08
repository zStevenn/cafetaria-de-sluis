import { NavLink } from "react-router-dom"
import { MdMenu, MdClose } from "react-icons/md"
import { useState } from "react"
import { Link } from "react-router-dom"

function DesktopNavigationLink({ to, children }) {
	return (
		<li className="flex">
			<NavLink
				to={to}
				className="m-2 p-1 text-white transition-all text-lg font-bold font-sans"
			>
				{children}
			</NavLink>
		</li>
	)
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
	)
}

function MobileNavigationLink({ to, children }) {
	return (
		<NavLink to={to} className="m-2 p-1 text-white text-3xl font-bold">
			{children}
		</NavLink>
	)
}

export function MobileNavigationMenu() {
	const [menuOpen, setMenuOpen] = useState(false)

	function toggleMenu() {
		setMenuOpen(!menuOpen)
	}

	return (
		<>
			<span onClick={toggleMenu}>
				<MdMenu className="text-5xl text-white" />
			</span>
			<div
				className={`fixed p-0 m-0 top-0 left-0 px-8 h-screen w-screen bg-primary z-10 text-white transition-all duration-500 ${
					menuOpen
						? "opacity-100 translate-none"
						: "opacity-30 -translate-x-full"
				}	}`}
			>
				<div className="text-3xl font-bold text-white text-center my-2">
					<Link to="/">Cafetaria de Sluis</Link>
				</div>
				<ul className="flex flex-col justify-center">
					<li onClick={toggleMenu} className="py-2">
						<MdClose className="text-5xl text-white" />
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
						<MobileNavigationLink to="/vacatures">
							Vacatures
						</MobileNavigationLink>
					</li>
				</ul>
			</div>
		</>
	)
}
