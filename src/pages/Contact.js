import { Title } from "../components/Text";
import { ContactUs, ContactForm } from "../components/Contact";

export default function Contact() {
  return (
    <div className="bg-primary">
			<Title text={"Contacteer ons!"} className="py-4" />
			<ContactUs />
			<ContactForm />
		</div>
  );
}