import Hero from "../components/Hero";
import { MonthlySnack, OrderOptions, ArticleList } from "../components/Hero/HeroComponents";
// import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<div className="px-8 py-4">
				<h1 className="text-primary text-center text-lg font-semibold mb-4">In samenwerking met</h1>
				<div className="flex gap-8 justify-center items-center">
					<img src="https://mijn.ntf.nl/app/ndb/img/ntf-logo.png" alt="Logo De Keuken van De Boer" className="w-16 h-16" />
					<img src="https://play-lh.googleusercontent.com/-hFgU3ckd7geA5X0Sb6-nqtFO41NnWE0q-GN2vyWxVj_YJBsMZRf0NeHruKrRFiV4dzM" alt="Logo De Boer" className="w-16 h-16" />
				</div>
			</div>
			<ArticleList />
			<div className="block px-8">
			<h1 className="text-3xl font-semibold mb-4 text-center truncate">Locatie & Openingstijden</h1>
			<div className="flex flex-col md:flex-row gap-8 justify-center text-white">
				<div className="flex-1 bg-primary p-4 rounded-lg shadow shadow-primary">
					<h3 className="text-xl text-center">Openingstijden</h3>
					<ul className="mt-4">
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Maandag:</div>
							<div className="w-1/2 pl-1">Gesloten</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Dinsdag:</div>
							<div className="w-1/2 pl-1">12:00 - 20:00</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Woensdag:</div>
							<div className="w-1/2 pl-1">12:00 - 20:00</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Donderdag:</div>
							<div className="w-1/2 pl-1">12:00 - 20:00</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Vrijdag:</div>
							<div className="w-1/2 pl-1">12:00 - 20:00</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Zaterdag:</div>
							<div className="w-1/2 pl-1">12:00 - 20:00</div>
						</li>
						<li className="my-1 flex items-center">
							<div className="w-1/2 pr-1 text-right">Zondag:</div>
							<div className="w-1/2 pl-1">16:00 - 20:00</div>
						</li>
					</ul>
				</div>
				<div className="flex-1 bg-primary p-4 rounded-lg shadow shadow-primary">
					<div className="">Block</div>
					</div>
				</div>
			</div>
			<OrderOptions />
			<MonthlySnack />
			{/* <Review /> */}
		</>
	);
}
