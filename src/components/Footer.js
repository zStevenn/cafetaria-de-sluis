import { Link } from "react-router-dom";
import { Title } from "./Text";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Footer() {
	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="flex flex-col justify-start bg-gray-900 pt-6">
			{/* Footer link wrappers */}
			<div className="flex flex-col sm:flex-row justify-start sm:justify-evenly pl-4 py-4">
				{/* Footer adresgegevens */}
				<div className="flex flex-col justify-start items-start text-white">
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
				<div className="flex flex-col justify-start items-start text-white w-60 sm:w-auto">
					<p className="text-xl font-bold py-2 tracking-wider">Openingstijden</p>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Maandag</span>
						<span>Gesloten</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Dinsdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Woensdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Donderdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Vrijdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Zaterdag</span>
						<span>12:00 - 20:00</span>
					</div>
					<div className="flex flex-row hover:scale-110 transition-all">
						<span className="w-28">Zondag</span>
						<span>12:00 - 20:00</span>
					</div>
				</div>
				{/* Footer informatie */}
				<div className="flex flex-col justify-start items-start text-white">
					<p className="text-xl font-bold py-2 tracking-wider">Informatie</p>
					<ul>
						<li className="hover:scale-110 transition-all">
							<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
								<MdOutlineArrowRightAlt className="inline" /> Bestellen
							</a>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/menu" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Menu
							</Link>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/contact" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Contact
							</Link>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/vacatures" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Vacatures
							</Link>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/nieuws" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Nieuws
							</Link>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/privacybeleid" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Privacybeleid
							</Link>
						</li>
						<li className="hover:scale-110 transition-all">
							<Link to="/cookiebeleid" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Cookiebeleid
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* Footer copyright banner */}
			<div className="bg-primary text-center py-4">
				<Title text={"© Cafetaria de Sluis 2022"} className="hover:scale-110 transition-all" />
			</div>
		</footer>
	);
}
