import { MobileNavigationMenu, DesktopNavigationMenu } from "./NavComponents";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Navbar() {
	const { width } = useWindowDimensions();

	return (
		// Navbar
		<div className="bg-green flex flex-col justify-center">
			{/* Title */}
			<div className="text-3xl font-bold font-sans text-white text-center my-2">Cafetaria de Sluis</div>
			{/* Divider */}
			<div className="flex flex-row my-2 h-[.5em] bg-white w-10/12 self-center rounded-full"/>
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
