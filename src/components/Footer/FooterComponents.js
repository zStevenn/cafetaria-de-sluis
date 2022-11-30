import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";
import Footer from ".";

const FooterAnchor = ({ to, children }) => {
  return (
    <Link to={to} className="py-2 flex flex-row align-center content-center text-center hover:underline font-sans">
      <MdDoubleArrow className="material-icons md-18 mr-1.5" />{children}
    </Link>
  );
}

export function MobileFooter() {
	return (
		<>
			<div className="flex flex-col bg-green text-white">
				{/* General Links */}
				<div className="">
					<span className="text-lg font-bold font-sans">Algemeen</span>
					<ul className="flex flex-col">
            <FooterAnchor to="/cookie-policy">Cookie Policy</FooterAnchor>
            <FooterAnchor to="/privacy-policy">Privacy Policy</FooterAnchor>
            <FooterAnchor to="/servicevoorwaarden">Service voorwaarden</FooterAnchor>
					</ul>
				</div>
				<div className="my-2">
					<span className="text-2xl font-bold font-sans">&copy; Cafetaria de Sluis</span>
				</div>
			</div>
		</>
	);
}
