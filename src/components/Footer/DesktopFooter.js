import { Link } from "react-router-dom"
import { Title, Paragraph } from "../Text"
import { MdOutlineArrowRightAlt } from "react-icons/md"

// Display openingstijden
const Openingstijden = () => {
	const days = [
		{ day: "Maandag", open: "Gesloten" },
		{ day: "Dinsdag", open: "12:00 - 20:00" },
		{ day: "Woensdag", open: "12:00 - 20:00" },
		{ day: "Donderdag", open: "12:00 - 20:00" },
		{ day: "Vrijdag", open: "12:00 - 20:00" },
		{ day: "Zaterdag", open: "12:00 - 20:00" },
		{ day: "Zondag", open: "16:00 - 20:00" },
	]

	return (
		<div className="flex flex-col justify-start items-start text-white w-auto">
			<Title
				text="Openingstijden"
				className="text-xl font-bold py-2 tracking-wider"
			/>
			<ul>
				{days.map(day => (
					<li
						key={day.day}
						className="flex flex-row hover:scale-110 transition-all mb-1"
					>
						<span className="w-28">{day.day}</span>
						<span>{day.open}</span>
					</li>
				))}
			</ul>
		</div>
	)
}

// Display links to other pages
const FooterLinks = () => {
	const internalLinks = [
		{ text: "Menu", link: "/menu" },
		{ text: "Contact", link: "/contact" },
		{ text: "Nieuws", link: "/nieuws" },
		{ text: "FAQ", link: "/FAQ" },
		{ text: "Privacybeleid", link: "/privacybeleid" },
	]

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}

	return (
		<div className="flex flex-col justify-start items-start text-white">
			<Title
				text="Informatie"
				className="text-xl font-bold py-2 tracking-wider"
			/>
			<ul>
				<li className="hover:scale-110 transition-all mb-1">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
						target="_blank"
						rel="noopener noreferrer"
					>
						<MdOutlineArrowRightAlt className="inline" /> Bestellen
					</a>
				</li>
				{internalLinks.map(link => (
					<li key={link.text} className="hover:scale-110 transition-all mb-1">
						<Link to={link.link} onClick={handleClick}>
							<MdOutlineArrowRightAlt className="inline" /> {link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default function Footer() {
	return (
		<footer className="grid bg-primary">
			{/* Footer link wrappers */}
			<div className="grid grid-cols-3 px-8 py-4 shadow-md shadow-gray-900">
				{/* Footer adresgegevens */}
				<div className="flex flex-col justify-start items-start text-white">
					<p className="text-xl font-bold py-2 tracking-wider">Adresgegevens</p>
					<ol className="text-base">
						<li className="mb-1">De Sluis 25, 3972 VC</li>
						<li className="mb-1">Driebergen-Rijsenburg</li>
						<li className="mb-1">Nederland</li>
						<li className="mb-1">&nbsp;</li>
						<li className="mb-1">(0343) - 531 646</li>
						<li className="mb-1">info@cafetariadesluis.nl</li>
					</ol>
				</div>
				{/* Footer openingstijden */}
				<Openingstijden />
				{/* Footer informatie */}
				<FooterLinks />
			</div>
			{/* Footer copyright banner */}
			<div className="bg-white px-8 py-2">
				<Paragraph className="text-neutral-700" text={"© Cafetaria de Sluis 2022 - 2023"} />
			</div>
		</footer>
	)
}
