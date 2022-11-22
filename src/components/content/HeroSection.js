function HeroSection() {
	return (
		<div className="flex flex-col justify-center p-2 md:flex-row">
			<div className="flex flex-1 flex-col justify-center content-center text-center">
				<div className="text-xl font-normal text-grey">Snel én makkelijk!</div>
				<div className="text-3xl tracking-wide font-bold text-black mb-4">Bestel nu via onze eigen webshop</div>
				<div>
					<a
						href="https://www.google.com"
						className="bg-transparent hover:bg-green text-green font-semibold hover:text-white py-3 px-6 border border-green hover:border-transparent rounded-lg"
					>
						Bestel nu online!
					</a>
				</div>
			</div>
			<div className="flex flex-1 justify-center content-center mt-4">
				<img src="/images/hero__image.svg" alt="Hero image" />
			</div>
		</div>
	);
}

export default HeroSection;
