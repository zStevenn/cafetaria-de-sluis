import { FAQ } from "../components/FAQ";
import faqData from "../data/faq.json";
import { Title, Subtitle, Paragraph } from "../components/Text";

export default function FAQpage() {
  return (
	<div className="bg-primary min-h-screen flex flex-col px-8">
      		<Title text="FAQ Pagina" className="mb-2 text-center" />
      		<Paragraph className="mb-4" text="Op deze pagina kun je vaak gestelde vragen vinden. Niet gevonden waar je naar zocht? Je kunt altijd direct contact met ons opnemen." />
		{faqData.map((item, index) => <FAQ key={index} question={item.question} answer={item.answer} />)}
    	</div>
	);
}
