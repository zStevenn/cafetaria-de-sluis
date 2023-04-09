import { Title } from "../components/Text"
import ContactForm from "../components/Contact/ContactForm"
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md"
import ContentWrapper from "../components/ContentWrapper"

export default function Contact() {
	return (
		<ContentWrapper>
			<div className="bg-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-8 px-8 pb-8 mt-4">
				<Title
					text={"Contacteer ons!"}
					className="text-primary md:col-span-2"
				/>
				{/* Contact informatie */}
				<div className="bg-primary text-neutral-100 rounded-lg p-4 md:col-span-2 grid place-items-center gap-4">
					<p>
						<MdPhone className="inline mr-2" />
						(0343) - 531 646
					</p>
					<p>
						<MdLocationOn className="inline mr-2" />
						De Sluis 25, 3972 CW
					</p>
					<p>
						<MdEmail className="inline mr-2" />
						<a href="mailto:info@cafetariadesluis.nl">
							info@cafetariadesluis.nl
						</a>
					</p>
				</div>
				{/* Contact formulier */}
				<ContactForm className="p-4" />
				{/* Google Map */}
				<div className="bg-primary rounded-lg p-4">
					<iframe
						src="https://maps.google.com/maps?q=de%20sluis%2025%20driebergen&t=&z=15&ie=UTF8&iwloc=&output=embed"
						width="100%"
						height="400px"
						className="border border-neutral-100 md:h-full"
						allowFullScreen=""
						loading="lazy"
						title="Cafetaria de Sluis"
					></iframe>
				</div>
				{/* Company hours */}
				<div className="bg-primary rounded-lg p-4 text-neutral-100">
					<p className="text-center text-lg font-bold p-2">Openingstijden</p>
					<p className="text-center text-lg p-2">Maandag: Gesloten</p>
					<p className="text-center text-lg p-2">Dinsdag: 12:00 - 20:00</p>
					<p className="text-center text-lg p-2">Woensdag: 12:00 - 20:00</p>
					<p className="text-center text-lg p-2">Donderdag: 12:00 - 20:00</p>
					<p className="text-center text-lg p-2">Vrijdag: 12:00 - 20:00</p>
					<p className="text-center text-lg p-2">Zaterdag: 12:00 - 20:00</p>
					<p className="text-center text-lg p-2">Zondag: 16:00 - 20:00</p>
				</div>
				{/* Other relevant information */}
				<div className="bg-primary rounded-lg p-4 text-neutral-100">
					<p className="text-center text-lg font-bold p-2">
						Andere relevante informatie
					</p>
					<p className="text-center text-lg p-2">Parkeergelegenheid</p>
					<p className="text-center text-lg p-2">Gratis Wifi</p>
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
