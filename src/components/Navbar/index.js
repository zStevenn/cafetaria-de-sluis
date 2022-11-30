import React from "react";
import { MobileNavigationMenu, DesktopNavigationMenu } from "./NavComponents";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Navbar() {
	const { width } = useWindowDimensions();

	return (
		// Navbar
		<div className="bg-white flex flex-col justify-center mx-4">
			{/* Title */}
			<div className="text-3xl font-bold font-sans text-green text-center my-2">Cafetaria de Sluis</div>
			{/* Divider */}
			<div className="h-1.5 bg-green my-2 rounded-full">&nbsp;</div>
			{/* Menu Wrapper */}
			<div className="flex flex-row py-2 justify-evenly">
				{/* Menu */}
        {width > 640 ? <DesktopNavigationMenu /> : <MobileNavigationMenu />}
				{/* Order Button */}
				<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis" className="btn-primary">
					Bestellen
				</a>
			</div>
		</div>
	);
}
