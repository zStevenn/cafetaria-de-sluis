import { MdDeliveryDining, MdArrowForward } from "react-icons/md";
import { Title } from "../components/Text";

export default function Vacatures() {
	return (
		<div className="bg-primary">
			<Title text={"Vacatures"} className="py-4" />
			<div className="flex flex-row justify-between items-center mx-8 p-4 bg-neutral-100 rounded-lg">
				<div className="flex flex-col">
					<p className="text-lg font-semibold">Fietskoerier M/V</p>
					<p>15 jaar en ouder</p>
					<p>17:00 - 20:00</p>
					<p>2 keer per week</p>
				</div>
				<div className="flex flex-col hover:scale-125 transition-all">
					Solliciteer
					<MdArrowForward className="text-5xl" />
				</div>
			</div>
			<div className="flex flex-col items-center justify-center py-8">
				<MdDeliveryDining className="text-6xl text-neutral-100" />
				<h2 className="text-center text-2xl font-bold text-neutral-100">Geen vacatures</h2>
				<p className="text-center text-lg text-neutral-100">Helaas zijn er momenteel geen vacatures beschikbaar.</p>
			</div>
		</div>
	);
}
