import { MobileNavigationMenu, DesktopNavigationMenu } from "./NavComponents";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Navbar() {
	const { width } = useWindowDimensions();

	return (
		// Navbar
		<div className="bg-green flex flex-col justify-center">
			{/* Title */}
			<div className="text-3xl font-bold font-sans text-white text-center my-2">Cafetaria de Sluis</div>
			{/* Menu Wrapper */}
			<div className="flex flex-row py-2 justify-evenly">
				{/* Menu */}
				{width > 640 ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
				{/* Order Button */}
				<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" className="btn-secondary">
					Bestellen
				</a>
			</div>
		</div>
	);
}
