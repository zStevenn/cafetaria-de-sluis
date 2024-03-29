import { MobileNavigationMenu, DesktopNavigationMenu } from "./NavComponents"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { ExternalSecondaryButton as Button } from "../Button"
import { Link } from "react-router-dom"

export default function Navbar() {
	const { width } = useWindowDimensions()

	return (
		// Navbar
		<nav className="bg-primary flex flex-col justify-center px-8 shadow shadow-primary">
			{/* Title */}
			<div className="text-3xl font-bold text-neutral-100 text-center my-2">
				<Link to="/">Cafetaria de Sluis</Link>
			</div>
			{/* Menu Wrapper */}
			<div className="flex flex-row py-2 justify-between md:justify-center">
				{/* Menu */}
				{width > 768 ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
				{/* Order Button */}
				<Button to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
					Bestel Nu
				</Button>
			</div>
		</nav>
	)
}
