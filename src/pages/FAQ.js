import { FAQ } from "../components/FAQ"
import faqData from "../data/faq.json"
import { Title, Paragraph } from "../components/Text"

export default function FAQpage() {
	return (
		<div className="bg-white min-h-screen flex flex-col px-8 mt-4">
			<Title text="FAQ Pagina" className="mb-2 text-center text-primary" />
			<Paragraph
				className="mb-4 text-primary"
				text="Op deze pagina kun je vaak gestelde vragen vinden. Niet gevonden waar je naar zocht? Je kunt altijd direct contact met ons opnemen."
			/>
			{faqData.map((item, index) => (
				<FAQ key={index} question={item.question} answer={item.answer} />
			))}
		</div>
	)
}
