import { GiKnifeFork } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { Title } from "../Text";
import { Card } from "../Card";
import ArticleImg01 from "../../assets/img/static/article01.jpg";
import ArticleImg02 from "../../assets/img/static/article02.jpg";
import ArticleImg03 from "../../assets/img/static/article03.jpg";
import Wings from "../../assets/img/static/wings.jpg";
import Cheesecrack from "../../assets/img/static/cheesecrack.jpg";

// Shortcut of highlighted monthly products
export function MonthlySnack() {
	return (
		<div className="flex flex-col px-8">
			<Title text={"Snack(s) van de maand"} className="text-primary py-4" />
			<div className="flex flex-row gap-4 justify-center pb-4">
				<Card title={"Hotwings 5st"} imgSrc={Wings} imgTitle={"Hotwings 5st"} />
				<Card title={"Cheesecrack"} imgSrc={Cheesecrack} imgTitle={"Cheesecrack"} />
			</div>
		</div>
	);
}

// Banner showcasing order options: take away, delivery, eat in
export function OrderOptions() {
	return (
		<div className="flex flex-col flex-nowrap text-primary justify-evenly py-4 px-8">
			<Title text={"Bestelopties"} className="text-primary py-4" />
			<div className="flex flex-col md:flex-row gap-4 justify-evenly items-center my-4">
				<div className="flex flex-col flex-nowrap items-center justify-center hover:scale-110 transition-all shadow shadow-primary rounded-lg p-4 w-40 h-40">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-primary truncate">Bezorgen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center justify-center hover:scale-110 transition-all shadow shadow-primary rounded-lg p-4 w-40 h-40">
					<MdDeliveryDining className="text-5xl" />
					<h2 className="text-lg font-semibold text-primary truncate">Afhalen</h2>
				</div>
				<div className="flex flex-col flex-nowrap items-center justify-center hover:scale-110 transition-all shadow shadow-primary rounded-lg p-4 w-40 h-40">
					<GiKnifeFork className="text-5xl" />
					<h2 className="text-lg font-semibold text-primary truncate">Hier eten</h2>
				</div>
			</div>
		</div>
	);
}

// Article with image and text
function ArticleWithImage(props) {
	return (
		<div className="flex flex-col md:flex-row my-4 items-center gap-4">
			{/* Image */}
			<img
				className="rounded-xl object-cover w-40 h-40 md:flex-1 border-primary border shadow-md shadow-primary"
				src={props.imgSrc}
				alt={props.imgTitle}
			/>
			{/* Text */}
			<div className="flex flex-col md:flex-1 text-center md:text-start text-primary ml-2">
				<p className="text-lg font-semibold mb-1">{props.title}</p>
				<p className="text-base font-base lg:max-w-lg">{props.text}</p>
			</div>
		</div>
	);
}

// List of articles
export function ArticleList() {
	return (
		<div className="flex flex-col px-8 text-primary my-4">
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
