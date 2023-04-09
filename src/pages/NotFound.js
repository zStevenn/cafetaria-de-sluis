import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	}, [navigate]);

	return(
		<div className="flex flex-col bg-green h-screen justify-center items-center text-center text-neutral-100">
		<span className="text-6xl font-bold">404</span>
		<span className="text-4xl font-semibold">Oops, pagina niet gevonden</span>
		<span className="text-base mt-4">Onze excuses, de pagina die je zoekt bestaat niet.</span>
		<span className="text-base">U wordt automatisch doorverwezen naar onze homepagina.</span>
		<span className="text-base">Gebeurt er niks? U kunt ook op de onderstaande knop klikken.</span>
		<a href="/" className="px-4 py-6 bg-neutral-100 border-neutral-100 rounded-full mt-2 text-green font-bold">Terug naar homepagina</a>
      		</div>
	);
}
