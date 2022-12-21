import { Title } from "../Text";
import { ContactUs, ContactForm } from "./ContactComponents";

export default function ContactComponents() {
  return (
		<div className="bg-primary">
			<Title text={"Contacteer ons!"} />
			<ContactUs />
			<ContactForm />
		</div>
	);
}
