import Hero from "../components/Hero";
import ArticleList from "../components/Article";
import { Category } from "../components/Hero/HeroComponents";
import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<ArticleList />
			<Category />
			<Review />
		</>
	);
}