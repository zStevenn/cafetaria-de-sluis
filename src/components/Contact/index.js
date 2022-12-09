import { ContactUs, ContactForm } from "./ContactComponents";

export default function Contact() {
  return (
		<>
			<p className='text-white text-lg font-semibold text-center m-4'>Contacteer ons!</p>
			<ContactUs />
			<ContactForm />
		</>
	);
}
