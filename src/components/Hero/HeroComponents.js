import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";

function ImageWithText(props) {
	return (
		<div className="flex flex-row flex-nowrap mx-6 sm:justify-center my-2">
			<a className="flex-1 max-w-xs" href={props.href}>
				<img className="w-full rounded-3xl" src={props.src} alt="alt" />
			</a>
			<div className="self-center text-white text-center text-lg flex-1 max-w-xs">
				<span className="flex justify-center">{props.icon}</span>
				<p>{props.text}</p>
			</div>
		</div>
	);
}

function ReversedImageWithText(props) {
	return (
		<div className="flex flex-row flex-nowrap mx-6 sm:justify-center my-2">
			<div className="self-center text-white text-center text-lg flex-1 max-w-xs">
				<span className="flex justify-center">{props.icon}</span>
				<p>{props.text}</p>
			</div>
			<a className="flex-1 max-w-xs" href={props.href}>
				<img className="w-full rounded-3xl" src={props.src} alt="placeholder" />
			</a>
		</div>
	);
}

export function AssortmentExamples() {
	return (
		<div className="flex flex-col bg-primary py-4 sm:py-6 md:py-8">
			<p className="text-white text-lg sm:text-2xl md:text-3xl font-semibold sm:text-bold text-center mb-4">
				Heerlijke gerechten
			</p>
			<ImageWithText
				href={"/"}
				icon={<FaHamburger className="text-3xl fill-white" />}
				text={"Sluisburgers"}
				src={"https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg"}
			/>
			<ReversedImageWithText
				href={"/"}
				icon={<GiFrenchFries className="text-3xl fill-white" />}
				text={"Patat Frites"}
				src={"https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg"}
			/>
			<ImageWithText
				href={"/"}
				icon={<BsCupStraw className="text-3xl fill-white" />}
				text={"Milkshakes"}
				src={"https://loremflickr.com/cache/resized/65535_51976730205_07c53e56b5_b_600_600_nofilter.jpg"}
			/>
		</div>
	);
}
