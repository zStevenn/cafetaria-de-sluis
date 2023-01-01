import { Title } from "../Text";
import { ContactUs, ContactForm } from "./ContactComponents";

export default function ContactComponents() {
  return (
		<div className="bg-primary">
			<Title text={"Contacteer ons!"} className="py-4" />
			<ContactUs />
			<ContactForm />
		</div>
	);
}
