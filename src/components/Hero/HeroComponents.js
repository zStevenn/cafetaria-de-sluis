import { FaHamburger } from "react-icons/fa";
import { GiFrenchFries, GiKnifeFork } from "react-icons/gi";
import { BsCupStraw } from "react-icons/bs";
import { MdDeliveryDining } from "react-icons/md";
import { Subtitle, Title } from "../Text";
import ArticleImg01 from "../../assets/img/static/article01.jpg";
import ArticleImg02 from "../../assets/img/static/article02.jpg";
import ArticleImg03 from "../../assets/img/static/article03.jpg";

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
		<div className="flex flex-col flex-nowrap bg-primary text-white justify-evenly py-4 px-8">
			<Title text={"Bestelopties"} className="text-white py-4" />
			<div className="flex flex-row flex-nowrap gap-4 justify-evenly items-center pb-4">
				<div className="flex flex-col flex-nowrap items-center hover:scale-110 transition-all">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Bezorgen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center hover:scale-110 transition-all">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Afhalen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center hover:scale-110 transition-all">
					<GiKnifeFork className="text-5xl" />
					<h2 className="text-lg font-semibold text-white">Hier eten</h2>
				</div>
			</div>
		</div>
	);
}

function ArticleWithImage(props) {
	return (
		<div className="flex flex-row my-4 justify-start lg:justify-center gap-4">
			{/* Image */}
			<img
				className="rounded-xl object-cover min-w-[8rem] min-h-[8rem] w-32 h-32 border-primary border shadow-sm shadow-white"
				src={props.imgSrc}
				alt={props.imgTitle}
			/>
			{/* Text */}
			<div className="flex flex-col justify-center text-primary ml-2 max-h-32">
				<p className="text-lg font-semibold mb-1">{props.title}</p>
				<p className="text-base font-base text-clip overflow-hidden lg:max-w-lg">{props.text}</p>
			</div>
		</div>
	);
}

export function ArticleList() {
	return (
		<div className="flex flex-col px-8 bg-white text-primary my-4">
			<Title text={"Recente activiteiten"} className="my-4 text-primary" />
			<ArticleWithImage
				imgSrc={ArticleImg01}
				imgTitle={"Nieuwe website"}
				title={"Nieuwe website"}
				text={
					"Op 1 januari 2023 hebben wij onze nieuwe website gelanceerd! We zijn enorm enthousiast om deze aan onze gebruikers te presenteren."
				}
			/>
			<ArticleWithImage
				imgSrc={ArticleImg03}
				imgTitle={"Tegels vervangen"}
				title={"Tegels vervangen"}
				text={
					"Recent hebben wij nieuwe tegels in onze winkel geïnstalleerd. We hopen dat deze nieuwe tegels een frisse en moderne uitstraling aan onze ruimte geven!"
				}
			/>
			<ArticleWithImage
				imgSrc={ArticleImg02}
				imgTitle={"placeholder"}
				title={"Gelukkig nieuwjaar!"}
				text={
					"Gelukkig nieuwjaar! We hopen dat 2023 een mooi jaar wordt voor iedereen. We zijn erg dankbaar voor de steun die we hebben gekregen van onze klanten en we hopen dat we u in 2023 nog beter van dienst kunnen zijn."
				}
			/>
		</div>
	);
}