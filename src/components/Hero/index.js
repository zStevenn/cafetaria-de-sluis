import { ReactComponent as HeroImage } from "../../assets/svg/hero-image.svg";
import { PrimaryButton, SecondaryButton } from "../Button";
import { Paragraph, Title, TitleOutline } from "../Text";

export default function Hero() {
	return (
		<>
			<div className="flex flex-col justify-start items-center p-4 bg-primary">
				<HeroImage className="w-2/5 h-2/5" />
				<Title text={"Bestel nu via"} />
				<TitleOutline text={"onze webshop"} />
				<div className="text-center mt-6">
				<Paragraph text={"Heerlijk warme én koude gerechten"} />
				<Paragraph text={"bezorgd direct tot aan de deur!"} />
				</div>
				<div className="flex flex-row justify-between my-6">
					<PrimaryButton to={"https://www.e-food.nl/driebergen/cafeteria-de-sluis"}>Bestel nu</PrimaryButton>
					<SecondaryButton to={"/menu"}>Bekijk menu</SecondaryButton>
				</div>
			</div>
		</>
	);
}
