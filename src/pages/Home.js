import Hero from "../components/Hero";
import ArticleList from "../components/Article";
import { Category, OrderOptions } from "../components/Hero/HeroComponents";
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
