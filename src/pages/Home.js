import CTASection from "../components/content/CTASection";
import ProductHighlights from "../components/content/ProductHighlights";
import Review from "../components/content/Review";
import Hero from "../components/Hero";

export default function Home() {
	return (
		<>
			<Hero />
			<CTASection />
			<ProductHighlights />
			<Review />
		</>
	);
}
