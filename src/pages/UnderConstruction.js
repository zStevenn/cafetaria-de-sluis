import { Link } from "react-router-dom";

const UnderConstruction = () => {
    return (
        <div className="bg-primary w-screen h-[70vh] flex items-center justify-center">
            <div className="text-center text-white text-xl font-semibold">
                <h1 className="mb-4">Deze pagina is nog in ontwikkeling.</h1>
                <h2 className="mb-16">Sorry voor het ongemak</h2>
                <Link to="/" className="p-4 bg-secondary rounded-lg hover:scale-110 transition-all">Terug naar de homepage</Link>
            </div>
        </div>
    )
}

export default UnderConstruction;
