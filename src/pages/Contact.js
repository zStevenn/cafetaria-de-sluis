import { Title } from "../components/Text"
import ContactForm from "../components/Contact/ContactForm"
import { MdPhone, MdLocationOn, MdEmail } from "react-icons/md"

export default function Contact() {
	return (
		<div className="bg-primary flex flex-col gap-8 px-8">
			<Title text={"Contacteer ons!"} />
			{/* Contact informatie */}
			<div className="bg-white rounded-lg p-4">
				<p>
					<MdPhone className=" mb-2 inline" /> (0343) - 531 646
				</p>
				<p>
					<MdLocationOn className=" mb-2 inline" /> De Sluis 25, 3972 CW
				</p>
				<p>
					<MdEmail className=" mb-2 inline" /> info@cafetariadesluis.nl
				</p>
			</div>
			{/* Contact formulier */}
			<ContactForm className="p-8 w-full" />
			{/* Google Map */}
			<div className="bg-white rounded-lg p-4">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.9730000000003!2d5.295999315673274!3d52.07000097978408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e8e1b0b8b2d7%3A0x8b2b2b2b2b2b2b2b!2sDe%20Sluis!5e0!3m2!1snl!2snl!4v1625581000000!5m2!1snl!2snl"
					width="100%"
					height="400px"
					style={{ border: 0 }}
					allowFullScreen=""
					loading="lazy"
					title="Google Maps"
				></iframe>
			</div>
			{/* Company hours */}
			<div className="bg-white rounded-lg p-4">
				<p className="text-center text-lg text-black font-bold p-2">
					Openingstijden
				</p>
				<p className="text-center text-lg text-black p-2">
					Maandag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Dinsdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Woensdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Donderdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Vrijdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Zaterdag: 11:00 - 21:00
				</p>
				<p className="text-center text-lg text-black p-2">
					Zondag: 11:00 - 21:00
				</p>
			</div>
			{/* Other relevant information */}
			<div className="bg-white rounded-lg p-4">
				<p className="text-center text-lg text-black font-bold p-2">
					Andere relevante informatie
				</p>
				<p className="text-center text-lg text-black p-2">
					Parkeergelegenheid
				</p>
				<p className="text-center text-lg text-black p-2">
					Gratis Wifi
				</p>
				<p className="text-center text-lg text-black p-2">
					Toegankelijk voor rolstoelen
				</p>
				<p className="text-center text-lg text-black p-2">
					Toegankelijk voor mindervaliden
				</p>
				<p className="text-center text-lg text-black p-2">
					Toegankelijk voor kinderwagens
				</p>
				<p className="text-center text-lg text-black p-2">
					Toegankelijk voor huisdieren
				</p>
			</div>
		</div>
	)
}
