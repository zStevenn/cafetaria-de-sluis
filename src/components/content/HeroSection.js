function HeroSection() {
	return (
		<div className="grid grid-rows-2 justify-center content-center my-2">
			<div className="flex flex-col justify-center text-center">
				<div className="text-xl font-normal text-grey">Snel én makkelijk!</div>
				<div className="text-3xl tracking-wide font-bold text-black">Bestel nu via onze eigen webshop</div>
				<div className="mt-4">
					<a
						href="https://www.google.com"
						className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
					>
						Bestellen
					</a>
				</div>
			</div>
			<div className="flex justify-center content-center">
				<img src="/images/hero__image.svg" alt="Hero image" />
			</div>
		</div>
	);
}

export default HeroSection;
