import { Title } from "../components/Text";
import { ContactUs, ContactForm } from "../components/Contact";
import { lazy, Suspense } from "react";
import { AiOutlineLoading } from "react-icons/ai";

// Lazy load the map
const Map = lazy(() => import("../components/Map"));

export default function Contact() {
	return (
		<div className="bg-primary flex flex-col">
			<Title text={"Contacteer ons!"} className="py-4" />
			<div className="flex flex-col md:flex-row justify-center gap-4 m-8">
				<ContactForm className="p-8 w-full md:w-1/2" />
				<Suspense fallback={<AiOutlineLoading className="items-center text-6xl animate-spin text-primary"/>}>
					<Map className="w-full h-[34rem] p-8 md:w-1/2 mb-8 md:mb-0 md:mr-8 bg-white rounded-xl" />
				</Suspense>
			</div>
			<ContactUs />
		</div>
	);
}
