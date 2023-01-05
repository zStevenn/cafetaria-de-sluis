import Hero from "../components/Hero";
import { MonthlySnack, OrderOptions, ArticleList } from "../components/Hero/HeroComponents";
// import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<ArticleList />
			<OrderOptions />
			<MonthlySnack />
			{/* <Review /> */}
		</>
	);
}
