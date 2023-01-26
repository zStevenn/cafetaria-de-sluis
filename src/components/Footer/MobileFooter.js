import { Link } from "react-router-dom"
import { Paragraph, Title } from "../Text"
import {
	MdOutlineArrowRightAlt,
	MdKeyboardArrowDown,
	MdClose,
} from "react-icons/md"
import { useState } from "react"
import { format } from "date-fns"
import { nl } from "date-fns/locale"

const FooterTitle = ({ text, className, onClick, isOpen }) => {
	return (
		<div
			className="flex flex-row items-center w-full"
			onClick={onClick}
		>
			<Title text={text} className={className} />
			{isOpen ? (
				<MdClose className="ml-2 text-2xl" />
			) : (
				<MdKeyboardArrowDown className="ml-2 text-2xl" />
			)}
		</div>
	)
}

// Display openingstijden
const Openingstijden = () => {
	const [isOpen, setIsOpen] = useState(false)

	const days = [
		{ day: "maandag", open: "Gesloten" },
		{ day: "dinsdag", open: "12:00 - 20:00" },
		{ day: "woensdag", open: "12:00 - 20:00" },
		{ day: "donderdag", open: "12:00 - 20:00" },
		{ day: "vrijdag", open: "12:00 - 20:00" },
		{ day: "zaterdag", open: "12:00 - 20:00" },
		{ day: "zondag", open: "16:00 - 20:00" },
	]

	const currentDay = format(new Date(), "EEEE", { locale: nl })

	return (
		<div className="flex flex-col justify-start items-start text-white w-60 sm:w-auto">
			<FooterTitle
				isOpen={isOpen}
				text="Openingstijden"
				className="text-xl font-bold py-3 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul>
					{days.map(day => (
						<li
							key={day.day}
							className={`flex flex-row hover:scale-110 transition-all capitalize py-0.5 ${
								day.day === currentDay ? "text-blue-500 font-semibold" : ""
							}`}
						>
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
			<FooterTitle
				isOpen={isOpen}
				text={`Handige links`}
				className="text-xl font-bold py-3 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ul>
					<li className="hover:scale-110 transition-all py-0.5">
						<a
							href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
							target="_blank"
							rel="noopener noreferrer"
						>
							<MdOutlineArrowRightAlt className="inline" /> Bestellen
						</a>
					</li>
					{internalLinks.map(link => (
						<li
							key={link.text}
							className="hover:scale-110 transition-all py-0.5"
						>
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
			<FooterTitle
				isOpen={isOpen}
				text="Adresgegevens"
				className="text-xl font-bold py-3 tracking-wider cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			{isOpen && (
				<ol className="text-base">
					<li className="my-0.5">De Sluis 25, 3972 VC</li>
					<li className="my-0.5">Driebergen-Rijsenburg</li>
					<li className="my-0.5">Nederland</li>
					<li className="my-0.5">&nbsp;</li>
					<li className="my-0.5">(0343) - 531 646</li>
					<li className="my-0.5">info@cafetariadesluis.nl</li>
				</ol>
			)}
		</div>
	)
}

export default function MobileFooter() {
	return (
		<footer className="flex flex-col justify-start bg-gray-900">
			<div className="flex flex-col justify-start pl-4 py-4 divide-y-2 divide-slate-50 border-2 border-slate-50">
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
