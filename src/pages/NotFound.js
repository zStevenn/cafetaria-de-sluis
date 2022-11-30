import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate("/");
		}, 3000);
	}, [navigate]);

	return <h1>De pagina kon niet worden gevonden. U word doorverwezen naar de homepagina.</h1>
}
