import { FAQ } from "../components/FAQ";
import { Title, Subtitle } from "../components/Text";

export default function FAQpage() {
  return (
    <div className="bg-green-700 h-screen flex flex-col px-8">
      <Title text="FAQ Pagina" className="mb-2 text-center" />
      <Subtitle className="mb-4" text="Op deze pagina kun je vaak gestelde vragen vinden. Niet gevonden waar je naar zocht? Je kunt altijd direct contact met ons opnemen." />
      <FAQ question="What is React?" answer="React is a JavaScript library for building user interfaces." />
      <FAQ question="What is a component in React?" answer="In React, a component is a piece of code that represents a part of a user interface. It can include JSX, state, and props." />
    </div>
	);
}
