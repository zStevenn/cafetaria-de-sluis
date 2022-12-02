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
		<div className="flex flex-col bg-green-700 h-screen justify-center items-center text-center text-white">
		<span className="text-6xl font-bold">404</span>
		<span className="text-4xl font-semibold">Oops, pagina niet gevonden</span>
		<span className="text-base mt-4">Onze excuses, de pagina die je zoekt bestaat niet.</span>
		<span className="text-base">U wordt automatisch doorverwezen naar onze homepagina.</span>
		<span className="text-base">Gebeurt er niks? U kunt ook op de onderstaande knop klikken.</span>
		<a href="/" className="px-4 py-6 bg-white border-white rounded-full mt-2 text-green-700 font-bold">Terug naar homepagina</a>
      		</div>
	);
}
