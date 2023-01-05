import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries, GiKnifeFork } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { Subtitle, Title } from "../Text";

// Shortcut of available categories
export function Category() {
	return (
		<div className="flex flex-col bg-primary text-white fill-white">
			<Title text={"Heerlijke gerechten"} className="my-4" />
			<ul className="flex flex-col sm:flex-row justify-evenly lg:justify-center my-4">
				<li className="flex justify-center items-center content-center group my-6 sm:my-0 lg:mx-8">
					<a
						className="flex flex-col items-center group-hover:scale-110 transition-all"
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/burgers/sluis-burgers"
					>
						<FaHamburger className="text-4xl" />
						<Subtitle text={"Sluisburgers"} />
					</a>
				</li>
				<li className="flex justify-center items-center content-center group my-6 sm:my-0 lg:mx-8">
					<a
						className="flex flex-col items-center group-hover:scale-110 transition-all"
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/frites"
					>
						<GiFrenchFries className="text-4xl" />
						<Subtitle text={"Frietjes"} />
					</a>
				</li>
				<li className="flex justify-center items-center content-center group my-6 sm:my-0 lg:mx-8">
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

// White banner with order options: take away, delivery, eat in
export function OrderOptions() {
	return (
		<div className="flex flex-col flex-nowrap bg-primary text-white justify-evenly py-4">
			<Title text={"Bestelopties"} className="text-2xl text-white py-4" />
			<div className="flex flex-row flex-nowrap justify-evenly items-center pb-4">
				<div className="flex flex-col flex-nowrap items-center">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Bezorgen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Afhalen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center">
					<GiKnifeFork className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Hier eten</h2>
				</div>
			</div>
		</div>
	);
}
