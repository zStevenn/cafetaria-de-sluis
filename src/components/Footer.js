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
			<div className="flex flex-col md:flex-row justify-start md:justify-evenly pl-4 py-4">
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
				<div className="flex flex-col justify-start items-start text-white">
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
				<div className="flex flex-col justify-start items-start text-white">
					<p className="text-xl font-bold py-2 tracking-wider">Informatie</p>
					<ul>
						<li>
							<a href="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
								<MdOutlineArrowRightAlt className="inline" /> Bestellen
							</a>
						</li>
						<li>
							<Link to="/menu" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Menu
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Contact
							</Link>
						</li>
						<li>
							<Link to="/vacatures" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Vacatures
							</Link>
						</li>
						<li>
							<Link to="/nieuws" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Nieuws
							</Link>
						</li>
						<li>
							<Link to="/privacybeleid" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Privacybeleid
							</Link>
						</li>
						<li>
							<Link to="/cookiebeleid" onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> Cookiebeleid
							</Link>
						</li>
					</ul>
				</div>
			</div>
			{/* Footer copyright banner */}
			<div className="bg-primary text-center py-4">
				<Title text={"© Cafetaria de Sluis 2022"} />
			</div>
		</footer>
	);
}
