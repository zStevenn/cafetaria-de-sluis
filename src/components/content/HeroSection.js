function HeroSection() {
	return (
		<div className="flex flex-col justify-center p-2 md:flex-row">
			<div className="flex flex-1 flex-col justify-center content-center text-center">
				<div className="text-xl font-normal text-grey">Snel én makkelijk!</div>
				<div className="text-3xl tracking-wide font-bold text-black mb-4">Bestel nu via onze eigen webshop</div>
				<div className="mb-4">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
						className="btn-primary font-semibold"
					>
						Bestel nu online!
					</a>
				</div>
			</div>
			<div className="flex flex-1 justify-center content-center mt-4">
				<img src="/images/hero__image.svg" alt="Hero" />
			</div>
		</div>
	);
}

export default HeroSection;
