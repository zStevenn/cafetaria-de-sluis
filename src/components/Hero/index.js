import { ReactComponent as HeroImage } from "../../assets/svg/hero-image.svg";
import { PrimaryButton, SecondaryButton } from "../Button";
import { AssortmentExamples } from "./HeroComponents";

export default function Hero() {
	return (
		<>
		<div className="flex flex-col justify-start items-center p-4 bg-primary">
			<HeroImage className="w-2/5 h-2/5" />
			<p className="text-3xl font-bold text-white">Bestel nu via</p>
			<p className="text-3xl font-bold text-white">onze webshop</p>
			<p className="text-base text-white text-clip mt-6">Heerlijk warme én koude gerechten</p>
			<p className="text-base text-white text-clip">bezorgd direct tot aan de deur!</p>
      <div className="flex flex-row justify-between my-6">
        <PrimaryButton>Bestel nu</PrimaryButton>
        <SecondaryButton>Bekijk menu</SecondaryButton>
      </div>
		<AssortmentExamples />
	);
}
