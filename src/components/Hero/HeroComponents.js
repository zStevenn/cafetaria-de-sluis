import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { Subtitle, Title } from "../Text";

export function Category() {
	return (
		<div className="flex flex-col bg-primary text-white fill-white">
			<Title text={"Heerlijke gerechten"} className="my-10" />
			<ul className="flex flex-row justify-evenly mb-10">
				<li className="flex justify-center items-center content-center group">
					<a
						className="flex flex-col items-center group-hover:scale-110 transition-all"
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/burgers/sluis-burgers"
					>
						<FaHamburger className="text-4xl" />
						<Subtitle text={"Sluisburgers"} />
					</a>
				</li>
				<li className="flex justify-center items-center content-center group">
					<a className="flex flex-col items-center group-hover:scale-110 transition-all" href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/frites">
						<GiFrenchFries className="text-4xl" />
						<Subtitle text={"Frietjes"} />
					</a>
				</li>
				<li className="flex justify-center items-center content-center group">
					<a
						className="flex flex-col items-center group-hover:scale-110 transition-all"
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/ijs--milkshakes/milkshakes"
					>
						<BsCupStraw className="text-4xl" />
						<Subtitle text={"Milkshakes"} />
					</a>
				</li>
			</ul>
		</div>
	);
}
