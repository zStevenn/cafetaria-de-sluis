import { Title } from "./Text";

function ArticleWithImage(props) {
	return (
		<div className="flex flex-row my-4 mx-6 justify-center items-center">
			{/* Image */}
			<div className="flex justify-center basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/3">
				<img className="rounded-xl object-cover max-w-full" src={props.imgSrc} alt={props.imgTitle} />
			</div>
			{/* Text */}
			<div className="flex flex-col justify-center text-white ml-2 h-40 basis-1/2 sm:basis-2/3 md:basis-3/4 lg:basis-1/3">
				<p className="text-lg font-medium mb-1">{props.title}</p>
				<p className="text-base font-base text-clip overflow-hidden h-24 max-w-prose">{props.text}</p>
			</div>
		</div>
	);
}

export default function ArticleList() {
	return (
		<div className="flex flex-col py-6 bg-primary text-white">
			<Title text={"Recente activiteiten"} className="my-10" />
			<ArticleWithImage
				imgSrc={"https://via.placeholder.com/1000"}
				imgTitle={"Nieuwe website"}
				title={"Nieuwe website"}
				text={
					"Op 1 januari 2023 hebben wij onze nieuwe website gelanceerd! We zijn enorm enthousiast om deze aan onze gebruikers te presenteren."
				}
			/>
			<ArticleWithImage
				imgSrc={"https://via.placeholder.com/1000"}
				imgTitle={"Tegels vervangen"}
				title={"Tegels vervangen"}
				text={
					"Recent hebben wij nieuwe tegels in onze winkel geïnstalleerd. We hopen dat deze nieuwe tegels een frisse en moderne uitstraling aan onze ruimte geven!"
				}
			/>
			<ArticleWithImage
				imgSrc={"https://via.placeholder.com/1000"}
				imgTitle={"placeholder"}
				title={"Prijsverhoging"}
				text={
					"Helaas hebben wij moeten besluiten om onze prijzen te verhogen. Dit komt door de hoge kosten van de grondstoffen. We hopen dat u dit begrijpt. We zullen ons best doen om de prijsverhoging zo klein mogelijk te houden."
				}
			/>
		</div>
	);
}
