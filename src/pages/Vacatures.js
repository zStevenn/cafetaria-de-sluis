import { MdDeliveryDining, MdArrowForward } from "react-icons/md";
import { Title } from "../components/Text";

export default function Vacatures() {
	return (
		<div className="bg-primary">
			<Title text={"Vacatures"} />
			<div className="flex flex-row justify-between items-center mx-8 p-4 bg-white rounded-lg">
				<div className="flex flex-col">
					<span className="text-lg font-semibold">Fietskoerier M/V</span>
					<span>15 jaar en ouder</span>
					<span>17:00 - 20:00</span>
					<span>2 keer per week</span>
				</div>
				<div className="flex flex-col hover:scale-125 transition-all">
					Solliciteer
					<MdArrowForward className="text-5xl" />
				</div>
			</div>
			<div className="flex flex-col items-center justify-center py-8">
				<MdDeliveryDining className="text-6xl text-white" />
				<h2 className="text-center text-2xl font-bold text-white">Geen vacatures</h2>
				<p className="text-center text-lg text-white">Helaas zijn er momenteel geen vacatures beschikbaar.</p>
			</div>
		</div>
	);
}
