import { Link } from "react-router-dom"
import { Paragraph, Title } from "../Text"
import { MdOutlineArrowRightAlt } from "react-icons/md"
import { format } from "date-fns"
import { nl } from "date-fns/locale"

const FooterTitle = ({ text, className }) => {
	return (
		<div className="flex flex-row items-center w-full">
			<Title text={text} className={className} />
		</div>
	)
}

// Display openingstijden
const Openingstijden = () => {
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
		<div className="flex flex-col justify-start items-start text-neutral-100">
			<FooterTitle
				text="Openingstijden"
				className="text-xl font-bold py-3 tracking-wider"
			/>
			<ul>
				{days.map(day => (
					<li
						key={day.day}
						className={`flex flex-row capitalize py-0.5 mb-1 last:pb-4 ${
							day.day === currentDay ? "font-bold " : ""
						}`}
					>
						<span className="mr-auto pr-2">{day.day}</span>
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

	return (
		<div className="flex flex-col justify-start items-start text-neutral-100">
			<FooterTitle
				text={`Handige links`}
				className="text-xl font-bold py-3 tracking-wider"
			/>
			<ul>
				<li className="hover:scale-110 transition-all py-0.5 mb-1">
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
						className="hover:scale-110 transition-all py-0.5 last:pb-4"
					>
						<Link to={link.link}>
							<MdOutlineArrowRightAlt className="inline" /> {link.text}
						</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

// Display adresgegevens
const Adresgegevens = () => {
	return (
		<div className="flex flex-col justify-start items-start text-neutral-100">
			<FooterTitle
				text="Adresgegevens"
				className="text-xl font-bold py-3 tracking-wider"
			/>
			<ol className="text-base last:pb-4">
				<li className="mb-1">De Sluis 25, 3972 VC</li>
				<li className="mb-1">Driebergen-Rijsenburg</li>
				<li className="mb-5">Utrecht, Nederland</li>
				<li className="mb-1">(0343) - 531 646</li>
				<li className="mb-1">
					Email:{" "}
					<a className="underline" href="mailto:info@cafetariadesluis.nl">
						info@cafetariadesluis.nl
					</a>
				</li>
			</ol>
		</div>
	)
}

export default function MobileFooter() {
	return (
		<footer className="flex flex-col justify-start bg-primary">
			<div className="flex flex-col gap-1 justify-start px-8 py-4 divide-y-2 divide-neutral-100">
				<Adresgegevens />
				<Openingstijden />
				<FooterLinks />
			</div>
			<div className="bg-neutral-100 px-8 py-2">
				<Paragraph
					className="text-neutral-700"
					text={"© Cafetaria de Sluis 2022 - 2023"}
				/>
			</div>
		</footer>
	)
}
