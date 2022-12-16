export default function Footer() {
	return (
		<footer className="flex flex-col justify-start bg-primary pt-6">
			{/* Footer link wrappers */}
			<div className="flex flex-col md:flex-row justify-start md:justify-evenly">
				{/* Footer adresgegevens */}
				<div className="flex flex-col justify-start items-start text-white pl-4">
					<p className="text-xl font-bold py-2 tracking-wider">Adresgegevens</p>
					<ul className="text-base">
						<li>De Sluis 25, 3972 VC</li>
						<li>Driebergen-Rijsenburg</li>
						<li>Nederland</li>
						<li>&nbsp;</li>
						<li>(0343) - 531 646</li>
						<li>info@cafetariadesluis.nl</li>
					</ul>
				</div>
				{/* Footer openingstijden */}
				<div className="flex flex-col justify-start items-start text-white pl-4">
					<p className="text-xl font-bold py-2 tracking-wider">Openingstijden</p>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Maandag</span>
						<span>Gesloten</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Dinsdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Woensdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Donderdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Vrijdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Zaterdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[45%]">Zondag</span>
						<span>12:00 - 20:00</span>
					</div>
				</div>
				{/* Footer informatie */}
				<div className="flex flex-col justify-start items-start text-white pl-4">
					<p className="text-xl font-bold py-2 tracking-wider">Informatie</p>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis">Online bestellen</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/menu">Menu</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/contact">Contact</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/vacatures">Vacatures</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/nieuws">Nieuws</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/privacy-policy">Algemene voorwaarden</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<span className="min-w-[10%]">&gt;</span>
						<a href="/cookie-policy">Cookie policy</a>
					</div>
				</div>
			</div>
			{/* Footer copyright banner */}
			<div className="bg-gray-900 text-xl text-white font-bold text-center p-3 mt-4">&copy; Cafetaria de Sluis</div>
		</footer>
	);
}
