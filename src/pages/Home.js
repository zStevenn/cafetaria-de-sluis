import Hero from "../components/Hero";
import { MonthlySnack, OrderOptions, ArticleList } from "../components/Hero/HeroComponents";
// import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="px-8 py-4">
				<h1 className="text-primary text-center text-lg mb-4">In samenwerking met</h1>
				<div className="flex gap-8 justify-center items-center">
					<img src="https://mijn.ntf.nl/app/ndb/img/ntf-logo.png" alt="Logo De Keuken van De Boer" className="w-16 h-16" />
					<img src="https://play-lh.googleusercontent.com/-hFgU3ckd7geA5X0Sb6-nqtFO41NnWE0q-GN2vyWxVj_YJBsMZRf0NeHruKrRFiV4dzM" alt="Logo De Boer" className="w-16 h-16" />
				</div>
			</div>
			<ArticleList />
			<OrderOptions />
			<MonthlySnack />
			{/* <Review /> */}
		</>
	);
}
