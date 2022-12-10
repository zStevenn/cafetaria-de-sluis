import Hero from "../components/Hero";
import ArticleList from "../components/Article";
import { AssortmentExamples } from "../components/Hero/HeroComponents";
import Review from "../components/CustomerReview";

export default function Home() {
	return (
		<>
			<Hero />
			<ArticleList />
			<AssortmentExamples />
			<Review />
		</>
	);
}
