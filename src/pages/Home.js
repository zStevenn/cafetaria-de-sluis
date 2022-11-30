import HeroSection from "../components/content/HeroSection";
import CTASection from "../components/content/CTASection";
import ProductHighlights from "../components/content/ProductHighlights";
import Review from "../components/content/Review";

export default function Home() {
	return (
		<>
			<HeroSection />
			<CTASection />
			<ProductHighlights />
			<Review />
		</>
	);
}
