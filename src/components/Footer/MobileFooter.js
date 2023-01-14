import { Link } from "react-router-dom"
import { Paragraph, Title } from "../Text"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { useState } from "react"

// Display openingstijden
const Openingstijden = () => {
	const [isOpen, setIsOpen] = useState(false)

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
		<div className="flex flex-col justify-start items-start text-white w-60 sm:w-auto">
			<Title
				text="Openingstijden"
				className="text-xl font-bold py-2 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul>
					{days.map(day => (
						<li className="flex flex-row hover:scale-110 transition-all">
							<span className="w-28">{day.day}</span>
							<span>{day.open}</span>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

// Display links to other pages
const FooterLinks = () => {
	const [isOpen, setIsOpen] = useState(false)

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
				className="text-xl font-bold py-2 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul>
					<li className="hover:scale-110 transition-all">
						<a
							href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowRightAlt className="inline" /> Bestellen
						</a>
					</li>
					{internalLinks.map(link => (
						<li className="hover:scale-110 transition-all">
							<Link to={link.link} onClick={handleClick}>
								<MdOutlineArrowRightAlt className="inline" /> {link.text}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

// Display adresgegevens
const Adresgegevens = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className="flex flex-col justify-start items-start text-white">
			<Title
				text="Adresgegevens"
				className="text-xl font-bold py-2 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ol className="text-base">
					<li>De Sluis 25, 3972 VC</li>
					<li>Driebergen-Rijsenburg</li>
					<li>Nederland</li>
					<li>&nbsp;</li>
					<li>(0343) - 531 646</li>
					<li>info@cafetariadesluis.nl</li>
				</ol>
			)}
		</div>
	)
}

export default function MobileFooter() {
	return (
		<footer className="flex flex-col justify-start bg-gray-900">
			<div className="flex flex-col justify-start pl-4 py-4">
				<Openingstijden />
				<FooterLinks />
				<Adresgegevens />
			</div>
			<div className="bg-primary text-center py-4">
				<Paragraph text={"© Cafetaria de Sluis 2022"} />
			</div>
		</footer>
	)
}
