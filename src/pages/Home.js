import Hero from "../components/Hero";
import { Category, OrderOptions, ArticleList } from "../components/Hero/HeroComponents";
// import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<ArticleList />
			<OrderOptions />
			<Category />
			{/* <Review /> */}
		</>
	);
}
