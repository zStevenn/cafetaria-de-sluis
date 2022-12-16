import { ContactUs, ContactForm } from "./ContactComponents";

export default function ContactComponents() {
  return (
		<div className="bg-primary">
			<h1 className='text-white text-3xl font-semibold text-center p-4'>Contacteer ons!</h1>
			<ContactUs />
			<ContactForm />
		</div>
	);
}
