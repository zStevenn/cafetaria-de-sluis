import { PrimaryButton } from "../components/Button"
import ContentWrapper from "../components/ContentWrapper"
import { Title, Paragraph } from "../components/Text"

export default function Menu() {
	return (
		<ContentWrapper>
			<div className="px-8 mb-4">
				<Title className="text-neutral-900 mb-4" text="Menu" />
				<Paragraph
					className="text-neutral-900 mb-4"
					text="Hier vindt u een overzicht van een aantal van onze heerlijke gerechten. Houd er rekening mee dat deze selectie slechts een voorbeeld is van ons assortiment en dat u de actuele prijzen en de volledige menulijst kunt vinden op onze webshop. Neem gerust een kijkje en ontdek de smaken die ons restaurant te bieden heeft!"
				/>
				<PrimaryButton to="https://www.e-food.nl/driebergen/cafeteria-de-sluis">
					Naar webshop
				</PrimaryButton>
			</div>
			<div className="grid grid-cols-12 px-8 pb-4 gap-2">
				<div className="col-span-12 md:col-span-4 p-4 bg-[#F5DEB3]">
					{/* <img src="/images/menu/1.png" alt="Sluisburgers" /> */}
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/broodjes/happyburgers"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Sluisburgers &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-4 p-4 bg-[#F5F5F5]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/ijsshake/milkshake"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Milkshakes &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-4 p-4 bg-[#F5DEB3]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/menus/plates"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Menu's &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-6 p-4 bg-[#DEF8D6]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/snacks/vega-snacks"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Vegetarische snacks &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-6 p-4 bg-[#DEF8D6]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/broodjes/vega-broodjes"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Vegetarische broodjes &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-6 p-4 bg-[#F5DEB3]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/patat"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Patat frites &gt;</p>
					</a>
				</div>
				<div className="col-span-12 md:col-span-6 p-4 bg-[#F5F5F5]">
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis/patat/gezinszak"
						target="_blank"
						rel="noopener noreferrer"
					>
						<p className="text-neutral-800">Gezinszak frites &gt;</p>
					</a>
				</div>
			</div>
			<div className="px-8 text-neutral-800 mb-4">
				<p className="text-xl">... en nog veel meer opties!</p>
				<p>
					Bekijk ons hele assortiment en bestel direct in{" "}
					<a
						href="https://www.e-food.nl/driebergen/cafeteria-de-sluis"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						onze webshop!
					</a>
				</p>
			</div>
		</ContentWrapper>
	)
}
