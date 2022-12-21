import { Link } from "react-router-dom";
import { Title } from "../Text";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-start bg-gray-900 pt-6">
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
						<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis">&gt; Bestellen</a>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/menu">&gt; Menu</Link>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/contact">&gt; Contact</Link>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/vacatures">&gt; Vacatures</Link>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/nieuws">&gt; Nieuws</Link>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/privacybeleid">&gt; Privacybeleid</Link>
					</div>
					<div className="flex flex-row w-3/5 md:w-full">
						<Link to="/cookiebeleid">&gt; Cookiebeleid</Link>
					</div>
				</div>
			</div>
			{/* Footer copyright banner */}
			<div className="bg-primary text-xl text-white font-bold text-center mt-4 pt-4">
				<Title text={"© Cafetaria de Sluis 2022"} />
			</div>
		</footer>
	);
}
