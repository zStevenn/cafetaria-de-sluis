import { Title } from "../Text";
import { MenuItem, MenuSubheader } from "./MenuComponents";
import products from "../../data/products.json";

export function Menu() {
	return (
		<div className="flex flex-col justify-center sm:items-center pl-4 sm:pl-0 bg-primary">
			<Title text={"Menukaart"} />
			<div className="flex flex-col py-4">
				<div className="text-white my-2">
				{products.map(product => (
					<MenuItem key={product.productnummer} name={product.productnaam} price={product.prijs} />
      ))}
				</div>
			</div>
		</div>
	);
}
