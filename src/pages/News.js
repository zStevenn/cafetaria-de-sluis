import { Title } from "../components/Text"
import { NewsCard } from "../components/News"
import ContentWrapper from "../components/ContentWrapper"

export default function News() {
	return (
		<ContentWrapper>
			<Title text={"Nieuws"} className="my-4 text-primary" />
			<p className="text-primary mb-4 px-8">Welkom op onze nieuwspagina waar u op de hoogte blijft van de laatste ontwikkelingen en gebeurtenissen binnen onze cafetaria. Hier vindt u recente nieuwsartikelen over onze nieuwe gerechten, aanbiedingen en meer. Blijf op de hoogte van alles wat er speelt in onze cafetaria en mis nooit meer een update!</p>
			<div className="bg-neutral-100 grid grid-cols-1 md:grid-cols-2 gap-4 px-8 pb-8">
				<NewsCard
					title="Nieuwe website!"
					date="4 Januari 2023"
					text="Onze nieuwe website-ontwerp wordt gelanceerd in januari 2023 en we verwachten dat dit leidt tot een toename van
				bezoekersaantallen en interactie op onze site. We blijven ook werken aan het uitbreiden van onze website met
				meer waardevolle content. We zijn enthousiast om jullie binnenkort te verwelkomen op onze vernieuwde site."
				/>
				<NewsCard
					title="Prijsverhoging"
					date="1 Januari 2023"
					text="Onze recente prijsverhoging is van kracht om onze kosten te dekken en om onze producten en diensten te
					verbeteren. Als u vragen heeft over de prijsverhoging of hulp nodig heeft bij het begrijpen ervan, neem dan
					gerust contact met ons op."
				/>
				<NewsCard
					title="Tegels vervangen"
					date="12 December 2022"
					text="We hebben onlangs nieuwe tegels geplaatst in onze winkel en we zijn van mening dat dit de zaak een mooiere
					en nettere uitstraling geeft. We zouden graag horen wat u van deze verandering vindt en of u het eens bent
					met onze mening. Laat het ons weten als u de winkel bezoekt of stuur ons een bericht met uw feedback. We
					waarderen uw mening altijd."
				/>
			</div>
		</ContentWrapper>
	)
}
