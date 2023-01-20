import { Title } from "../components/Text"
import ContactForm from "../components/Contact/ContactForm"
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md"
import ContentWrapper from "../components/ContentWrapper"

export default function Contact() {
	return (
		<ContentWrapper>
		<div className="bg-white flex flex-col gap-8 px-8 pb-8">
			<Title text={"Contacteer ons!"} className="text-primary" />
			{/* Contact informatie */}
			<div className="bg-primary text-white rounded-lg p-4">
				<p>
					<MdPhone className="mb-2 inline" /> (0343) - 531 646
				</p>
				<p>
					<MdLocationOn className="mb-2 inline" /> De Sluis 25, 3972 CW
				</p>
				<p>
					<MdEmail className="mb-2 inline" /> info@cafetariadesluis.nl
				</p>
			</div>
			{/* Contact formulier */}
			<ContactForm className="p-8 w-full" />
			{/* Google Map */}
			<div className="bg-primary rounded-lg p-4">
				<iframe
					src="https://maps.google.com/maps?q=de%20sluis%2025%20driebergen&t=&z=15&ie=UTF8&iwloc=&output=embed"
					width="100%"
					height="400px"
					className="border border-white"
					allowFullScreen=""
					loading="lazy"
					title="Cafetaria de Sluis"
				></iframe>
			</div>
			{/* Company hours */}
			<div className="bg-primary rounded-lg p-4 text-white">
				<p className="text-center text-lg font-bold p-2">
					Openingstijden
				</p>
				<p className="text-center text-lg p-2">
					Maandag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Dinsdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Woensdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Donderdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Vrijdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Zaterdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg p-2">
					Zondag: 11:00 - 21:00
				</p>
			</div>
			{/* Other relevant information */}
			<div className="bg-primary rounded-lg p-4 text-white">
				<p className="text-center text-lg font-bold p-2">
					Andere relevante informatie
				</p>
				<p className="text-center text-lg p-2">
					Parkeergelegenheid
				</p>
				<p className="text-center text-lg p-2">
					Gratis Wifi
				</p>
				<p className="text-center text-lg p-2">
					Toegankelijk voor rolstoelen
				</p>
				<p className="text-center text-lg p-2">
					Toegankelijk voor mindervaliden
				</p>
				<p className="text-center text-lg p-2">
					Toegankelijk voor kinderwagens
				</p>
				<p className="text-center text-lg p-2">
					Toegankelijk voor huisdieren
				</p>
			</div>
		</div>
		</ContentWrapper>
	)
}
