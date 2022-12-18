import { MobileNavigationMenu, DesktopNavigationMenu } from "./NavComponents";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { SecondaryButton as Button } from "../Button";

export default function Navbar() {
	const { width } = useWindowDimensions();

	return (
		// Navbar
		<div className="bg-primary flex flex-col justify-center p-2 shadow-md">
			{/* Title */}
			<div className="text-3xl font-bold text-white text-center my-2">Cafetaria de Sluis</div>
			{/* Menu Wrapper */}
			<div className="flex flex-row py-2 justify-evenly">
				{/* Menu */}
				{width > 640 ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
				{/* Order Button */}
				<Button to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">Bestel Nu</Button>
			</div>
		</div>
	);
}
