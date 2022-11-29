import HeroSection from '../content/HeroSection'
import CTASection from '../content/CTASection'
import ProductHighlights from '../content/ProductHighlights'
import Review from '../content/Review'
import Footer from '../content/Footer'

export function Home() {
	return (
    <>
      <HeroSection />
      <CTASection />
      <ProductHighlights />
      <Review />
      <Footer />
    </>
  );
}
