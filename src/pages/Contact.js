import { Title } from "../components/Text";
import { ContactUs, ContactForm } from "../components/Contact";
import Map from "../components/Map";

export default function Contact() {
	return (
		<div className="bg-primary flex flex-col">
			<Title text={"Contacteer ons!"} className="py-4" />
			<ContactUs />
			<div className="flex flex-col md:flex-row md:justify-evenly py-8">
        <Map />
				<ContactForm />
			</div>
		</div>
	);
}
