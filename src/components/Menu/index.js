import { Title } from "../Text";
import { MenuItem, MenuSubheader } from "./MenuComponents";

export function Menu() {
	return (
		<div className="flex flex-col justify-center sm:items-center pl-4 sm:pl-0 bg-primary">
			<Title text={"Menukaart"} />
			<div className="flex flex-col py-4">
				<div className="text-white my-2">
					<MenuSubheader name={"Patat Frites"} />
					<MenuItem name={"Patat mayonaise"} price={"9.95"} />
					<MenuItem name={"Patat curry"} price={"9.95"} />
					<MenuItem name={"Patat speciaal"} price={"9.95"} />
					<MenuItem name={"Patat oorlog"} price={"9.95"} />
				</div>
				<div className="text-white my-2">
					<MenuSubheader name={"Snacks"} />
					<MenuItem name={"Kroket"} price={"9.95"} />
					<MenuItem name={"Frikandel"} price={"9.95"} />
					<MenuItem name={"Kaassoufle"} price={"9.95"} />
					<MenuItem name={"Kipcorn"} price={"9.95"} />
				</div>
				<div className="text-white my-2">
					<MenuSubheader name={"Milkshakes"} />
					<MenuItem name={"Aardbei"} price={"9.95"} />
					<MenuItem name={"Banaan"} price={"9.95"} />
					<MenuItem name={"Chocolade"} price={"9.95"} />
					<MenuItem name={"Vanille"} price={"9.95"} />
				</div>
			</div>
		</div>
	);
}
