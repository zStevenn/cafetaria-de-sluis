import { Title } from "./Text";
import ArticleImg01 from "../assets/img/static/article01.jpg";
import ArticleImg02 from "../assets/img/static/article02.jpg";
import ArticleImg03 from "../assets/img/static/article03.jpg";

function ArticleWithImage(props) {
	return (
		<div className="flex flex-row my-4 mx-6 justify-start lg:justify-center gap-4">
			{/* Image */}
			<img className="rounded-xl object-cover min-w-[8rem] w-32 h-32 md:w-40 md:h-40 border-white border shadow-sm shadow-white" src={props.imgSrc} alt={props.imgTitle} />
			{/* Text */}
			<div className="flex flex-col justify-center text-white ml-2 max-h-32">
				<p className="text-lg font-medium mb-1">{props.title}</p>
				<p className="text-base font-base text-clip overflow-hidden lg:max-w-lg">{props.text}</p>
			</div>
		</div>
	);
}

export default function ArticleList() {
	return (
		<div className="flex flex-col py-6 bg-primary text-white">
			<Title text={"Recente activiteiten"} className="my-10" />
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
