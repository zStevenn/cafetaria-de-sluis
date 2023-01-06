import { ReactComponent as HeroImage } from "../../assets/svg/hero-image.svg";
import { PrimaryButton, InternalSecondaryButton } from "../Button";
import { Paragraph, Title } from "../Text";

export default function Hero() {
	return (
		<div className="flex flex-col md:flex-row justify-center items-center p-8 bg-primary">
			<HeroImage className="h-full md:w-full md:flex-1 lg:flex-none lg:h-96 lg:w-96" />
			<div className="flex flex-col md:flex-1 lg:flex-none justify-center items-center">
				<Title text={"Bestel nu via"} />
				<Title text={"onze webshop"} />
				<Paragraph text={"Heerlijk warme én koude gerechten"} className="mt-4" />
				<Paragraph text={"bezorgd direct tot aan de deur!"} />
				<div className="flex flex-row justify-between my-6">
					<PrimaryButton to={"https://www.e-food.nl/driebergen/cafeteria-de-sluis"}>Bestel nu</PrimaryButton>
					<InternalSecondaryButton to={"/menu"}>Bekijk menu</InternalSecondaryButton>
				</div>
			</div>
		</div>
	);
}
